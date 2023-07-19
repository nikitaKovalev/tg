import {computed, Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, Observable, of} from 'rxjs';

export const toSignalWithError = <T>(
    source$: Observable<T>,
): {
    readonly value: Signal<T | undefined>;
    readonly error: Signal<any>;
} => {
    const source = toSignal(
        source$.pipe(
            map(data => ({value: data, error: undefined})),
            catchError((error: unknown) => of({value: undefined, error})),
        ),
    );

    const value = computed(() => source()?.value);
    const error = computed(() => source()?.error);

    return {value, error};
};
