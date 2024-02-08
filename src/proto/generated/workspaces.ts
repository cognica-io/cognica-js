/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cognica.rpc";

export interface CreateWorkspaceRequest {
  workspaceName: string;
}

export interface CreateWorkspaceResponse {
  status: CreateWorkspaceResponse_Status;
}

export enum CreateWorkspaceResponse_Status {
  Invalid = 0,
  Success = 1,
  AlreadyExists = 2,
  UNRECOGNIZED = -1,
}

export function createWorkspaceResponse_StatusFromJSON(object: any): CreateWorkspaceResponse_Status {
  switch (object) {
    case 0:
    case "Invalid":
      return CreateWorkspaceResponse_Status.Invalid;
    case 1:
    case "Success":
      return CreateWorkspaceResponse_Status.Success;
    case 2:
    case "AlreadyExists":
      return CreateWorkspaceResponse_Status.AlreadyExists;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CreateWorkspaceResponse_Status.UNRECOGNIZED;
  }
}

export function createWorkspaceResponse_StatusToJSON(object: CreateWorkspaceResponse_Status): string {
  switch (object) {
    case CreateWorkspaceResponse_Status.Invalid:
      return "Invalid";
    case CreateWorkspaceResponse_Status.Success:
      return "Success";
    case CreateWorkspaceResponse_Status.AlreadyExists:
      return "AlreadyExists";
    case CreateWorkspaceResponse_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DropWorkspaceRequest {
  workspaceName: string;
}

export interface DropWorkspaceResponse {
  status: DropWorkspaceResponse_Status;
}

export enum DropWorkspaceResponse_Status {
  Invalid = 0,
  Success = 1,
  UNRECOGNIZED = -1,
}

export function dropWorkspaceResponse_StatusFromJSON(object: any): DropWorkspaceResponse_Status {
  switch (object) {
    case 0:
    case "Invalid":
      return DropWorkspaceResponse_Status.Invalid;
    case 1:
    case "Success":
      return DropWorkspaceResponse_Status.Success;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DropWorkspaceResponse_Status.UNRECOGNIZED;
  }
}

export function dropWorkspaceResponse_StatusToJSON(object: DropWorkspaceResponse_Status): string {
  switch (object) {
    case DropWorkspaceResponse_Status.Invalid:
      return "Invalid";
    case DropWorkspaceResponse_Status.Success:
      return "Success";
    case DropWorkspaceResponse_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListWorkspacesRequest {
}

export interface Workspace {
  workspaceId: number;
  workspaceName: string;
}

export interface ListWorkspacesResponse {
  status: ListWorkspacesResponse_Status;
  workspaces: Workspace[];
}

export enum ListWorkspacesResponse_Status {
  Invalid = 0,
  Success = 1,
  UNRECOGNIZED = -1,
}

export function listWorkspacesResponse_StatusFromJSON(object: any): ListWorkspacesResponse_Status {
  switch (object) {
    case 0:
    case "Invalid":
      return ListWorkspacesResponse_Status.Invalid;
    case 1:
    case "Success":
      return ListWorkspacesResponse_Status.Success;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListWorkspacesResponse_Status.UNRECOGNIZED;
  }
}

export function listWorkspacesResponse_StatusToJSON(object: ListWorkspacesResponse_Status): string {
  switch (object) {
    case ListWorkspacesResponse_Status.Invalid:
      return "Invalid";
    case ListWorkspacesResponse_Status.Success:
      return "Success";
    case ListWorkspacesResponse_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCreateWorkspaceRequest(): CreateWorkspaceRequest {
  return { workspaceName: "" };
}

export const CreateWorkspaceRequest = {
  encode(message: CreateWorkspaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workspaceName !== "") {
      writer.uint32(10).string(message.workspaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateWorkspaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWorkspaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.workspaceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateWorkspaceRequest {
    return { workspaceName: isSet(object.workspaceName) ? globalThis.String(object.workspaceName) : "" };
  },

  toJSON(message: CreateWorkspaceRequest): unknown {
    const obj: any = {};
    if (message.workspaceName !== "") {
      obj.workspaceName = message.workspaceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateWorkspaceRequest>, I>>(base?: I): CreateWorkspaceRequest {
    return CreateWorkspaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateWorkspaceRequest>, I>>(object: I): CreateWorkspaceRequest {
    const message = createBaseCreateWorkspaceRequest();
    message.workspaceName = object.workspaceName ?? "";
    return message;
  },
};

function createBaseCreateWorkspaceResponse(): CreateWorkspaceResponse {
  return { status: 0 };
}

export const CreateWorkspaceResponse = {
  encode(message: CreateWorkspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateWorkspaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWorkspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateWorkspaceResponse {
    return { status: isSet(object.status) ? createWorkspaceResponse_StatusFromJSON(object.status) : 0 };
  },

  toJSON(message: CreateWorkspaceResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = createWorkspaceResponse_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateWorkspaceResponse>, I>>(base?: I): CreateWorkspaceResponse {
    return CreateWorkspaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateWorkspaceResponse>, I>>(object: I): CreateWorkspaceResponse {
    const message = createBaseCreateWorkspaceResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseDropWorkspaceRequest(): DropWorkspaceRequest {
  return { workspaceName: "" };
}

export const DropWorkspaceRequest = {
  encode(message: DropWorkspaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workspaceName !== "") {
      writer.uint32(10).string(message.workspaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropWorkspaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropWorkspaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.workspaceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DropWorkspaceRequest {
    return { workspaceName: isSet(object.workspaceName) ? globalThis.String(object.workspaceName) : "" };
  },

  toJSON(message: DropWorkspaceRequest): unknown {
    const obj: any = {};
    if (message.workspaceName !== "") {
      obj.workspaceName = message.workspaceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropWorkspaceRequest>, I>>(base?: I): DropWorkspaceRequest {
    return DropWorkspaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropWorkspaceRequest>, I>>(object: I): DropWorkspaceRequest {
    const message = createBaseDropWorkspaceRequest();
    message.workspaceName = object.workspaceName ?? "";
    return message;
  },
};

function createBaseDropWorkspaceResponse(): DropWorkspaceResponse {
  return { status: 0 };
}

export const DropWorkspaceResponse = {
  encode(message: DropWorkspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropWorkspaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropWorkspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DropWorkspaceResponse {
    return { status: isSet(object.status) ? dropWorkspaceResponse_StatusFromJSON(object.status) : 0 };
  },

  toJSON(message: DropWorkspaceResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = dropWorkspaceResponse_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropWorkspaceResponse>, I>>(base?: I): DropWorkspaceResponse {
    return DropWorkspaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropWorkspaceResponse>, I>>(object: I): DropWorkspaceResponse {
    const message = createBaseDropWorkspaceResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseListWorkspacesRequest(): ListWorkspacesRequest {
  return {};
}

export const ListWorkspacesRequest = {
  encode(_: ListWorkspacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkspacesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWorkspacesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListWorkspacesRequest {
    return {};
  },

  toJSON(_: ListWorkspacesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListWorkspacesRequest>, I>>(base?: I): ListWorkspacesRequest {
    return ListWorkspacesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListWorkspacesRequest>, I>>(_: I): ListWorkspacesRequest {
    const message = createBaseListWorkspacesRequest();
    return message;
  },
};

function createBaseWorkspace(): Workspace {
  return { workspaceId: 0, workspaceName: "" };
}

export const Workspace = {
  encode(message: Workspace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workspaceId !== 0) {
      writer.uint32(8).uint32(message.workspaceId);
    }
    if (message.workspaceName !== "") {
      writer.uint32(18).string(message.workspaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Workspace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.workspaceId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.workspaceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Workspace {
    return {
      workspaceId: isSet(object.workspaceId) ? globalThis.Number(object.workspaceId) : 0,
      workspaceName: isSet(object.workspaceName) ? globalThis.String(object.workspaceName) : "",
    };
  },

  toJSON(message: Workspace): unknown {
    const obj: any = {};
    if (message.workspaceId !== 0) {
      obj.workspaceId = Math.round(message.workspaceId);
    }
    if (message.workspaceName !== "") {
      obj.workspaceName = message.workspaceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Workspace>, I>>(base?: I): Workspace {
    return Workspace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Workspace>, I>>(object: I): Workspace {
    const message = createBaseWorkspace();
    message.workspaceId = object.workspaceId ?? 0;
    message.workspaceName = object.workspaceName ?? "";
    return message;
  },
};

function createBaseListWorkspacesResponse(): ListWorkspacesResponse {
  return { status: 0, workspaces: [] };
}

export const ListWorkspacesResponse = {
  encode(message: ListWorkspacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.workspaces) {
      Workspace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkspacesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWorkspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.workspaces.push(Workspace.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListWorkspacesResponse {
    return {
      status: isSet(object.status) ? listWorkspacesResponse_StatusFromJSON(object.status) : 0,
      workspaces: globalThis.Array.isArray(object?.workspaces)
        ? object.workspaces.map((e: any) => Workspace.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListWorkspacesResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = listWorkspacesResponse_StatusToJSON(message.status);
    }
    if (message.workspaces?.length) {
      obj.workspaces = message.workspaces.map((e) => Workspace.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListWorkspacesResponse>, I>>(base?: I): ListWorkspacesResponse {
    return ListWorkspacesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListWorkspacesResponse>, I>>(object: I): ListWorkspacesResponse {
    const message = createBaseListWorkspacesResponse();
    message.status = object.status ?? 0;
    message.workspaces = object.workspaces?.map((e) => Workspace.fromPartial(e)) || [];
    return message;
  },
};

export type WorkspacesServiceService = typeof WorkspacesServiceService;
export const WorkspacesServiceService = {
  createWorkspace: {
    path: "/cognica.rpc.WorkspacesService/create_workspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateWorkspaceRequest) => Buffer.from(CreateWorkspaceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateWorkspaceRequest.decode(value),
    responseSerialize: (value: CreateWorkspaceResponse) => Buffer.from(CreateWorkspaceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateWorkspaceResponse.decode(value),
  },
  dropWorkspace: {
    path: "/cognica.rpc.WorkspacesService/drop_workspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DropWorkspaceRequest) => Buffer.from(DropWorkspaceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DropWorkspaceRequest.decode(value),
    responseSerialize: (value: DropWorkspaceResponse) => Buffer.from(DropWorkspaceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DropWorkspaceResponse.decode(value),
  },
  listWorkspaces: {
    path: "/cognica.rpc.WorkspacesService/list_workspaces",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListWorkspacesRequest) => Buffer.from(ListWorkspacesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListWorkspacesRequest.decode(value),
    responseSerialize: (value: ListWorkspacesResponse) => Buffer.from(ListWorkspacesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListWorkspacesResponse.decode(value),
  },
} as const;

export interface WorkspacesServiceServer extends UntypedServiceImplementation {
  createWorkspace: handleUnaryCall<CreateWorkspaceRequest, CreateWorkspaceResponse>;
  dropWorkspace: handleUnaryCall<DropWorkspaceRequest, DropWorkspaceResponse>;
  listWorkspaces: handleUnaryCall<ListWorkspacesRequest, ListWorkspacesResponse>;
}

export interface WorkspacesServiceClient extends Client {
  createWorkspace(
    request: CreateWorkspaceRequest,
    callback: (error: ServiceError | null, response: CreateWorkspaceResponse) => void,
  ): ClientUnaryCall;
  createWorkspace(
    request: CreateWorkspaceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateWorkspaceResponse) => void,
  ): ClientUnaryCall;
  createWorkspace(
    request: CreateWorkspaceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateWorkspaceResponse) => void,
  ): ClientUnaryCall;
  dropWorkspace(
    request: DropWorkspaceRequest,
    callback: (error: ServiceError | null, response: DropWorkspaceResponse) => void,
  ): ClientUnaryCall;
  dropWorkspace(
    request: DropWorkspaceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DropWorkspaceResponse) => void,
  ): ClientUnaryCall;
  dropWorkspace(
    request: DropWorkspaceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DropWorkspaceResponse) => void,
  ): ClientUnaryCall;
  listWorkspaces(
    request: ListWorkspacesRequest,
    callback: (error: ServiceError | null, response: ListWorkspacesResponse) => void,
  ): ClientUnaryCall;
  listWorkspaces(
    request: ListWorkspacesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListWorkspacesResponse) => void,
  ): ClientUnaryCall;
  listWorkspaces(
    request: ListWorkspacesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListWorkspacesResponse) => void,
  ): ClientUnaryCall;
}

export const WorkspacesServiceClient = makeGenericClientConstructor(
  WorkspacesServiceService,
  "cognica.rpc.WorkspacesService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): WorkspacesServiceClient;
  service: typeof WorkspacesServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
