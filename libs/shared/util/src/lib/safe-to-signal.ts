import {Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {Observable} from 'rxjs';

/**
 * Get the current value of an `Observable` as a reactive `Signal`.
 * Add the type safety of the initial value. and reduce the boilerplate of the options.
 * @param source$
 * @param initialValue
 */
export const safeToSignal = <T>(source$: Observable<T>, initialValue: T): Signal<T> =>
    toSignal(source$, {initialValue});
