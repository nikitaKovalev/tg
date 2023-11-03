import {filter, OperatorFunction} from 'rxjs';

export const filterNil = <T>(): OperatorFunction<T, T & {}> =>
    filter((value: T): value is NonNullable<T> => value !== undefined && value !== null);
