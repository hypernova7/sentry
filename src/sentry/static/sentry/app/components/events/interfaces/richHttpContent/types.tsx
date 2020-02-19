export type RichHttpContentData = {
  data: Data;
  inferredContentType: InferredContentType;
};

type Data = {
  headers: Array<Array<string>>;
  query: string;
  env: {[key: string]: any} | null;
  fragment: string | null;
  cookies: Array<any>;
  data: SubData;
};

export type InferredContentType =
  | null
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data';

export type SubData = string | null | {[key: string]: any} | Array<{[key: string]: any}>;