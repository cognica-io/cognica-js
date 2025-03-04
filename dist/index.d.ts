import * as grpc from '@grpc/grpc-js';
import { Client, ServiceError as ServiceError$1, ClientUnaryCall, Metadata, CallOptions, ChannelCredentials, ClientOptions } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { Table } from '@apache-arrow/esnext-esm';

interface Value {
    null?: boolean | undefined;
    bool?: boolean | undefined;
    int64?: number | undefined;
    uint64?: number | undefined;
    double?: number | undefined;
    string?: string | undefined;
    array?: Array | undefined;
    object?: ObjectType$1 | undefined;
}
declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    create<I extends Exact$4<DeepPartial$4<Value>, I>>(base?: I): Value;
    fromPartial<I extends Exact$4<DeepPartial$4<Value>, I>>(object: I): Value;
};
interface Array {
    value: Value[];
}
declare const Array: {
    encode(message: Array, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Array;
    fromJSON(object: any): Array;
    toJSON(message: Array): unknown;
    create<I extends Exact$4<DeepPartial$4<Array>, I>>(base?: I): Array;
    fromPartial<I extends Exact$4<DeepPartial$4<Array>, I>>(object: I): Array;
};
interface ObjectType$1 {
    value: {
        [key: string]: Value;
    };
}
declare const ObjectType$1: {
    encode(message: ObjectType$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObjectType$1;
    fromJSON(object: any): ObjectType$1;
    toJSON(message: ObjectType$1): unknown;
    create<I extends Exact$4<DeepPartial$4<ObjectType$1>, I>>(base?: I): ObjectType$1;
    fromPartial<I extends Exact$4<DeepPartial$4<ObjectType$1>, I>>(object: I): ObjectType$1;
};
interface Document$1 {
    object?: ObjectType$1 | undefined;
    json?: string | undefined;
}
declare const Document$1: {
    encode(message: Document$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Document$1;
    fromJSON(object: any): Document$1;
    toJSON(message: Document$1): unknown;
    create<I extends Exact$4<DeepPartial$4<Document$1>, I>>(base?: I): Document$1;
    fromPartial<I extends Exact$4<DeepPartial$4<Document$1>, I>>(object: I): Document$1;
};
type Builtin$4 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$4<T> = T extends Builtin$4 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$4<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$4<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$4<T[K]>;
} : Partial<T>;
type KeysOfUnion$4<T> = T extends T ? keyof T : never;
type Exact$4<P, I extends P> = P extends Builtin$4 ? P : P & {
    [K in keyof P]: Exact$4<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$4<P>>]: never;
};

declare class Channel {
    private _address;
    private _credential;
    private _useSSL;
    private static readonly _OPTIONS;
    constructor(host: string, port: number, useSSL?: boolean);
    get address(): string;
    get credential(): grpc.ChannelCredentials;
    get options(): grpc.ChannelOptions;
}

type ServiceError = grpc.ServiceError;
type Document = {
    [x: string]: any | Document;
};
declare class GrpcClient<ClientType> {
    protected _channel: Channel;
    protected _client: ClientType;
    protected _timeout: number | undefined;
    constructor(channel: Channel, client: ClientType, timeout?: number | undefined);
    createPromise<Return, Request, Response>(request: Request, methodName: keyof ClientType, response_mapper?: (response: Response) => any, waitForReady?: boolean): Promise<Return>;
    static toDocument(doc: Document): Document$1;
    get channel(): Channel;
    get timeout(): number | undefined;
    close(): void;
}

declare enum IndexType$1 {
    kPrimaryKey = 0,
    kSecondaryKey = 1,
    kClusteredSecondaryKey = 2,
    kFullTextSearchIndex = 3,
    UNRECOGNIZED = -1
}
declare function indexTypeFromJSON$1(object: any): IndexType$1;
declare enum IndexStatus {
    /** kEnabled - Index is in use. */
    kEnabled = 0,
    /** kDisabled - Index is disabled. */
    kDisabled = 1,
    /** kReadyToUse - Index is ready to use and will be switched to */
    kReadyToUse = 2,
    /** kBuildInProgress - Index is being built. */
    kBuildInProgress = 3,
    /** kBuildFinished - Index was built successfully and will be */
    kBuildFinished = 4,
    /** kDropInProgress - Index is being dropped. */
    kDropInProgress = 5,
    /** kDropFinished - Index was dropped successfully and will be */
    kDropFinished = 6,
    UNRECOGNIZED = -1
}
declare function indexStatusFromJSON$1(object: any): IndexStatus;
interface IndexDescriptor$1 {
    indexId: number;
    indexName: string;
    fields: string[];
    unique: boolean;
    indexType: IndexType$1;
    status: IndexStatus;
    options: Document$1 | undefined;
}
declare const IndexDescriptor$1: {
    encode(message: IndexDescriptor$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IndexDescriptor$1;
    fromJSON(object: any): IndexDescriptor$1;
    toJSON(message: IndexDescriptor$1): unknown;
    create<I extends Exact$3<DeepPartial$3<IndexDescriptor$1>, I>>(base?: I): IndexDescriptor$1;
    fromPartial<I extends Exact$3<DeepPartial$3<IndexDescriptor$1>, I>>(object: I): IndexDescriptor$1;
};
interface FTSFieldStats {
    fieldName: string;
    totalDocCount: number;
    totalDocSize: number;
    docCount: number;
    docSize: number;
    sumTermFreq: number;
    sumDocFreq: number;
}
declare const FTSFieldStats: {
    encode(message: FTSFieldStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FTSFieldStats;
    fromJSON(object: any): FTSFieldStats;
    toJSON(message: FTSFieldStats): unknown;
    create<I extends Exact$3<DeepPartial$3<FTSFieldStats>, I>>(base?: I): FTSFieldStats;
    fromPartial<I extends Exact$3<DeepPartial$3<FTSFieldStats>, I>>(object: I): FTSFieldStats;
};
interface FTSIndexStats {
    docCount: number;
    docSize: number;
    fieldStats: FTSFieldStats[];
}
declare const FTSIndexStats: {
    encode(message: FTSIndexStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FTSIndexStats;
    fromJSON(object: any): FTSIndexStats;
    toJSON(message: FTSIndexStats): unknown;
    create<I extends Exact$3<DeepPartial$3<FTSIndexStats>, I>>(base?: I): FTSIndexStats;
    fromPartial<I extends Exact$3<DeepPartial$3<FTSIndexStats>, I>>(object: I): FTSIndexStats;
};
interface IndexStats$1 {
    indexId: number;
    indexName: string;
    approximatedSize: number;
    numDocs: number;
    accessed: number;
    added: number;
    updated: number;
    deleted: number;
    merged: number;
    accessedAt: number;
    addedAt: number;
    updatedAt: number;
    deletedAt: number;
    mergedAt: number;
    ftsStats: FTSIndexStats | undefined;
}
declare const IndexStats$1: {
    encode(message: IndexStats$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IndexStats$1;
    fromJSON(object: any): IndexStats$1;
    toJSON(message: IndexStats$1): unknown;
    create<I extends Exact$3<DeepPartial$3<IndexStats$1>, I>>(base?: I): IndexStats$1;
    fromPartial<I extends Exact$3<DeepPartial$3<IndexStats$1>, I>>(object: I): IndexStats$1;
};
interface CollectionInfo$1 {
    collectionName: string;
    indexDescriptors: IndexDescriptor$1[];
    indexStats: IndexStats$1[];
}
declare const CollectionInfo$1: {
    encode(message: CollectionInfo$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionInfo$1;
    fromJSON(object: any): CollectionInfo$1;
    toJSON(message: CollectionInfo$1): unknown;
    create<I extends Exact$3<DeepPartial$3<CollectionInfo$1>, I>>(base?: I): CollectionInfo$1;
    fromPartial<I extends Exact$3<DeepPartial$3<CollectionInfo$1>, I>>(object: I): CollectionInfo$1;
};
interface ProfileInfo$2 {
    matched: number;
    scanned: number;
    filtered: number;
    queryDurationUs: number;
    serializationDurationUs: number;
}
declare const ProfileInfo$2: {
    encode(message: ProfileInfo$2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProfileInfo$2;
    fromJSON(object: any): ProfileInfo$2;
    toJSON(message: ProfileInfo$2): unknown;
    create<I extends Exact$3<DeepPartial$3<ProfileInfo$2>, I>>(base?: I): ProfileInfo$2;
    fromPartial<I extends Exact$3<DeepPartial$3<ProfileInfo$2>, I>>(object: I): ProfileInfo$2;
};
interface CreateCollectionRequest {
    collection: CollectionInfo$1 | undefined;
}
declare const CreateCollectionRequest: {
    encode(message: CreateCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionRequest;
    fromJSON(object: any): CreateCollectionRequest;
    toJSON(message: CreateCollectionRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<CreateCollectionRequest>, I>>(base?: I): CreateCollectionRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<CreateCollectionRequest>, I>>(object: I): CreateCollectionRequest;
};
interface CreateCollectionResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const CreateCollectionResponse: {
    encode(message: CreateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionResponse;
    fromJSON(object: any): CreateCollectionResponse;
    toJSON(message: CreateCollectionResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<CreateCollectionResponse>, I>>(base?: I): CreateCollectionResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<CreateCollectionResponse>, I>>(object: I): CreateCollectionResponse;
};
interface DropCollectionRequest {
    collectionName: string;
}
declare const DropCollectionRequest: {
    encode(message: DropCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionRequest;
    fromJSON(object: any): DropCollectionRequest;
    toJSON(message: DropCollectionRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<DropCollectionRequest>, I>>(base?: I): DropCollectionRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<DropCollectionRequest>, I>>(object: I): DropCollectionRequest;
};
interface DropCollectionResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const DropCollectionResponse: {
    encode(message: DropCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionResponse;
    fromJSON(object: any): DropCollectionResponse;
    toJSON(message: DropCollectionResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<DropCollectionResponse>, I>>(base?: I): DropCollectionResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<DropCollectionResponse>, I>>(object: I): DropCollectionResponse;
};
interface RenameCollectionRequest {
    oldCollectionName: string;
    newCollectionName: string;
}
declare const RenameCollectionRequest: {
    encode(message: RenameCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameCollectionRequest;
    fromJSON(object: any): RenameCollectionRequest;
    toJSON(message: RenameCollectionRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<RenameCollectionRequest>, I>>(base?: I): RenameCollectionRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<RenameCollectionRequest>, I>>(object: I): RenameCollectionRequest;
};
interface RenameCollectionResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const RenameCollectionResponse: {
    encode(message: RenameCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameCollectionResponse;
    fromJSON(object: any): RenameCollectionResponse;
    toJSON(message: RenameCollectionResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<RenameCollectionResponse>, I>>(base?: I): RenameCollectionResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<RenameCollectionResponse>, I>>(object: I): RenameCollectionResponse;
};
interface GetCollectionRequest {
    collectionName: string;
}
declare const GetCollectionRequest: {
    encode(message: GetCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionRequest;
    fromJSON(object: any): GetCollectionRequest;
    toJSON(message: GetCollectionRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<GetCollectionRequest>, I>>(base?: I): GetCollectionRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<GetCollectionRequest>, I>>(object: I): GetCollectionRequest;
};
interface GetCollectionResponse {
    status: number;
    message: string;
    collection: CollectionInfo$1 | undefined;
    profile: ProfileInfo$2 | undefined;
}
declare const GetCollectionResponse: {
    encode(message: GetCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionResponse;
    fromJSON(object: any): GetCollectionResponse;
    toJSON(message: GetCollectionResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<GetCollectionResponse>, I>>(base?: I): GetCollectionResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<GetCollectionResponse>, I>>(object: I): GetCollectionResponse;
};
interface GetCollectionsRequest {
    collectionNames: string[];
}
declare const GetCollectionsRequest: {
    encode(message: GetCollectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsRequest;
    fromJSON(object: any): GetCollectionsRequest;
    toJSON(message: GetCollectionsRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<GetCollectionsRequest>, I>>(base?: I): GetCollectionsRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<GetCollectionsRequest>, I>>(object: I): GetCollectionsRequest;
};
interface GetCollectionsResponse {
    status: number;
    message: string;
    collections: CollectionInfo$1[];
    profile: ProfileInfo$2 | undefined;
}
declare const GetCollectionsResponse: {
    encode(message: GetCollectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsResponse;
    fromJSON(object: any): GetCollectionsResponse;
    toJSON(message: GetCollectionsResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<GetCollectionsResponse>, I>>(base?: I): GetCollectionsResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<GetCollectionsResponse>, I>>(object: I): GetCollectionsResponse;
};
interface CreateIndexRequest {
    collectionName: string;
    indexDesc: IndexDescriptor$1 | undefined;
}
declare const CreateIndexRequest: {
    encode(message: CreateIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateIndexRequest;
    fromJSON(object: any): CreateIndexRequest;
    toJSON(message: CreateIndexRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<CreateIndexRequest>, I>>(base?: I): CreateIndexRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<CreateIndexRequest>, I>>(object: I): CreateIndexRequest;
};
interface CreateIndexResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const CreateIndexResponse: {
    encode(message: CreateIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateIndexResponse;
    fromJSON(object: any): CreateIndexResponse;
    toJSON(message: CreateIndexResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<CreateIndexResponse>, I>>(base?: I): CreateIndexResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<CreateIndexResponse>, I>>(object: I): CreateIndexResponse;
};
interface DropIndexRequest {
    collectionName: string;
    indexName: string;
}
declare const DropIndexRequest: {
    encode(message: DropIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexRequest;
    fromJSON(object: any): DropIndexRequest;
    toJSON(message: DropIndexRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<DropIndexRequest>, I>>(base?: I): DropIndexRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<DropIndexRequest>, I>>(object: I): DropIndexRequest;
};
interface DropIndexResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const DropIndexResponse: {
    encode(message: DropIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexResponse;
    fromJSON(object: any): DropIndexResponse;
    toJSON(message: DropIndexResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<DropIndexResponse>, I>>(base?: I): DropIndexResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<DropIndexResponse>, I>>(object: I): DropIndexResponse;
};
interface RenameIndexRequest {
    collectionName: string;
    oldIndexName: string;
    newIndexName: string;
}
declare const RenameIndexRequest: {
    encode(message: RenameIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameIndexRequest;
    fromJSON(object: any): RenameIndexRequest;
    toJSON(message: RenameIndexRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<RenameIndexRequest>, I>>(base?: I): RenameIndexRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<RenameIndexRequest>, I>>(object: I): RenameIndexRequest;
};
interface RenameIndexResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const RenameIndexResponse: {
    encode(message: RenameIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameIndexResponse;
    fromJSON(object: any): RenameIndexResponse;
    toJSON(message: RenameIndexResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<RenameIndexResponse>, I>>(base?: I): RenameIndexResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<RenameIndexResponse>, I>>(object: I): RenameIndexResponse;
};
interface GetIndexRequest {
    collectionName: string;
    indexName: string;
}
declare const GetIndexRequest: {
    encode(message: GetIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIndexRequest;
    fromJSON(object: any): GetIndexRequest;
    toJSON(message: GetIndexRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<GetIndexRequest>, I>>(base?: I): GetIndexRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<GetIndexRequest>, I>>(object: I): GetIndexRequest;
};
interface GetIndexResponse {
    status: number;
    message: string;
    collectionName: string;
    indexDesc: IndexDescriptor$1 | undefined;
    indexStats: IndexStats$1 | undefined;
    profile: ProfileInfo$2 | undefined;
}
declare const GetIndexResponse: {
    encode(message: GetIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIndexResponse;
    fromJSON(object: any): GetIndexResponse;
    toJSON(message: GetIndexResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<GetIndexResponse>, I>>(base?: I): GetIndexResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<GetIndexResponse>, I>>(object: I): GetIndexResponse;
};
interface Query$1 {
    collectionName: string;
    query: Document$1 | undefined;
}
declare const Query$1: {
    encode(message: Query$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Query$1;
    fromJSON(object: any): Query$1;
    toJSON(message: Query$1): unknown;
    create<I extends Exact$3<DeepPartial$3<Query$1>, I>>(base?: I): Query$1;
    fromPartial<I extends Exact$3<DeepPartial$3<Query$1>, I>>(object: I): Query$1;
};
interface FindRequest {
    query: Query$1 | undefined;
    limit: number;
    indexColumns: string[];
    columns: string[];
    dtypes: {
        [key: string]: string;
    };
}
declare const FindRequest: {
    encode(message: FindRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FindRequest;
    fromJSON(object: any): FindRequest;
    toJSON(message: FindRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<FindRequest>, I>>(base?: I): FindRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<FindRequest>, I>>(object: I): FindRequest;
};
interface FindResponse {
    numColumns: number;
    numRows: number;
    buffer: Buffer;
    profile: ProfileInfo$2 | undefined;
}
declare const FindResponse: {
    encode(message: FindResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FindResponse;
    fromJSON(object: any): FindResponse;
    toJSON(message: FindResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<FindResponse>, I>>(base?: I): FindResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<FindResponse>, I>>(object: I): FindResponse;
};
interface FindBatchRequest {
    requests: FindRequest[];
}
declare const FindBatchRequest: {
    encode(message: FindBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FindBatchRequest;
    fromJSON(object: any): FindBatchRequest;
    toJSON(message: FindBatchRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<FindBatchRequest>, I>>(base?: I): FindBatchRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<FindBatchRequest>, I>>(object: I): FindBatchRequest;
};
interface FindBatchResponse {
    responses: FindResponse[];
}
declare const FindBatchResponse: {
    encode(message: FindBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FindBatchResponse;
    fromJSON(object: any): FindBatchResponse;
    toJSON(message: FindBatchResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<FindBatchResponse>, I>>(base?: I): FindBatchResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<FindBatchResponse>, I>>(object: I): FindBatchResponse;
};
interface CountRequest {
    query: Query$1 | undefined;
}
declare const CountRequest: {
    encode(message: CountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountRequest;
    fromJSON(object: any): CountRequest;
    toJSON(message: CountRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<CountRequest>, I>>(base?: I): CountRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<CountRequest>, I>>(object: I): CountRequest;
};
interface CountResponse {
    status: number;
    message: string;
    count: number;
    profile: ProfileInfo$2 | undefined;
}
declare const CountResponse: {
    encode(message: CountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountResponse;
    fromJSON(object: any): CountResponse;
    toJSON(message: CountResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<CountResponse>, I>>(base?: I): CountResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<CountResponse>, I>>(object: I): CountResponse;
};
interface ContainsRequest {
    query: Query$1 | undefined;
}
declare const ContainsRequest: {
    encode(message: ContainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainsRequest;
    fromJSON(object: any): ContainsRequest;
    toJSON(message: ContainsRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<ContainsRequest>, I>>(base?: I): ContainsRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<ContainsRequest>, I>>(object: I): ContainsRequest;
};
interface ContainsResponse {
    status: number;
    message: string;
    found: boolean;
    profile: ProfileInfo$2 | undefined;
}
declare const ContainsResponse: {
    encode(message: ContainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainsResponse;
    fromJSON(object: any): ContainsResponse;
    toJSON(message: ContainsResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<ContainsResponse>, I>>(base?: I): ContainsResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<ContainsResponse>, I>>(object: I): ContainsResponse;
};
interface InsertRequest {
    requests: Query$1[];
}
declare const InsertRequest: {
    encode(message: InsertRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertRequest;
    fromJSON(object: any): InsertRequest;
    toJSON(message: InsertRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<InsertRequest>, I>>(base?: I): InsertRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<InsertRequest>, I>>(object: I): InsertRequest;
};
interface InsertResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const InsertResponse: {
    encode(message: InsertResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsertResponse;
    fromJSON(object: any): InsertResponse;
    toJSON(message: InsertResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<InsertResponse>, I>>(base?: I): InsertResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<InsertResponse>, I>>(object: I): InsertResponse;
};
interface UpdateRequest {
    collectionName: string;
    filter: Document$1 | undefined;
    updates: Document$1 | undefined;
}
declare const UpdateRequest: {
    encode(message: UpdateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRequest;
    fromJSON(object: any): UpdateRequest;
    toJSON(message: UpdateRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<UpdateRequest>, I>>(base?: I): UpdateRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<UpdateRequest>, I>>(object: I): UpdateRequest;
};
interface UpdateResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const UpdateResponse: {
    encode(message: UpdateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResponse;
    fromJSON(object: any): UpdateResponse;
    toJSON(message: UpdateResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<UpdateResponse>, I>>(base?: I): UpdateResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<UpdateResponse>, I>>(object: I): UpdateResponse;
};
interface RemoveRequest$1 {
    requests: Query$1[];
}
declare const RemoveRequest$1: {
    encode(message: RemoveRequest$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRequest$1;
    fromJSON(object: any): RemoveRequest$1;
    toJSON(message: RemoveRequest$1): unknown;
    create<I extends Exact$3<DeepPartial$3<RemoveRequest$1>, I>>(base?: I): RemoveRequest$1;
    fromPartial<I extends Exact$3<DeepPartial$3<RemoveRequest$1>, I>>(object: I): RemoveRequest$1;
};
interface RemoveResponse$1 {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const RemoveResponse$1: {
    encode(message: RemoveResponse$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveResponse$1;
    fromJSON(object: any): RemoveResponse$1;
    toJSON(message: RemoveResponse$1): unknown;
    create<I extends Exact$3<DeepPartial$3<RemoveResponse$1>, I>>(base?: I): RemoveResponse$1;
    fromPartial<I extends Exact$3<DeepPartial$3<RemoveResponse$1>, I>>(object: I): RemoveResponse$1;
};
interface ExplainRequest {
    queries: Query$1[];
}
declare const ExplainRequest: {
    encode(message: ExplainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExplainRequest;
    fromJSON(object: any): ExplainRequest;
    toJSON(message: ExplainRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<ExplainRequest>, I>>(base?: I): ExplainRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<ExplainRequest>, I>>(object: I): ExplainRequest;
};
interface QueryPlan {
    status: number;
    message: string;
    collectionName: string;
    indexName: string;
    queryPlan: string;
}
declare const QueryPlan: {
    encode(message: QueryPlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlan;
    fromJSON(object: any): QueryPlan;
    toJSON(message: QueryPlan): unknown;
    create<I extends Exact$3<DeepPartial$3<QueryPlan>, I>>(base?: I): QueryPlan;
    fromPartial<I extends Exact$3<DeepPartial$3<QueryPlan>, I>>(object: I): QueryPlan;
};
interface ExplainResponse {
    status: number;
    queryPlans: QueryPlan[];
}
declare const ExplainResponse: {
    encode(message: ExplainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExplainResponse;
    fromJSON(object: any): ExplainResponse;
    toJSON(message: ExplainResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<ExplainResponse>, I>>(base?: I): ExplainResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<ExplainResponse>, I>>(object: I): ExplainResponse;
};
interface TruncateCollectionRequest {
    collectionName: string;
}
declare const TruncateCollectionRequest: {
    encode(message: TruncateCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TruncateCollectionRequest;
    fromJSON(object: any): TruncateCollectionRequest;
    toJSON(message: TruncateCollectionRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<TruncateCollectionRequest>, I>>(base?: I): TruncateCollectionRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<TruncateCollectionRequest>, I>>(object: I): TruncateCollectionRequest;
};
interface TruncateCollectionResponse {
    status: number;
    message: string;
    profile: ProfileInfo$2 | undefined;
}
declare const TruncateCollectionResponse: {
    encode(message: TruncateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TruncateCollectionResponse;
    fromJSON(object: any): TruncateCollectionResponse;
    toJSON(message: TruncateCollectionResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<TruncateCollectionResponse>, I>>(base?: I): TruncateCollectionResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<TruncateCollectionResponse>, I>>(object: I): TruncateCollectionResponse;
};
interface ListCollectionsRequest {
}
declare const ListCollectionsRequest: {
    encode(_: ListCollectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsRequest;
    fromJSON(_: any): ListCollectionsRequest;
    toJSON(_: ListCollectionsRequest): unknown;
    create<I extends Exact$3<DeepPartial$3<ListCollectionsRequest>, I>>(base?: I): ListCollectionsRequest;
    fromPartial<I extends Exact$3<DeepPartial$3<ListCollectionsRequest>, I>>(_: I): ListCollectionsRequest;
};
interface ListCollectionsResponse {
    status: number;
    message: string;
    collectionNames: string[];
    profile: ProfileInfo$2 | undefined;
}
declare const ListCollectionsResponse: {
    encode(message: ListCollectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsResponse;
    fromJSON(object: any): ListCollectionsResponse;
    toJSON(message: ListCollectionsResponse): unknown;
    create<I extends Exact$3<DeepPartial$3<ListCollectionsResponse>, I>>(base?: I): ListCollectionsResponse;
    fromPartial<I extends Exact$3<DeepPartial$3<ListCollectionsResponse>, I>>(object: I): ListCollectionsResponse;
};
type DocumentDBServiceService = typeof DocumentDBServiceService;
declare const DocumentDBServiceService: {
    readonly find: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/find";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FindRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => FindRequest;
        readonly responseSerialize: (value: FindResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => FindResponse;
    };
    readonly findBatch: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/find_batch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FindBatchRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => FindBatchRequest;
        readonly responseSerialize: (value: FindBatchResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => FindBatchResponse;
    };
    readonly count: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/count";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CountRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => CountRequest;
        readonly responseSerialize: (value: CountResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => CountResponse;
    };
    readonly contains: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/contains";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ContainsRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => ContainsRequest;
        readonly responseSerialize: (value: ContainsResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => ContainsResponse;
    };
    readonly insert: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/insert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InsertRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => InsertRequest;
        readonly responseSerialize: (value: InsertResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => InsertResponse;
    };
    readonly update: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => UpdateRequest;
        readonly responseSerialize: (value: UpdateResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => UpdateResponse;
    };
    readonly remove: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/remove";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveRequest$1) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => RemoveRequest$1;
        readonly responseSerialize: (value: RemoveResponse$1) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => RemoveResponse$1;
    };
    readonly explain: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/explain";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExplainRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => ExplainRequest;
        readonly responseSerialize: (value: ExplainResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => ExplainResponse;
    };
    readonly createCollection: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/create_collection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateCollectionRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => CreateCollectionRequest;
        readonly responseSerialize: (value: CreateCollectionResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => CreateCollectionResponse;
    };
    readonly dropCollection: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/drop_collection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DropCollectionRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => DropCollectionRequest;
        readonly responseSerialize: (value: DropCollectionResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => DropCollectionResponse;
    };
    readonly renameCollection: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/rename_collection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RenameCollectionRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => RenameCollectionRequest;
        readonly responseSerialize: (value: RenameCollectionResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => RenameCollectionResponse;
    };
    readonly getCollection: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/get_collection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetCollectionRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => GetCollectionRequest;
        readonly responseSerialize: (value: GetCollectionResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => GetCollectionResponse;
    };
    readonly getCollections: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/get_collections";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetCollectionsRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => GetCollectionsRequest;
        readonly responseSerialize: (value: GetCollectionsResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => GetCollectionsResponse;
    };
    readonly listCollections: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/list_collections";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCollectionsRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => ListCollectionsRequest;
        readonly responseSerialize: (value: ListCollectionsResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => ListCollectionsResponse;
    };
    readonly truncateCollection: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/truncate_collection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TruncateCollectionRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => TruncateCollectionRequest;
        readonly responseSerialize: (value: TruncateCollectionResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => TruncateCollectionResponse;
    };
    readonly createIndex: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/create_index";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateIndexRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => CreateIndexRequest;
        readonly responseSerialize: (value: CreateIndexResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => CreateIndexResponse;
    };
    readonly dropIndex: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/drop_index";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DropIndexRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => DropIndexRequest;
        readonly responseSerialize: (value: DropIndexResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => DropIndexResponse;
    };
    readonly renameIndex: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/rename_index";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RenameIndexRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => RenameIndexRequest;
        readonly responseSerialize: (value: RenameIndexResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => RenameIndexResponse;
    };
    readonly getIndex: {
        readonly path: "/aeca.rpc.db.document.DocumentDBService/get_index";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetIndexRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => GetIndexRequest;
        readonly responseSerialize: (value: GetIndexResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => GetIndexResponse;
    };
};
interface DocumentDBServiceClient extends Client {
    find(request: FindRequest, callback: (error: ServiceError$1 | null, response: FindResponse) => void): ClientUnaryCall;
    find(request: FindRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: FindResponse) => void): ClientUnaryCall;
    find(request: FindRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: FindResponse) => void): ClientUnaryCall;
    findBatch(request: FindBatchRequest, callback: (error: ServiceError$1 | null, response: FindBatchResponse) => void): ClientUnaryCall;
    findBatch(request: FindBatchRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: FindBatchResponse) => void): ClientUnaryCall;
    findBatch(request: FindBatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: FindBatchResponse) => void): ClientUnaryCall;
    count(request: CountRequest, callback: (error: ServiceError$1 | null, response: CountResponse) => void): ClientUnaryCall;
    count(request: CountRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: CountResponse) => void): ClientUnaryCall;
    count(request: CountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: CountResponse) => void): ClientUnaryCall;
    contains(request: ContainsRequest, callback: (error: ServiceError$1 | null, response: ContainsResponse) => void): ClientUnaryCall;
    contains(request: ContainsRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: ContainsResponse) => void): ClientUnaryCall;
    contains(request: ContainsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: ContainsResponse) => void): ClientUnaryCall;
    insert(request: InsertRequest, callback: (error: ServiceError$1 | null, response: InsertResponse) => void): ClientUnaryCall;
    insert(request: InsertRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: InsertResponse) => void): ClientUnaryCall;
    insert(request: InsertRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: InsertResponse) => void): ClientUnaryCall;
    update(request: UpdateRequest, callback: (error: ServiceError$1 | null, response: UpdateResponse) => void): ClientUnaryCall;
    update(request: UpdateRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: UpdateResponse) => void): ClientUnaryCall;
    update(request: UpdateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: UpdateResponse) => void): ClientUnaryCall;
    remove(request: RemoveRequest$1, callback: (error: ServiceError$1 | null, response: RemoveResponse$1) => void): ClientUnaryCall;
    remove(request: RemoveRequest$1, metadata: Metadata, callback: (error: ServiceError$1 | null, response: RemoveResponse$1) => void): ClientUnaryCall;
    remove(request: RemoveRequest$1, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: RemoveResponse$1) => void): ClientUnaryCall;
    explain(request: ExplainRequest, callback: (error: ServiceError$1 | null, response: ExplainResponse) => void): ClientUnaryCall;
    explain(request: ExplainRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: ExplainResponse) => void): ClientUnaryCall;
    explain(request: ExplainRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: ExplainResponse) => void): ClientUnaryCall;
    createCollection(request: CreateCollectionRequest, callback: (error: ServiceError$1 | null, response: CreateCollectionResponse) => void): ClientUnaryCall;
    createCollection(request: CreateCollectionRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: CreateCollectionResponse) => void): ClientUnaryCall;
    createCollection(request: CreateCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: CreateCollectionResponse) => void): ClientUnaryCall;
    dropCollection(request: DropCollectionRequest, callback: (error: ServiceError$1 | null, response: DropCollectionResponse) => void): ClientUnaryCall;
    dropCollection(request: DropCollectionRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: DropCollectionResponse) => void): ClientUnaryCall;
    dropCollection(request: DropCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: DropCollectionResponse) => void): ClientUnaryCall;
    renameCollection(request: RenameCollectionRequest, callback: (error: ServiceError$1 | null, response: RenameCollectionResponse) => void): ClientUnaryCall;
    renameCollection(request: RenameCollectionRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: RenameCollectionResponse) => void): ClientUnaryCall;
    renameCollection(request: RenameCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: RenameCollectionResponse) => void): ClientUnaryCall;
    getCollection(request: GetCollectionRequest, callback: (error: ServiceError$1 | null, response: GetCollectionResponse) => void): ClientUnaryCall;
    getCollection(request: GetCollectionRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: GetCollectionResponse) => void): ClientUnaryCall;
    getCollection(request: GetCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: GetCollectionResponse) => void): ClientUnaryCall;
    getCollections(request: GetCollectionsRequest, callback: (error: ServiceError$1 | null, response: GetCollectionsResponse) => void): ClientUnaryCall;
    getCollections(request: GetCollectionsRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: GetCollectionsResponse) => void): ClientUnaryCall;
    getCollections(request: GetCollectionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: GetCollectionsResponse) => void): ClientUnaryCall;
    listCollections(request: ListCollectionsRequest, callback: (error: ServiceError$1 | null, response: ListCollectionsResponse) => void): ClientUnaryCall;
    listCollections(request: ListCollectionsRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: ListCollectionsResponse) => void): ClientUnaryCall;
    listCollections(request: ListCollectionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: ListCollectionsResponse) => void): ClientUnaryCall;
    truncateCollection(request: TruncateCollectionRequest, callback: (error: ServiceError$1 | null, response: TruncateCollectionResponse) => void): ClientUnaryCall;
    truncateCollection(request: TruncateCollectionRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: TruncateCollectionResponse) => void): ClientUnaryCall;
    truncateCollection(request: TruncateCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: TruncateCollectionResponse) => void): ClientUnaryCall;
    createIndex(request: CreateIndexRequest, callback: (error: ServiceError$1 | null, response: CreateIndexResponse) => void): ClientUnaryCall;
    createIndex(request: CreateIndexRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: CreateIndexResponse) => void): ClientUnaryCall;
    createIndex(request: CreateIndexRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: CreateIndexResponse) => void): ClientUnaryCall;
    dropIndex(request: DropIndexRequest, callback: (error: ServiceError$1 | null, response: DropIndexResponse) => void): ClientUnaryCall;
    dropIndex(request: DropIndexRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: DropIndexResponse) => void): ClientUnaryCall;
    dropIndex(request: DropIndexRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: DropIndexResponse) => void): ClientUnaryCall;
    renameIndex(request: RenameIndexRequest, callback: (error: ServiceError$1 | null, response: RenameIndexResponse) => void): ClientUnaryCall;
    renameIndex(request: RenameIndexRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: RenameIndexResponse) => void): ClientUnaryCall;
    renameIndex(request: RenameIndexRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: RenameIndexResponse) => void): ClientUnaryCall;
    getIndex(request: GetIndexRequest, callback: (error: ServiceError$1 | null, response: GetIndexResponse) => void): ClientUnaryCall;
    getIndex(request: GetIndexRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: GetIndexResponse) => void): ClientUnaryCall;
    getIndex(request: GetIndexRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: GetIndexResponse) => void): ClientUnaryCall;
}
declare const DocumentDBServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DocumentDBServiceClient;
    service: typeof DocumentDBServiceService;
    serviceName: string;
};
type Builtin$3 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$3<T> = T extends Builtin$3 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$3<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$3<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$3<T[K]>;
} : Partial<T>;
type KeysOfUnion$3<T> = T extends T ? keyof T : never;
type Exact$3<P, I extends P> = P extends Builtin$3 ? P : P & {
    [K in keyof P]: Exact$3<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$3<P>>]: never;
};

interface IndexDescriptor {
    index_type: string;
    fields: string[];
    name?: string;
    indexId?: number;
    unique?: boolean;
    status?: string;
    options?: Document;
}
type Query = Document | Document[];
interface Request {
    collectionName: string;
    query: Query;
    limit?: number;
    indexColumns?: string[];
    columns?: string[];
    dtypes?: {
        [key: string]: string;
    };
}
declare const enum IndexType {
    kPrimaryKey = 0,
    kSecondaryKey = 1,
    kClusteredSecondaryKey = 2,
    kFullTextSearchIndex = 3,
    UNRECOGNIZED = -1
}
declare const indexTypeFromJSON: typeof indexTypeFromJSON$1;
type IndexStats = IndexStats$1;
declare const indexStatusFromJSON: typeof indexStatusFromJSON$1;
type CollectionInfo = {
    collectionName: string;
    indexDescriptors: IndexDescriptor[];
    indexStats: IndexStats[];
};
type ReturnType = "arrow" | "object";
interface FindOptions {
    limit?: number;
    indexColumns?: string[];
    columns?: string[];
    dtypes?: {
        [key: string]: string;
    };
    format?: ReturnType;
}
type ObjectType = any[];
type DataFormat = ObjectType | Table<any>;
interface DataFrame<T extends DataFormat> {
    data: T;
    meta?: Document;
}
declare class DocumentDB extends GrpcClient<DocumentDBServiceClient> {
    constructor(channel: Channel, timeout?: number | undefined);
    find<T extends DataFormat = ObjectType>(collectionName: string, query: Document, options?: FindOptions): Promise<DataFrame<T> | null>;
    find<T extends DataFormat = ObjectType>(request: Request): Promise<DataFrame<T> | null>;
    findRaw(request: Request): Promise<Buffer | null>;
    findBatch<T extends DataFormat = ObjectType>(requests: Request[], format?: ReturnType): Promise<(DataFrame<T> | null)[]>;
    insert(collectionName: string, docs: Document | Document[]): Promise<unknown>;
    update(collectionName: string, filter: Document, updates: Document): Promise<unknown>;
    remove(collectionName: string, docs: Document | Document[]): Promise<unknown>;
    createCollection(collectionName: string, indexDescriptors: IndexDescriptor[]): Promise<unknown>;
    getCollection(collectionName: string): Promise<CollectionInfo>;
    getCollections(collectionNames: string[]): Promise<CollectionInfo[]>;
    listCollections(): Promise<string[]>;
    renameCollection(oldCollectionName: string, newCollectionName: string): Promise<unknown>;
    truncateCollection(collectionName: string): Promise<unknown>;
    dropCollection(collectionName: string): Promise<unknown>;
    createIndex(collectionName: string, indexDescriptor: IndexDescriptor): Promise<unknown>;
    getIndex(collectionName: string, indexName: string): Promise<GetIndexResponse>;
    renameIndex(collectionName: string, oldIndexName: string, newIndexName: string): Promise<unknown>;
    dropIndex(collectionName: string, indexName: string): Promise<unknown>;
    empty(collectionName: string, query: Document, dtypes?: {
        [key: string]: string;
    } | undefined): Promise<boolean>;
    private static toFindRequest;
    private static toDataFrame;
    private static identity;
    private static toJson;
    private static parseMetadata;
    private static fromCollectionInfo;
    private static toIndexDescriptor;
    private static fromIndexDescriptor;
}

declare enum StatusType$1 {
    kOK = 0,
    kNotFound = 1,
    kInternal = 10,
    UNRECOGNIZED = -1
}
interface ProfileInfo$1 {
    durationUs: number;
}
declare const ProfileInfo$1: {
    encode(message: ProfileInfo$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProfileInfo$1;
    fromJSON(object: any): ProfileInfo$1;
    toJSON(message: ProfileInfo$1): unknown;
    create<I extends Exact$2<DeepPartial$2<ProfileInfo$1>, I>>(base?: I): ProfileInfo$1;
    fromPartial<I extends Exact$2<DeepPartial$2<ProfileInfo$1>, I>>(object: I): ProfileInfo$1;
};
interface Response {
    status: StatusType$1;
    message: string;
    profile: ProfileInfo$1 | undefined;
}
declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends Exact$2<DeepPartial$2<Response>, I>>(base?: I): Response;
    fromPartial<I extends Exact$2<DeepPartial$2<Response>, I>>(object: I): Response;
};
interface PutRequest$1 {
    keyspaceName: string;
    key: Buffer;
    value: Buffer;
    ttl: number;
    createIfMissing: boolean;
}
declare const PutRequest$1: {
    encode(message: PutRequest$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PutRequest$1;
    fromJSON(object: any): PutRequest$1;
    toJSON(message: PutRequest$1): unknown;
    create<I extends Exact$2<DeepPartial$2<PutRequest$1>, I>>(base?: I): PutRequest$1;
    fromPartial<I extends Exact$2<DeepPartial$2<PutRequest$1>, I>>(object: I): PutRequest$1;
};
interface PutResponse {
    response: Response | undefined;
}
declare const PutResponse: {
    encode(message: PutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PutResponse;
    fromJSON(object: any): PutResponse;
    toJSON(message: PutResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<PutResponse>, I>>(base?: I): PutResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<PutResponse>, I>>(object: I): PutResponse;
};
interface RemoveRequest {
    keyspaceName: string;
    key: Buffer;
}
declare const RemoveRequest: {
    encode(message: RemoveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRequest;
    fromJSON(object: any): RemoveRequest;
    toJSON(message: RemoveRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<RemoveRequest>, I>>(base?: I): RemoveRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<RemoveRequest>, I>>(object: I): RemoveRequest;
};
interface RemoveResponse {
    response: Response | undefined;
}
declare const RemoveResponse: {
    encode(message: RemoveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveResponse;
    fromJSON(object: any): RemoveResponse;
    toJSON(message: RemoveResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<RemoveResponse>, I>>(base?: I): RemoveResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<RemoveResponse>, I>>(object: I): RemoveResponse;
};
interface GetRequest {
    keyspaceName: string;
    key: Buffer;
}
declare const GetRequest: {
    encode(message: GetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest;
    fromJSON(object: any): GetRequest;
    toJSON(message: GetRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<GetRequest>, I>>(base?: I): GetRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<GetRequest>, I>>(object: I): GetRequest;
};
interface GetResponse {
    response: Response | undefined;
    value: Buffer;
}
declare const GetResponse: {
    encode(message: GetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse;
    fromJSON(object: any): GetResponse;
    toJSON(message: GetResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<GetResponse>, I>>(base?: I): GetResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<GetResponse>, I>>(object: I): GetResponse;
};
interface MultiGetRequest {
    keyspaceName: string;
    keys: Buffer[];
}
declare const MultiGetRequest: {
    encode(message: MultiGetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiGetRequest;
    fromJSON(object: any): MultiGetRequest;
    toJSON(message: MultiGetRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<MultiGetRequest>, I>>(base?: I): MultiGetRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<MultiGetRequest>, I>>(object: I): MultiGetRequest;
};
interface MultiGetResponse {
    responses: Response[];
    values: Buffer[];
}
declare const MultiGetResponse: {
    encode(message: MultiGetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiGetResponse;
    fromJSON(object: any): MultiGetResponse;
    toJSON(message: MultiGetResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<MultiGetResponse>, I>>(base?: I): MultiGetResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<MultiGetResponse>, I>>(object: I): MultiGetResponse;
};
interface BatchedPutRequest$1 {
    keyspaceName: string;
    keys: Buffer[];
    values: Buffer[];
    ttls: number[];
    createIfMissing: boolean;
}
declare const BatchedPutRequest$1: {
    encode(message: BatchedPutRequest$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedPutRequest$1;
    fromJSON(object: any): BatchedPutRequest$1;
    toJSON(message: BatchedPutRequest$1): unknown;
    create<I extends Exact$2<DeepPartial$2<BatchedPutRequest$1>, I>>(base?: I): BatchedPutRequest$1;
    fromPartial<I extends Exact$2<DeepPartial$2<BatchedPutRequest$1>, I>>(object: I): BatchedPutRequest$1;
};
interface BatchedPutResponse {
    responses: Response[];
}
declare const BatchedPutResponse: {
    encode(message: BatchedPutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedPutResponse;
    fromJSON(object: any): BatchedPutResponse;
    toJSON(message: BatchedPutResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<BatchedPutResponse>, I>>(base?: I): BatchedPutResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<BatchedPutResponse>, I>>(object: I): BatchedPutResponse;
};
interface BatchedRemoveRequest {
    keyspaceName: string;
    keys: Buffer[];
}
declare const BatchedRemoveRequest: {
    encode(message: BatchedRemoveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedRemoveRequest;
    fromJSON(object: any): BatchedRemoveRequest;
    toJSON(message: BatchedRemoveRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<BatchedRemoveRequest>, I>>(base?: I): BatchedRemoveRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<BatchedRemoveRequest>, I>>(object: I): BatchedRemoveRequest;
};
interface BatchedRemoveResponse {
    responses: Response[];
}
declare const BatchedRemoveResponse: {
    encode(message: BatchedRemoveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedRemoveResponse;
    fromJSON(object: any): BatchedRemoveResponse;
    toJSON(message: BatchedRemoveResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<BatchedRemoveResponse>, I>>(base?: I): BatchedRemoveResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<BatchedRemoveResponse>, I>>(object: I): BatchedRemoveResponse;
};
interface BatchedGetRequest {
    keyspaceName: string;
    keys: Buffer[];
}
declare const BatchedGetRequest: {
    encode(message: BatchedGetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedGetRequest;
    fromJSON(object: any): BatchedGetRequest;
    toJSON(message: BatchedGetRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<BatchedGetRequest>, I>>(base?: I): BatchedGetRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<BatchedGetRequest>, I>>(object: I): BatchedGetRequest;
};
interface BatchedGetResponse {
    responses: Response[];
    values: Buffer[];
}
declare const BatchedGetResponse: {
    encode(message: BatchedGetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedGetResponse;
    fromJSON(object: any): BatchedGetResponse;
    toJSON(message: BatchedGetResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<BatchedGetResponse>, I>>(base?: I): BatchedGetResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<BatchedGetResponse>, I>>(object: I): BatchedGetResponse;
};
interface CreateKeyspaceRequest {
    keyspaceName: string;
}
declare const CreateKeyspaceRequest: {
    encode(message: CreateKeyspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyspaceRequest;
    fromJSON(object: any): CreateKeyspaceRequest;
    toJSON(message: CreateKeyspaceRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<CreateKeyspaceRequest>, I>>(base?: I): CreateKeyspaceRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<CreateKeyspaceRequest>, I>>(object: I): CreateKeyspaceRequest;
};
interface CreateKeyspaceResponse {
    response: Response | undefined;
}
declare const CreateKeyspaceResponse: {
    encode(message: CreateKeyspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyspaceResponse;
    fromJSON(object: any): CreateKeyspaceResponse;
    toJSON(message: CreateKeyspaceResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<CreateKeyspaceResponse>, I>>(base?: I): CreateKeyspaceResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<CreateKeyspaceResponse>, I>>(object: I): CreateKeyspaceResponse;
};
interface DropKeyspaceRequest {
    keyspaceName: string;
}
declare const DropKeyspaceRequest: {
    encode(message: DropKeyspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropKeyspaceRequest;
    fromJSON(object: any): DropKeyspaceRequest;
    toJSON(message: DropKeyspaceRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<DropKeyspaceRequest>, I>>(base?: I): DropKeyspaceRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<DropKeyspaceRequest>, I>>(object: I): DropKeyspaceRequest;
};
interface DropKeyspaceResponse {
    response: Response | undefined;
}
declare const DropKeyspaceResponse: {
    encode(message: DropKeyspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropKeyspaceResponse;
    fromJSON(object: any): DropKeyspaceResponse;
    toJSON(message: DropKeyspaceResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<DropKeyspaceResponse>, I>>(base?: I): DropKeyspaceResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<DropKeyspaceResponse>, I>>(object: I): DropKeyspaceResponse;
};
interface TruncateKeyspaceRequest {
    keyspaceName: string;
}
declare const TruncateKeyspaceRequest: {
    encode(message: TruncateKeyspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TruncateKeyspaceRequest;
    fromJSON(object: any): TruncateKeyspaceRequest;
    toJSON(message: TruncateKeyspaceRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<TruncateKeyspaceRequest>, I>>(base?: I): TruncateKeyspaceRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<TruncateKeyspaceRequest>, I>>(object: I): TruncateKeyspaceRequest;
};
interface TruncateKeyspaceResponse {
    response: Response | undefined;
}
declare const TruncateKeyspaceResponse: {
    encode(message: TruncateKeyspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TruncateKeyspaceResponse;
    fromJSON(object: any): TruncateKeyspaceResponse;
    toJSON(message: TruncateKeyspaceResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<TruncateKeyspaceResponse>, I>>(base?: I): TruncateKeyspaceResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<TruncateKeyspaceResponse>, I>>(object: I): TruncateKeyspaceResponse;
};
interface ListKeyspacesRequest {
}
declare const ListKeyspacesRequest: {
    encode(_: ListKeyspacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyspacesRequest;
    fromJSON(_: any): ListKeyspacesRequest;
    toJSON(_: ListKeyspacesRequest): unknown;
    create<I extends Exact$2<DeepPartial$2<ListKeyspacesRequest>, I>>(base?: I): ListKeyspacesRequest;
    fromPartial<I extends Exact$2<DeepPartial$2<ListKeyspacesRequest>, I>>(_: I): ListKeyspacesRequest;
};
interface ListKeyspacesResponse {
    response: Response | undefined;
    keyspaceNames: string[];
}
declare const ListKeyspacesResponse: {
    encode(message: ListKeyspacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyspacesResponse;
    fromJSON(object: any): ListKeyspacesResponse;
    toJSON(message: ListKeyspacesResponse): unknown;
    create<I extends Exact$2<DeepPartial$2<ListKeyspacesResponse>, I>>(base?: I): ListKeyspacesResponse;
    fromPartial<I extends Exact$2<DeepPartial$2<ListKeyspacesResponse>, I>>(object: I): ListKeyspacesResponse;
};
type KeyValueDBServiceService = typeof KeyValueDBServiceService;
declare const KeyValueDBServiceService: {
    readonly put: {
        readonly path: "/aeca.rpc.db.kv.KeyValueDBService/put";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PutRequest$1) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => PutRequest$1;
        readonly responseSerialize: (value: PutResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => PutResponse;
    };
    readonly remove: {
        readonly path: "/aeca.rpc.db.kv.KeyValueDBService/remove";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => RemoveRequest;
        readonly responseSerialize: (value: RemoveResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => RemoveResponse;
    };
    readonly get: {
        readonly path: "/aeca.rpc.db.kv.KeyValueDBService/get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => GetRequest;
        readonly responseSerialize: (value: GetResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => GetResponse;
    };
    readonly mget: {
        readonly path: "/aeca.rpc.db.kv.KeyValueDBService/mget";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MultiGetRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => MultiGetRequest;
        readonly responseSerialize: (value: MultiGetResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => MultiGetResponse;
    };
    readonly putBatch: {
        readonly path: "/aeca.rpc.db.kv.KeyValueDBService/put_batch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BatchedPutRequest$1) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => BatchedPutRequest$1;
        readonly responseSerialize: (value: BatchedPutResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => BatchedPutResponse;
    };
    readonly removeBatch: {
        readonly path: "/aeca.rpc.db.kv.KeyValueDBService/remove_batch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BatchedRemoveRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => BatchedRemoveRequest;
        readonly responseSerialize: (value: BatchedRemoveResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => BatchedRemoveResponse;
    };
    readonly getBatch: {
        readonly path: "/aeca.rpc.db.kv.KeyValueDBService/get_batch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BatchedGetRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => BatchedGetRequest;
        readonly responseSerialize: (value: BatchedGetResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => BatchedGetResponse;
    };
};
interface KeyValueDBServiceClient extends Client {
    put(request: PutRequest$1, callback: (error: ServiceError$1 | null, response: PutResponse) => void): ClientUnaryCall;
    put(request: PutRequest$1, metadata: Metadata, callback: (error: ServiceError$1 | null, response: PutResponse) => void): ClientUnaryCall;
    put(request: PutRequest$1, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: PutResponse) => void): ClientUnaryCall;
    remove(request: RemoveRequest, callback: (error: ServiceError$1 | null, response: RemoveResponse) => void): ClientUnaryCall;
    remove(request: RemoveRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: RemoveResponse) => void): ClientUnaryCall;
    remove(request: RemoveRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: RemoveResponse) => void): ClientUnaryCall;
    get(request: GetRequest, callback: (error: ServiceError$1 | null, response: GetResponse) => void): ClientUnaryCall;
    get(request: GetRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: GetResponse) => void): ClientUnaryCall;
    get(request: GetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: GetResponse) => void): ClientUnaryCall;
    mget(request: MultiGetRequest, callback: (error: ServiceError$1 | null, response: MultiGetResponse) => void): ClientUnaryCall;
    mget(request: MultiGetRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: MultiGetResponse) => void): ClientUnaryCall;
    mget(request: MultiGetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: MultiGetResponse) => void): ClientUnaryCall;
    putBatch(request: BatchedPutRequest$1, callback: (error: ServiceError$1 | null, response: BatchedPutResponse) => void): ClientUnaryCall;
    putBatch(request: BatchedPutRequest$1, metadata: Metadata, callback: (error: ServiceError$1 | null, response: BatchedPutResponse) => void): ClientUnaryCall;
    putBatch(request: BatchedPutRequest$1, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: BatchedPutResponse) => void): ClientUnaryCall;
    removeBatch(request: BatchedRemoveRequest, callback: (error: ServiceError$1 | null, response: BatchedRemoveResponse) => void): ClientUnaryCall;
    removeBatch(request: BatchedRemoveRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: BatchedRemoveResponse) => void): ClientUnaryCall;
    removeBatch(request: BatchedRemoveRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: BatchedRemoveResponse) => void): ClientUnaryCall;
    getBatch(request: BatchedGetRequest, callback: (error: ServiceError$1 | null, response: BatchedGetResponse) => void): ClientUnaryCall;
    getBatch(request: BatchedGetRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: BatchedGetResponse) => void): ClientUnaryCall;
    getBatch(request: BatchedGetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: BatchedGetResponse) => void): ClientUnaryCall;
}
declare const KeyValueDBServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): KeyValueDBServiceClient;
    service: typeof KeyValueDBServiceService;
    serviceName: string;
};
type KeyspaceManagerServiceService = typeof KeyspaceManagerServiceService;
declare const KeyspaceManagerServiceService: {
    readonly createKeyspace: {
        readonly path: "/aeca.rpc.db.kv.KeyspaceManagerService/create_keyspace";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateKeyspaceRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => CreateKeyspaceRequest;
        readonly responseSerialize: (value: CreateKeyspaceResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => CreateKeyspaceResponse;
    };
    readonly dropKeyspace: {
        readonly path: "/aeca.rpc.db.kv.KeyspaceManagerService/drop_keyspace";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DropKeyspaceRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => DropKeyspaceRequest;
        readonly responseSerialize: (value: DropKeyspaceResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => DropKeyspaceResponse;
    };
    readonly truncateKeyspace: {
        readonly path: "/aeca.rpc.db.kv.KeyspaceManagerService/truncate_keyspace";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TruncateKeyspaceRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => TruncateKeyspaceRequest;
        readonly responseSerialize: (value: TruncateKeyspaceResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => TruncateKeyspaceResponse;
    };
    readonly listKeyspaces: {
        readonly path: "/aeca.rpc.db.kv.KeyspaceManagerService/list_keyspaces";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListKeyspacesRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => ListKeyspacesRequest;
        readonly responseSerialize: (value: ListKeyspacesResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => ListKeyspacesResponse;
    };
};
interface KeyspaceManagerServiceClient extends Client {
    createKeyspace(request: CreateKeyspaceRequest, callback: (error: ServiceError$1 | null, response: CreateKeyspaceResponse) => void): ClientUnaryCall;
    createKeyspace(request: CreateKeyspaceRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: CreateKeyspaceResponse) => void): ClientUnaryCall;
    createKeyspace(request: CreateKeyspaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: CreateKeyspaceResponse) => void): ClientUnaryCall;
    dropKeyspace(request: DropKeyspaceRequest, callback: (error: ServiceError$1 | null, response: DropKeyspaceResponse) => void): ClientUnaryCall;
    dropKeyspace(request: DropKeyspaceRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: DropKeyspaceResponse) => void): ClientUnaryCall;
    dropKeyspace(request: DropKeyspaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: DropKeyspaceResponse) => void): ClientUnaryCall;
    truncateKeyspace(request: TruncateKeyspaceRequest, callback: (error: ServiceError$1 | null, response: TruncateKeyspaceResponse) => void): ClientUnaryCall;
    truncateKeyspace(request: TruncateKeyspaceRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: TruncateKeyspaceResponse) => void): ClientUnaryCall;
    truncateKeyspace(request: TruncateKeyspaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: TruncateKeyspaceResponse) => void): ClientUnaryCall;
    listKeyspaces(request: ListKeyspacesRequest, callback: (error: ServiceError$1 | null, response: ListKeyspacesResponse) => void): ClientUnaryCall;
    listKeyspaces(request: ListKeyspacesRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: ListKeyspacesResponse) => void): ClientUnaryCall;
    listKeyspaces(request: ListKeyspacesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: ListKeyspacesResponse) => void): ClientUnaryCall;
}
declare const KeyspaceManagerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): KeyspaceManagerServiceClient;
    service: typeof KeyspaceManagerServiceService;
    serviceName: string;
};
type Builtin$2 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$2<T> = T extends Builtin$2 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$2<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$2<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$2<T[K]>;
} : Partial<T>;
type KeysOfUnion$2<T> = T extends T ? keyof T : never;
type Exact$2<P, I extends P> = P extends Builtin$2 ? P : P & {
    [K in keyof P]: Exact$2<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$2<P>>]: never;
};

interface PutRequest {
    keyspaceName: string;
    key: Buffer;
    value: Buffer;
    ttl?: number;
    createIfMissing?: boolean;
}
interface BatchedPutRequest {
    keyspaceName: string;
    keys: Buffer[];
    values: Buffer[];
    ttls?: number[];
    createIfMissing?: boolean;
}
declare class KeyValueDB extends GrpcClient<KeyValueDBServiceClient> {
    constructor(channel: Channel, timeout?: number | undefined);
    get(keyspaceName: string, key: string | Buffer): Promise<Buffer>;
    getBatch(keyspaceName: string, keys: (string | Buffer)[]): Promise<Buffer[]>;
    put(keyspaceName: string, key: string | Buffer, value: string | Buffer, ttl?: number, createIfMissing?: boolean): Promise<boolean>;
    put(request: PutRequest): Promise<boolean>;
    putBatch(keyspaceName: string, keys: (string | Buffer)[], values: (string | Buffer)[], ttls?: number[], createIfMissing?: boolean): Promise<boolean[]>;
    putBatch(requests: BatchedPutRequest): Promise<boolean[]>;
    remove(keyspaceName: string, key: string | Buffer): Promise<boolean>;
    removeBatch(keyspaceName: string, keys: (string | Buffer)[]): Promise<boolean[]>;
    private toBuffer;
}
declare class KeyspaceManager extends GrpcClient<KeyspaceManagerServiceClient> {
    constructor(channel: Channel, timeout?: number | undefined);
    createKeyspace(keyspaceName: string): Promise<boolean>;
    listKeyspace(): Promise<string[]>;
    truncateKeyspace(keyspaceName: string): Promise<string[]>;
    dropKeyspace(keyspaceName: string): Promise<boolean>;
}

declare enum StatusType {
    kOK = 0,
    kNotFound = 1,
    kInternal = 10,
    UNRECOGNIZED = -1
}
interface Tensor$1 {
    dims: number;
    data: number[];
}
declare const Tensor$1: {
    encode(message: Tensor$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tensor$1;
    fromJSON(object: any): Tensor$1;
    toJSON(message: Tensor$1): unknown;
    create<I extends Exact$1<DeepPartial$1<Tensor$1>, I>>(base?: I): Tensor$1;
    fromPartial<I extends Exact$1<DeepPartial$1<Tensor$1>, I>>(object: I): Tensor$1;
};
interface ProfileInfo {
    durationUs: number;
}
declare const ProfileInfo: {
    encode(message: ProfileInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProfileInfo;
    fromJSON(object: any): ProfileInfo;
    toJSON(message: ProfileInfo): unknown;
    create<I extends Exact$1<DeepPartial$1<ProfileInfo>, I>>(base?: I): ProfileInfo;
    fromPartial<I extends Exact$1<DeepPartial$1<ProfileInfo>, I>>(object: I): ProfileInfo;
};
interface SentenceEncoderRequest {
    modelName: string;
    sentences: string[];
}
declare const SentenceEncoderRequest: {
    encode(message: SentenceEncoderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SentenceEncoderRequest;
    fromJSON(object: any): SentenceEncoderRequest;
    toJSON(message: SentenceEncoderRequest): unknown;
    create<I extends Exact$1<DeepPartial$1<SentenceEncoderRequest>, I>>(base?: I): SentenceEncoderRequest;
    fromPartial<I extends Exact$1<DeepPartial$1<SentenceEncoderRequest>, I>>(object: I): SentenceEncoderRequest;
};
interface SentenceEncoderResponse {
    status: StatusType;
    modelName: string;
    tensors: Tensor$1[];
    profiles: ProfileInfo[];
}
declare const SentenceEncoderResponse: {
    encode(message: SentenceEncoderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SentenceEncoderResponse;
    fromJSON(object: any): SentenceEncoderResponse;
    toJSON(message: SentenceEncoderResponse): unknown;
    create<I extends Exact$1<DeepPartial$1<SentenceEncoderResponse>, I>>(base?: I): SentenceEncoderResponse;
    fromPartial<I extends Exact$1<DeepPartial$1<SentenceEncoderResponse>, I>>(object: I): SentenceEncoderResponse;
};
type SentenceTransformerServiceService = typeof SentenceTransformerServiceService;
declare const SentenceTransformerServiceService: {
    readonly encode: {
        readonly path: "/aeca.rpc.sentence_transformer.SentenceTransformerService/encode";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SentenceEncoderRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => SentenceEncoderRequest;
        readonly responseSerialize: (value: SentenceEncoderResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => SentenceEncoderResponse;
    };
};
interface SentenceTransformerServiceClient extends Client {
    encode(request: SentenceEncoderRequest, callback: (error: ServiceError$1 | null, response: SentenceEncoderResponse) => void): ClientUnaryCall;
    encode(request: SentenceEncoderRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: SentenceEncoderResponse) => void): ClientUnaryCall;
    encode(request: SentenceEncoderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: SentenceEncoderResponse) => void): ClientUnaryCall;
}
declare const SentenceTransformerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SentenceTransformerServiceClient;
    service: typeof SentenceTransformerServiceService;
    serviceName: string;
};
type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;
type KeysOfUnion$1<T> = T extends T ? keyof T : never;
type Exact$1<P, I extends P> = P extends Builtin$1 ? P : P & {
    [K in keyof P]: Exact$1<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$1<P>>]: never;
};

type Tensor = Tensor$1;
declare class SentenceTransformer extends GrpcClient<SentenceTransformerServiceClient> {
    private _modelName;
    constructor(channel: Channel, modelName: string, timeout?: number | undefined);
    encode(sentences: string[]): Promise<Tensor[]>;
}

declare enum GetSystemMetricsSnapshotResponse_Status {
    Success = 0,
    UNRECOGNIZED = -1
}
interface GetSystemMetricsSnapshotRequest {
    clientName: string;
    version: string;
}
declare const GetSystemMetricsSnapshotRequest: {
    encode(message: GetSystemMetricsSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSystemMetricsSnapshotRequest;
    fromJSON(object: any): GetSystemMetricsSnapshotRequest;
    toJSON(message: GetSystemMetricsSnapshotRequest): unknown;
    create<I extends Exact<DeepPartial<GetSystemMetricsSnapshotRequest>, I>>(base?: I): GetSystemMetricsSnapshotRequest;
    fromPartial<I extends Exact<DeepPartial<GetSystemMetricsSnapshotRequest>, I>>(object: I): GetSystemMetricsSnapshotRequest;
};
interface GetSystemMetricsSnapshotResponse {
    status: GetSystemMetricsSnapshotResponse_Status;
    snapshot: SystemMetricsSnapshot$1 | undefined;
}
declare const GetSystemMetricsSnapshotResponse: {
    encode(message: GetSystemMetricsSnapshotResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSystemMetricsSnapshotResponse;
    fromJSON(object: any): GetSystemMetricsSnapshotResponse;
    toJSON(message: GetSystemMetricsSnapshotResponse): unknown;
    create<I extends Exact<DeepPartial<GetSystemMetricsSnapshotResponse>, I>>(base?: I): GetSystemMetricsSnapshotResponse;
    fromPartial<I extends Exact<DeepPartial<GetSystemMetricsSnapshotResponse>, I>>(object: I): GetSystemMetricsSnapshotResponse;
};
interface SystemMetricsSnapshot$1 {
    appMetadata: ApplicationMetadata | undefined;
    clusterInfo: ClusterInfo | undefined;
}
declare const SystemMetricsSnapshot$1: {
    encode(message: SystemMetricsSnapshot$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemMetricsSnapshot$1;
    fromJSON(object: any): SystemMetricsSnapshot$1;
    toJSON(message: SystemMetricsSnapshot$1): unknown;
    create<I extends Exact<DeepPartial<SystemMetricsSnapshot$1>, I>>(base?: I): SystemMetricsSnapshot$1;
    fromPartial<I extends Exact<DeepPartial<SystemMetricsSnapshot$1>, I>>(object: I): SystemMetricsSnapshot$1;
};
interface ApplicationMetadata {
    appName: string;
    version: string;
    persistentId: string;
}
declare const ApplicationMetadata: {
    encode(message: ApplicationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationMetadata;
    fromJSON(object: any): ApplicationMetadata;
    toJSON(message: ApplicationMetadata): unknown;
    create<I extends Exact<DeepPartial<ApplicationMetadata>, I>>(base?: I): ApplicationMetadata;
    fromPartial<I extends Exact<DeepPartial<ApplicationMetadata>, I>>(object: I): ApplicationMetadata;
};
interface ClusterInfo {
    clusterName: string;
    clusterId: string;
    nodes: NodeInfo[];
}
declare const ClusterInfo: {
    encode(message: ClusterInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterInfo;
    fromJSON(object: any): ClusterInfo;
    toJSON(message: ClusterInfo): unknown;
    create<I extends Exact<DeepPartial<ClusterInfo>, I>>(base?: I): ClusterInfo;
    fromPartial<I extends Exact<DeepPartial<ClusterInfo>, I>>(object: I): ClusterInfo;
};
interface NodeInfo {
    nodeName: string;
    nodeId: string;
    nodeIp: string;
    nodePort: number;
}
declare const NodeInfo: {
    encode(message: NodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo;
    fromJSON(object: any): NodeInfo;
    toJSON(message: NodeInfo): unknown;
    create<I extends Exact<DeepPartial<NodeInfo>, I>>(base?: I): NodeInfo;
    fromPartial<I extends Exact<DeepPartial<NodeInfo>, I>>(object: I): NodeInfo;
};
type SystemMetricsServiceService = typeof SystemMetricsServiceService;
declare const SystemMetricsServiceService: {
    readonly getSnapshot: {
        readonly path: "/aeca.rpc.SystemMetricsService/get_snapshot";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSystemMetricsSnapshotRequest) => Buffer<ArrayBuffer>;
        readonly requestDeserialize: (value: Buffer) => GetSystemMetricsSnapshotRequest;
        readonly responseSerialize: (value: GetSystemMetricsSnapshotResponse) => Buffer<ArrayBuffer>;
        readonly responseDeserialize: (value: Buffer) => GetSystemMetricsSnapshotResponse;
    };
};
interface SystemMetricsServiceClient extends Client {
    getSnapshot(request: GetSystemMetricsSnapshotRequest, callback: (error: ServiceError$1 | null, response: GetSystemMetricsSnapshotResponse) => void): ClientUnaryCall;
    getSnapshot(request: GetSystemMetricsSnapshotRequest, metadata: Metadata, callback: (error: ServiceError$1 | null, response: GetSystemMetricsSnapshotResponse) => void): ClientUnaryCall;
    getSnapshot(request: GetSystemMetricsSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError$1 | null, response: GetSystemMetricsSnapshotResponse) => void): ClientUnaryCall;
}
declare const SystemMetricsServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SystemMetricsServiceClient;
    service: typeof SystemMetricsServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};

type SystemMetricsSnapshot = SystemMetricsSnapshot$1;
declare class SystemMetrics extends GrpcClient<SystemMetricsServiceClient> {
    constructor(channel: Channel, timeout?: number | undefined);
    getSnapshot(clientName?: string, version?: string): Promise<SystemMetricsSnapshot>;
}

export { type BatchedPutRequest, Channel, type CollectionInfo, type DataFormat, type DataFrame, type Document, DocumentDB, type FindOptions, type IndexDescriptor, type IndexStats, IndexType, KeyValueDB, KeyspaceManager, type ObjectType, type PutRequest, type Query, type Request, type ReturnType, SentenceTransformer, type ServiceError, SystemMetrics, type SystemMetricsSnapshot, type Tensor, indexStatusFromJSON, indexTypeFromJSON };
