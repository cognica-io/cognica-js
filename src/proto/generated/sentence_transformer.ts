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
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cognica.rpc.sentence_transformer";

export enum StatusType {
  kOK = 0,
  kNotFound = 1,
  kInternal = 10,
  UNRECOGNIZED = -1,
}

export function statusTypeFromJSON(object: any): StatusType {
  switch (object) {
    case 0:
    case "kOK":
      return StatusType.kOK;
    case 1:
    case "kNotFound":
      return StatusType.kNotFound;
    case 10:
    case "kInternal":
      return StatusType.kInternal;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StatusType.UNRECOGNIZED;
  }
}

export function statusTypeToJSON(object: StatusType): string {
  switch (object) {
    case StatusType.kOK:
      return "kOK";
    case StatusType.kNotFound:
      return "kNotFound";
    case StatusType.kInternal:
      return "kInternal";
    case StatusType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Tensor {
  dims: number;
  data: number[];
}

export interface ProfileInfo {
  durationUs: number;
}

export interface SentenceEncoderRequest {
  modelName: string;
  sentences: string[];
}

export interface SentenceEncoderResponse {
  status: StatusType;
  modelName: string;
  tensors: Tensor[];
  profiles: ProfileInfo[];
}

export interface SentencePair {
  sentence1: string;
  sentence2: string;
}

export interface CrossEncoderRequest {
  modelName: string;
  sentences: SentencePair[];
}

export interface CrossEncoderResponse {
  status: StatusType;
  modelName: string;
  scores: number[];
  profiles: ProfileInfo[];
}

export interface CLIPEncoderRequest {
  modelName: string;
  format: CLIPEncoderRequest_InputFormat;
  inputs: Buffer[];
}

export enum CLIPEncoderRequest_InputFormat {
  kText = 0,
  kImage = 1,
  UNRECOGNIZED = -1,
}

export function cLIPEncoderRequest_InputFormatFromJSON(object: any): CLIPEncoderRequest_InputFormat {
  switch (object) {
    case 0:
    case "kText":
      return CLIPEncoderRequest_InputFormat.kText;
    case 1:
    case "kImage":
      return CLIPEncoderRequest_InputFormat.kImage;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CLIPEncoderRequest_InputFormat.UNRECOGNIZED;
  }
}

export function cLIPEncoderRequest_InputFormatToJSON(object: CLIPEncoderRequest_InputFormat): string {
  switch (object) {
    case CLIPEncoderRequest_InputFormat.kText:
      return "kText";
    case CLIPEncoderRequest_InputFormat.kImage:
      return "kImage";
    case CLIPEncoderRequest_InputFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CLIPEncoderResponse {
  status: StatusType;
  modelName: string;
  tensors: Tensor[];
  profiles: ProfileInfo[];
}

export interface QAEncoderRequest {
  modelName: string;
  questions: string[];
  contexts: string[];
  topK: number;
}

export interface QAEncoderResponse {
  status: StatusType;
  modelName: string;
  answers: QAEncoderResponse_CandidateList[];
  profiles: ProfileInfo[];
}

export interface QAEncoderResponse_Candidate {
  score: number;
  begin: number;
  end: number;
  answer: string;
}

export interface QAEncoderResponse_CandidateList {
  candidates: QAEncoderResponse_Candidate[];
}

function createBaseTensor(): Tensor {
  return { dims: 0, data: [] };
}

export const Tensor = {
  encode(message: Tensor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dims !== 0) {
      writer.uint32(8).int32(message.dims);
    }
    writer.uint32(18).fork();
    for (const v of message.data) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tensor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTensor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.dims = reader.int32();
          continue;
        case 2:
          if (tag === 21) {
            message.data.push(reader.float());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.data.push(reader.float());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tensor {
    return {
      dims: isSet(object.dims) ? globalThis.Number(object.dims) : 0,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: Tensor): unknown {
    const obj: any = {};
    if (message.dims !== 0) {
      obj.dims = Math.round(message.dims);
    }
    if (message.data?.length) {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tensor>, I>>(base?: I): Tensor {
    return Tensor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tensor>, I>>(object: I): Tensor {
    const message = createBaseTensor();
    message.dims = object.dims ?? 0;
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseProfileInfo(): ProfileInfo {
  return { durationUs: 0 };
}

export const ProfileInfo = {
  encode(message: ProfileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.durationUs !== 0) {
      writer.uint32(8).uint64(message.durationUs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.durationUs = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProfileInfo {
    return { durationUs: isSet(object.durationUs) ? globalThis.Number(object.durationUs) : 0 };
  },

  toJSON(message: ProfileInfo): unknown {
    const obj: any = {};
    if (message.durationUs !== 0) {
      obj.durationUs = Math.round(message.durationUs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileInfo>, I>>(base?: I): ProfileInfo {
    return ProfileInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileInfo>, I>>(object: I): ProfileInfo {
    const message = createBaseProfileInfo();
    message.durationUs = object.durationUs ?? 0;
    return message;
  },
};

function createBaseSentenceEncoderRequest(): SentenceEncoderRequest {
  return { modelName: "", sentences: [] };
}

export const SentenceEncoderRequest = {
  encode(message: SentenceEncoderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    for (const v of message.sentences) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SentenceEncoderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentenceEncoderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modelName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sentences.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SentenceEncoderRequest {
    return {
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      sentences: globalThis.Array.isArray(object?.sentences)
        ? object.sentences.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SentenceEncoderRequest): unknown {
    const obj: any = {};
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.sentences?.length) {
      obj.sentences = message.sentences;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SentenceEncoderRequest>, I>>(base?: I): SentenceEncoderRequest {
    return SentenceEncoderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SentenceEncoderRequest>, I>>(object: I): SentenceEncoderRequest {
    const message = createBaseSentenceEncoderRequest();
    message.modelName = object.modelName ?? "";
    message.sentences = object.sentences?.map((e) => e) || [];
    return message;
  },
};

function createBaseSentenceEncoderResponse(): SentenceEncoderResponse {
  return { status: 0, modelName: "", tensors: [], profiles: [] };
}

export const SentenceEncoderResponse = {
  encode(message: SentenceEncoderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    for (const v of message.tensors) {
      Tensor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.profiles) {
      ProfileInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SentenceEncoderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentenceEncoderResponse();
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

          message.modelName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tensors.push(Tensor.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.profiles.push(ProfileInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SentenceEncoderResponse {
    return {
      status: isSet(object.status) ? statusTypeFromJSON(object.status) : 0,
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      tensors: globalThis.Array.isArray(object?.tensors) ? object.tensors.map((e: any) => Tensor.fromJSON(e)) : [],
      profiles: globalThis.Array.isArray(object?.profiles)
        ? object.profiles.map((e: any) => ProfileInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SentenceEncoderResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusTypeToJSON(message.status);
    }
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.tensors?.length) {
      obj.tensors = message.tensors.map((e) => Tensor.toJSON(e));
    }
    if (message.profiles?.length) {
      obj.profiles = message.profiles.map((e) => ProfileInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SentenceEncoderResponse>, I>>(base?: I): SentenceEncoderResponse {
    return SentenceEncoderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SentenceEncoderResponse>, I>>(object: I): SentenceEncoderResponse {
    const message = createBaseSentenceEncoderResponse();
    message.status = object.status ?? 0;
    message.modelName = object.modelName ?? "";
    message.tensors = object.tensors?.map((e) => Tensor.fromPartial(e)) || [];
    message.profiles = object.profiles?.map((e) => ProfileInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSentencePair(): SentencePair {
  return { sentence1: "", sentence2: "" };
}

export const SentencePair = {
  encode(message: SentencePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sentence1 !== "") {
      writer.uint32(10).string(message.sentence1);
    }
    if (message.sentence2 !== "") {
      writer.uint32(18).string(message.sentence2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SentencePair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentencePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sentence1 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sentence2 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SentencePair {
    return {
      sentence1: isSet(object.sentence1) ? globalThis.String(object.sentence1) : "",
      sentence2: isSet(object.sentence2) ? globalThis.String(object.sentence2) : "",
    };
  },

  toJSON(message: SentencePair): unknown {
    const obj: any = {};
    if (message.sentence1 !== "") {
      obj.sentence1 = message.sentence1;
    }
    if (message.sentence2 !== "") {
      obj.sentence2 = message.sentence2;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SentencePair>, I>>(base?: I): SentencePair {
    return SentencePair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SentencePair>, I>>(object: I): SentencePair {
    const message = createBaseSentencePair();
    message.sentence1 = object.sentence1 ?? "";
    message.sentence2 = object.sentence2 ?? "";
    return message;
  },
};

function createBaseCrossEncoderRequest(): CrossEncoderRequest {
  return { modelName: "", sentences: [] };
}

export const CrossEncoderRequest = {
  encode(message: CrossEncoderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    for (const v of message.sentences) {
      SentencePair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossEncoderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossEncoderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modelName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sentences.push(SentencePair.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossEncoderRequest {
    return {
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      sentences: globalThis.Array.isArray(object?.sentences)
        ? object.sentences.map((e: any) => SentencePair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CrossEncoderRequest): unknown {
    const obj: any = {};
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.sentences?.length) {
      obj.sentences = message.sentences.map((e) => SentencePair.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossEncoderRequest>, I>>(base?: I): CrossEncoderRequest {
    return CrossEncoderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CrossEncoderRequest>, I>>(object: I): CrossEncoderRequest {
    const message = createBaseCrossEncoderRequest();
    message.modelName = object.modelName ?? "";
    message.sentences = object.sentences?.map((e) => SentencePair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCrossEncoderResponse(): CrossEncoderResponse {
  return { status: 0, modelName: "", scores: [], profiles: [] };
}

export const CrossEncoderResponse = {
  encode(message: CrossEncoderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    writer.uint32(26).fork();
    for (const v of message.scores) {
      writer.float(v);
    }
    writer.ldelim();
    for (const v of message.profiles) {
      ProfileInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossEncoderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossEncoderResponse();
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

          message.modelName = reader.string();
          continue;
        case 3:
          if (tag === 29) {
            message.scores.push(reader.float());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scores.push(reader.float());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.profiles.push(ProfileInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossEncoderResponse {
    return {
      status: isSet(object.status) ? statusTypeFromJSON(object.status) : 0,
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      scores: globalThis.Array.isArray(object?.scores) ? object.scores.map((e: any) => globalThis.Number(e)) : [],
      profiles: globalThis.Array.isArray(object?.profiles)
        ? object.profiles.map((e: any) => ProfileInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CrossEncoderResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusTypeToJSON(message.status);
    }
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.scores?.length) {
      obj.scores = message.scores;
    }
    if (message.profiles?.length) {
      obj.profiles = message.profiles.map((e) => ProfileInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossEncoderResponse>, I>>(base?: I): CrossEncoderResponse {
    return CrossEncoderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CrossEncoderResponse>, I>>(object: I): CrossEncoderResponse {
    const message = createBaseCrossEncoderResponse();
    message.status = object.status ?? 0;
    message.modelName = object.modelName ?? "";
    message.scores = object.scores?.map((e) => e) || [];
    message.profiles = object.profiles?.map((e) => ProfileInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCLIPEncoderRequest(): CLIPEncoderRequest {
  return { modelName: "", format: 0, inputs: [] };
}

export const CLIPEncoderRequest = {
  encode(message: CLIPEncoderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    for (const v of message.inputs) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLIPEncoderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLIPEncoderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modelName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inputs.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CLIPEncoderRequest {
    return {
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      format: isSet(object.format) ? cLIPEncoderRequest_InputFormatFromJSON(object.format) : 0,
      inputs: globalThis.Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
    };
  },

  toJSON(message: CLIPEncoderRequest): unknown {
    const obj: any = {};
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.format !== 0) {
      obj.format = cLIPEncoderRequest_InputFormatToJSON(message.format);
    }
    if (message.inputs?.length) {
      obj.inputs = message.inputs.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CLIPEncoderRequest>, I>>(base?: I): CLIPEncoderRequest {
    return CLIPEncoderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CLIPEncoderRequest>, I>>(object: I): CLIPEncoderRequest {
    const message = createBaseCLIPEncoderRequest();
    message.modelName = object.modelName ?? "";
    message.format = object.format ?? 0;
    message.inputs = object.inputs?.map((e) => e) || [];
    return message;
  },
};

function createBaseCLIPEncoderResponse(): CLIPEncoderResponse {
  return { status: 0, modelName: "", tensors: [], profiles: [] };
}

export const CLIPEncoderResponse = {
  encode(message: CLIPEncoderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    for (const v of message.tensors) {
      Tensor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.profiles) {
      ProfileInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLIPEncoderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLIPEncoderResponse();
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

          message.modelName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tensors.push(Tensor.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.profiles.push(ProfileInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CLIPEncoderResponse {
    return {
      status: isSet(object.status) ? statusTypeFromJSON(object.status) : 0,
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      tensors: globalThis.Array.isArray(object?.tensors) ? object.tensors.map((e: any) => Tensor.fromJSON(e)) : [],
      profiles: globalThis.Array.isArray(object?.profiles)
        ? object.profiles.map((e: any) => ProfileInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CLIPEncoderResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusTypeToJSON(message.status);
    }
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.tensors?.length) {
      obj.tensors = message.tensors.map((e) => Tensor.toJSON(e));
    }
    if (message.profiles?.length) {
      obj.profiles = message.profiles.map((e) => ProfileInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CLIPEncoderResponse>, I>>(base?: I): CLIPEncoderResponse {
    return CLIPEncoderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CLIPEncoderResponse>, I>>(object: I): CLIPEncoderResponse {
    const message = createBaseCLIPEncoderResponse();
    message.status = object.status ?? 0;
    message.modelName = object.modelName ?? "";
    message.tensors = object.tensors?.map((e) => Tensor.fromPartial(e)) || [];
    message.profiles = object.profiles?.map((e) => ProfileInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQAEncoderRequest(): QAEncoderRequest {
  return { modelName: "", questions: [], contexts: [], topK: 0 };
}

export const QAEncoderRequest = {
  encode(message: QAEncoderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    for (const v of message.questions) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.contexts) {
      writer.uint32(26).string(v!);
    }
    if (message.topK !== 0) {
      writer.uint32(32).int32(message.topK);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QAEncoderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQAEncoderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modelName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.questions.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contexts.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.topK = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QAEncoderRequest {
    return {
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      questions: globalThis.Array.isArray(object?.questions)
        ? object.questions.map((e: any) => globalThis.String(e))
        : [],
      contexts: globalThis.Array.isArray(object?.contexts) ? object.contexts.map((e: any) => globalThis.String(e)) : [],
      topK: isSet(object.topK) ? globalThis.Number(object.topK) : 0,
    };
  },

  toJSON(message: QAEncoderRequest): unknown {
    const obj: any = {};
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.questions?.length) {
      obj.questions = message.questions;
    }
    if (message.contexts?.length) {
      obj.contexts = message.contexts;
    }
    if (message.topK !== 0) {
      obj.topK = Math.round(message.topK);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QAEncoderRequest>, I>>(base?: I): QAEncoderRequest {
    return QAEncoderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QAEncoderRequest>, I>>(object: I): QAEncoderRequest {
    const message = createBaseQAEncoderRequest();
    message.modelName = object.modelName ?? "";
    message.questions = object.questions?.map((e) => e) || [];
    message.contexts = object.contexts?.map((e) => e) || [];
    message.topK = object.topK ?? 0;
    return message;
  },
};

function createBaseQAEncoderResponse(): QAEncoderResponse {
  return { status: 0, modelName: "", answers: [], profiles: [] };
}

export const QAEncoderResponse = {
  encode(message: QAEncoderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    for (const v of message.answers) {
      QAEncoderResponse_CandidateList.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.profiles) {
      ProfileInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QAEncoderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQAEncoderResponse();
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

          message.modelName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.answers.push(QAEncoderResponse_CandidateList.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.profiles.push(ProfileInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QAEncoderResponse {
    return {
      status: isSet(object.status) ? statusTypeFromJSON(object.status) : 0,
      modelName: isSet(object.modelName) ? globalThis.String(object.modelName) : "",
      answers: globalThis.Array.isArray(object?.answers)
        ? object.answers.map((e: any) => QAEncoderResponse_CandidateList.fromJSON(e))
        : [],
      profiles: globalThis.Array.isArray(object?.profiles)
        ? object.profiles.map((e: any) => ProfileInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QAEncoderResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusTypeToJSON(message.status);
    }
    if (message.modelName !== "") {
      obj.modelName = message.modelName;
    }
    if (message.answers?.length) {
      obj.answers = message.answers.map((e) => QAEncoderResponse_CandidateList.toJSON(e));
    }
    if (message.profiles?.length) {
      obj.profiles = message.profiles.map((e) => ProfileInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QAEncoderResponse>, I>>(base?: I): QAEncoderResponse {
    return QAEncoderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QAEncoderResponse>, I>>(object: I): QAEncoderResponse {
    const message = createBaseQAEncoderResponse();
    message.status = object.status ?? 0;
    message.modelName = object.modelName ?? "";
    message.answers = object.answers?.map((e) => QAEncoderResponse_CandidateList.fromPartial(e)) || [];
    message.profiles = object.profiles?.map((e) => ProfileInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQAEncoderResponse_Candidate(): QAEncoderResponse_Candidate {
  return { score: 0, begin: 0, end: 0, answer: "" };
}

export const QAEncoderResponse_Candidate = {
  encode(message: QAEncoderResponse_Candidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    if (message.begin !== 0) {
      writer.uint32(16).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(24).int32(message.end);
    }
    if (message.answer !== "") {
      writer.uint32(34).string(message.answer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QAEncoderResponse_Candidate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQAEncoderResponse_Candidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.score = reader.float();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.begin = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.end = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.answer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QAEncoderResponse_Candidate {
    return {
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
      begin: isSet(object.begin) ? globalThis.Number(object.begin) : 0,
      end: isSet(object.end) ? globalThis.Number(object.end) : 0,
      answer: isSet(object.answer) ? globalThis.String(object.answer) : "",
    };
  },

  toJSON(message: QAEncoderResponse_Candidate): unknown {
    const obj: any = {};
    if (message.score !== 0) {
      obj.score = message.score;
    }
    if (message.begin !== 0) {
      obj.begin = Math.round(message.begin);
    }
    if (message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    if (message.answer !== "") {
      obj.answer = message.answer;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QAEncoderResponse_Candidate>, I>>(base?: I): QAEncoderResponse_Candidate {
    return QAEncoderResponse_Candidate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QAEncoderResponse_Candidate>, I>>(object: I): QAEncoderResponse_Candidate {
    const message = createBaseQAEncoderResponse_Candidate();
    message.score = object.score ?? 0;
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.answer = object.answer ?? "";
    return message;
  },
};

function createBaseQAEncoderResponse_CandidateList(): QAEncoderResponse_CandidateList {
  return { candidates: [] };
}

export const QAEncoderResponse_CandidateList = {
  encode(message: QAEncoderResponse_CandidateList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.candidates) {
      QAEncoderResponse_Candidate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QAEncoderResponse_CandidateList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQAEncoderResponse_CandidateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.candidates.push(QAEncoderResponse_Candidate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QAEncoderResponse_CandidateList {
    return {
      candidates: globalThis.Array.isArray(object?.candidates)
        ? object.candidates.map((e: any) => QAEncoderResponse_Candidate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QAEncoderResponse_CandidateList): unknown {
    const obj: any = {};
    if (message.candidates?.length) {
      obj.candidates = message.candidates.map((e) => QAEncoderResponse_Candidate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QAEncoderResponse_CandidateList>, I>>(base?: I): QAEncoderResponse_CandidateList {
    return QAEncoderResponse_CandidateList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QAEncoderResponse_CandidateList>, I>>(
    object: I,
  ): QAEncoderResponse_CandidateList {
    const message = createBaseQAEncoderResponse_CandidateList();
    message.candidates = object.candidates?.map((e) => QAEncoderResponse_Candidate.fromPartial(e)) || [];
    return message;
  },
};

export type SentenceTransformerServiceService = typeof SentenceTransformerServiceService;
export const SentenceTransformerServiceService = {
  encode: {
    path: "/cognica.rpc.sentence_transformer.SentenceTransformerService/encode",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SentenceEncoderRequest) => Buffer.from(SentenceEncoderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SentenceEncoderRequest.decode(value),
    responseSerialize: (value: SentenceEncoderResponse) => Buffer.from(SentenceEncoderResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SentenceEncoderResponse.decode(value),
  },
} as const;

export interface SentenceTransformerServiceServer extends UntypedServiceImplementation {
  encode: handleUnaryCall<SentenceEncoderRequest, SentenceEncoderResponse>;
}

export interface SentenceTransformerServiceClient extends Client {
  encode(
    request: SentenceEncoderRequest,
    callback: (error: ServiceError | null, response: SentenceEncoderResponse) => void,
  ): ClientUnaryCall;
  encode(
    request: SentenceEncoderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SentenceEncoderResponse) => void,
  ): ClientUnaryCall;
  encode(
    request: SentenceEncoderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SentenceEncoderResponse) => void,
  ): ClientUnaryCall;
}

export const SentenceTransformerServiceClient = makeGenericClientConstructor(
  SentenceTransformerServiceService,
  "cognica.rpc.sentence_transformer.SentenceTransformerService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): SentenceTransformerServiceClient;
  service: typeof SentenceTransformerServiceService;
  serviceName: string;
};

export type CrossEncoderServiceService = typeof CrossEncoderServiceService;
export const CrossEncoderServiceService = {
  predict: {
    path: "/cognica.rpc.sentence_transformer.CrossEncoderService/predict",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CrossEncoderRequest) => Buffer.from(CrossEncoderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CrossEncoderRequest.decode(value),
    responseSerialize: (value: CrossEncoderResponse) => Buffer.from(CrossEncoderResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CrossEncoderResponse.decode(value),
  },
} as const;

export interface CrossEncoderServiceServer extends UntypedServiceImplementation {
  predict: handleUnaryCall<CrossEncoderRequest, CrossEncoderResponse>;
}

export interface CrossEncoderServiceClient extends Client {
  predict(
    request: CrossEncoderRequest,
    callback: (error: ServiceError | null, response: CrossEncoderResponse) => void,
  ): ClientUnaryCall;
  predict(
    request: CrossEncoderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CrossEncoderResponse) => void,
  ): ClientUnaryCall;
  predict(
    request: CrossEncoderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CrossEncoderResponse) => void,
  ): ClientUnaryCall;
}

export const CrossEncoderServiceClient = makeGenericClientConstructor(
  CrossEncoderServiceService,
  "cognica.rpc.sentence_transformer.CrossEncoderService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CrossEncoderServiceClient;
  service: typeof CrossEncoderServiceService;
  serviceName: string;
};

export type CLIPEncoderServiceService = typeof CLIPEncoderServiceService;
export const CLIPEncoderServiceService = {
  encode: {
    path: "/cognica.rpc.sentence_transformer.CLIPEncoderService/encode",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CLIPEncoderRequest) => Buffer.from(CLIPEncoderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CLIPEncoderRequest.decode(value),
    responseSerialize: (value: CLIPEncoderResponse) => Buffer.from(CLIPEncoderResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CLIPEncoderResponse.decode(value),
  },
} as const;

export interface CLIPEncoderServiceServer extends UntypedServiceImplementation {
  encode: handleUnaryCall<CLIPEncoderRequest, CLIPEncoderResponse>;
}

export interface CLIPEncoderServiceClient extends Client {
  encode(
    request: CLIPEncoderRequest,
    callback: (error: ServiceError | null, response: CLIPEncoderResponse) => void,
  ): ClientUnaryCall;
  encode(
    request: CLIPEncoderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CLIPEncoderResponse) => void,
  ): ClientUnaryCall;
  encode(
    request: CLIPEncoderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CLIPEncoderResponse) => void,
  ): ClientUnaryCall;
}

export const CLIPEncoderServiceClient = makeGenericClientConstructor(
  CLIPEncoderServiceService,
  "cognica.rpc.sentence_transformer.CLIPEncoderService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): CLIPEncoderServiceClient;
  service: typeof CLIPEncoderServiceService;
  serviceName: string;
};

export type QAEncoderServiceService = typeof QAEncoderServiceService;
export const QAEncoderServiceService = {
  predict: {
    path: "/cognica.rpc.sentence_transformer.QAEncoderService/predict",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QAEncoderRequest) => Buffer.from(QAEncoderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QAEncoderRequest.decode(value),
    responseSerialize: (value: QAEncoderResponse) => Buffer.from(QAEncoderResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QAEncoderResponse.decode(value),
  },
} as const;

export interface QAEncoderServiceServer extends UntypedServiceImplementation {
  predict: handleUnaryCall<QAEncoderRequest, QAEncoderResponse>;
}

export interface QAEncoderServiceClient extends Client {
  predict(
    request: QAEncoderRequest,
    callback: (error: ServiceError | null, response: QAEncoderResponse) => void,
  ): ClientUnaryCall;
  predict(
    request: QAEncoderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QAEncoderResponse) => void,
  ): ClientUnaryCall;
  predict(
    request: QAEncoderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QAEncoderResponse) => void,
  ): ClientUnaryCall;
}

export const QAEncoderServiceClient = makeGenericClientConstructor(
  QAEncoderServiceService,
  "cognica.rpc.sentence_transformer.QAEncoderService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): QAEncoderServiceClient;
  service: typeof QAEncoderServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
