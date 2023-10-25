export interface QueryParameters {
    search: string;
    ordering: string;
    limit: number;
    offset: number;
    name: string;
    [key: string]: any;
}
