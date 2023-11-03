import {type Observable, OperatorFunction} from 'rxjs';
import {filter, map} from 'rxjs/operators';

export const filterUndefined = <T>(): OperatorFunction<
    T,
    T extends undefined ? never : T
> => filter((value: T): value is Exclude<T, undefined> => value !== undefined);

export function mapSkipUndefined<T, R>(fnTransformSkipUndefined: (value: T) => R) {
    return function (source: Observable<T>) {
        return source.pipe(map(fnTransformSkipUndefined), filterUndefined());
    };
}
