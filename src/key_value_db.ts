//
// Cognica
//
// Copyright (c) 2025 Cognica
//

import * as proto from "@/proto/generated/key_value_db"

import { Channel } from "./channel"
import { GrpcClient } from "./client"

export interface PutRequest {
  keyspaceName: string
  key: Buffer
  value: Buffer
  ttl?: number
  createIfMissing?: boolean
}

export interface BatchedPutRequest {
  keyspaceName: string
  keys: Buffer[]
  values: Buffer[]
  ttls?: number[]
  createIfMissing?: boolean
}

export class KeyValueDB extends GrpcClient<proto.KeyValueDBServiceClient> {
  constructor(channel: Channel, timeout: number | undefined = undefined) {
    const client = new proto.KeyValueDBServiceClient(
      channel.address,
      channel.credential,
      channel.options,
    )
    super(channel, client, timeout)
  }

  get(keyspaceName: string, key: string | Buffer): Promise<Buffer> {
    const request = {
      keyspaceName: keyspaceName,
      key: this.toBuffer(key),
    } as proto.GetRequest
    return this.createPromise<Buffer, proto.GetRequest, proto.GetResponse>(
      request,
      "get",
      (response: proto.GetResponse) => {
        return response.value
      },
    )
  }

  getBatch(keyspaceName: string, keys: (string | Buffer)[]): Promise<Buffer[]> {
    const request = {
      keyspaceName: keyspaceName,
      keys: keys.map((key) => this.toBuffer(key)),
    } as proto.BatchedGetRequest
    return this.createPromise<
      Buffer[],
      proto.BatchedGetRequest,
      proto.BatchedGetResponse
    >(request, "getBatch", (response: proto.BatchedGetResponse) => {
      return response.values
    })
  }

  put(
    keyspaceName: string,
    key: string | Buffer,
    value: string | Buffer,
    ttl?: number,
    createIfMissing?: boolean,
  ): Promise<boolean>
  put(request: PutRequest): Promise<boolean>
  put(
    request: PutRequest | string,
    key?: string | Buffer,
    value?: string | Buffer,
    ttl: number = 0,
    createIfMissing: boolean = true,
  ) {
    let putRequest
    if (typeof request === "string") {
      putRequest = {
        keyspaceName: request,
        key: this.toBuffer(key),
        value: this.toBuffer(value),
        ttl: ttl,
        createIfMissing: createIfMissing,
      } as proto.PutRequest
    } else {
      putRequest = proto.PutRequest.fromJSON(request)
    }
    return this.createPromise<boolean, proto.PutRequest, proto.PutResponse>(
      putRequest,
      "put",
      (response: proto.PutResponse) => {
        return response.response?.status == proto.StatusType.kOK
      },
    )
  }

  putBatch(
    keyspaceName: string,
    keys: (string | Buffer)[],
    values: (string | Buffer)[],
    ttls?: number[],
    createIfMissing?: boolean,
  ): Promise<boolean[]>
  putBatch(requests: BatchedPutRequest): Promise<boolean[]>
  putBatch(
    requests: BatchedPutRequest | string,
    keys?: (string | Buffer)[],
    values?: (string | Buffer)[],
    ttls?: number[],
    createIfMissing: boolean = true,
  ) {
    let batchedRequest
    if (typeof requests === "string") {
      batchedRequest = {
        keyspaceName: requests,
        keys: keys?.map((key) => this.toBuffer(key)),
        values: values?.map((value) => this.toBuffer(value)),
        ttls: ttls || Array(keys!.length).fill(0),
        createIfMissing: createIfMissing,
      } as proto.BatchedPutRequest
    } else {
      batchedRequest = proto.BatchedPutRequest.fromJSON(requests)
    }
    return this.createPromise<
      boolean[],
      proto.BatchedPutRequest,
      proto.BatchedPutResponse
    >(batchedRequest, "putBatch", (response: proto.BatchedPutResponse) => {
      return response.responses.map(
        (response) => response.status == proto.StatusType.kOK,
      )
    })
  }

  remove(keyspaceName: string, key: string | Buffer): Promise<boolean> {
    const request = {
      keyspaceName: keyspaceName,
      key: this.toBuffer(key),
    } as proto.RemoveRequest
    return this.createPromise<
      boolean,
      proto.RemoveRequest,
      proto.RemoveResponse
    >(request, "remove", (response: proto.RemoveResponse) => {
      return response.response?.status == proto.StatusType.kOK
    })
  }

  removeBatch(
    keyspaceName: string,
    keys: (string | Buffer)[],
  ): Promise<boolean[]> {
    const request = {
      keyspaceName: keyspaceName,
      keys: keys.map((key) => this.toBuffer(key)),
    } as proto.BatchedRemoveRequest
    return this.createPromise<
      boolean[],
      proto.BatchedRemoveRequest,
      proto.BatchedRemoveResponse
    >(request, "removeBatch", (response: proto.BatchedRemoveResponse) => {
      return response.responses?.map(
        (response) => response.status == proto.StatusType.kOK,
      )
    })
  }

  private toBuffer(value: string | Buffer | undefined): Buffer | undefined {
    if (typeof value === "string") {
      return Buffer.from(value, "utf-8")
    }
    return value
  }
}

export class KeyspaceManager extends GrpcClient<proto.KeyspaceManagerServiceClient> {
  constructor(channel: Channel, timeout: number | undefined = undefined) {
    const client = new proto.KeyspaceManagerServiceClient(
      channel.address,
      channel.credential,
      channel.options,
    )
    super(channel, client, timeout)
  }

  createKeyspace(keyspaceName: string): Promise<boolean> {
    return this.createPromise<
      boolean,
      proto.CreateKeyspaceRequest,
      proto.CreateKeyspaceResponse
    >(
      { keyspaceName: keyspaceName } as proto.CreateKeyspaceRequest,
      "createKeyspace",
      (response: proto.CreateKeyspaceResponse) => {
        return response.response?.status === proto.StatusType.kOK
      },
    )
  }

  listKeyspace(): Promise<string[]> {
    return this.createPromise<
      string[],
      proto.ListKeyspacesRequest,
      proto.ListKeyspacesResponse
    >({}, "listKeyspaces", (response: proto.ListKeyspacesResponse) => {
      return response.keyspaceNames
    })
  }

  truncateKeyspace(keyspaceName: string): Promise<string[]> {
    return this.createPromise<
      string[],
      proto.TruncateKeyspaceRequest,
      proto.TruncateKeyspaceResponse
    >(
      {
        keyspaceName: keyspaceName,
      } as proto.TruncateKeyspaceRequest,
      "truncateKeyspace",
      (response: proto.TruncateKeyspaceResponse) => {
        return response.response?.status === proto.StatusType.kOK
      },
    )
  }

  dropKeyspace(keyspaceName: string): Promise<boolean> {
    return this.createPromise<
      boolean,
      proto.DropKeyspaceRequest,
      proto.DropKeyspaceResponse
    >(
      { keyspaceName: keyspaceName } as proto.DropKeyspaceRequest,
      "dropKeyspace",
      (response: proto.DropKeyspaceResponse) => {
        return response.response?.status === proto.StatusType.kOK
      },
    )
  }
}
