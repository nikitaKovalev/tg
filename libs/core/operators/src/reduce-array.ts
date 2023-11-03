import {type Observable, map} from 'rxjs';

type Reduce = any[]['reduce'];

export function reduceArray<T>(
    reduceFn: (acc: T, item: T, index: number) => T,
): (source: Observable<T[]>) => Observable<T>;

export function reduceArray<T, R = T>(
    reduceFn: (acc: R, item: T, index: number) => R,
    initialValue: R,
): (source: Observable<T[]>) => Observable<R>;

export function reduceArray<T>(
    reduceFn: Parameters<Reduce>[0],
    initialValue?: Parameters<Reduce>[1],
): (source: Observable<T[]>) => Observable<T> {
    return map((array: any[]) => {
        // call reduce function with initialValue
        if (initialValue !== undefined) {
            return array.reduce(reduceFn, initialValue);
        }
        // no initialValue

        // Javascript throws error if array is empty: [].reduce((acc,n) => acc +n)
        // avoid errors and return undefined
        if (!array.length) {
            return undefined;
        }

        // if array is not empty, call the reduceFn without initialValue
        return array.reduce(reduceFn);
    });
}
