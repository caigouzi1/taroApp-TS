declare namespace MODEL {
  export interface SearchParams {
    current?: number;
    pageSize?: number;
  }

  export interface ResponseStruct {
    errCode: number;
    errMsg: string;
  }

  export interface DataSet<T> extends ResponseStruct {
    dataSet: T[];
    hasMore?: boolean;
    total?: number;
  }

  export interface Data<T> extends ResponseStruct {
    data: T;
  }

  export interface DeleteParams<T> {
    id?: number;
    ids?: number[] | number;
    type?: "single" | "batch";
    T?;
  }

  export interface CurrentUser extends ResponseStruct {
    uid?: number;
    title?: string;
    avatar?: string;
    password?: string;
  }

  export interface LoginState extends ResponseStruct {
    roles: string[];
  }
}
