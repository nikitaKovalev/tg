import {map, OperatorFunction} from 'rxjs';

export const mapArray = <T, R>(
    mapFn: (item: T, index: number) => R,
): OperatorFunction<T[], R[]> =>
    map((array: T[]) => array.map((item, index) => mapFn(item, index)));
