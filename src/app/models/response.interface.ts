export interface IResponse<T> {
    data: T;
    meta?: IMeta;
}

export interface IMeta {
    title?: string;
    description?: string;
}
