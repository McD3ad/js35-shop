export interface IResponse<T> {
    data: T;
    meta?: IMeta;
}

export interface IMeta {
    message?: string;
    total?: number;
}
