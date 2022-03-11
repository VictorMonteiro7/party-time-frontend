export type ReducerType = {
  type: string;
  payload:
    | boolean
    | {
        [key: string]: any;
      };
};
