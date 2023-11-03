import {map, OperatorFunction} from 'rxjs';

export const filterArray = <T>(
    filterFn: (item: T, index: number) => boolean,
): OperatorFunction<T[], T[]> =>
    map((array: T[]) => array.filter((item, index) => filterFn(item, index)));
