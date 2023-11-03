import {inject, Injector, runInInjectionContext} from '@angular/core';
import {type Event, NavigationEnd, Router} from '@angular/router';
import {type Observable, filter} from 'rxjs';

import {assertInjector} from './assert-injector';

/**
 * Creates an Observable that emits when a navigation ends.
 * @returns An Observable of NavigationEnd events.
 */
export function injectNavigationEnd(injector?: Injector): Observable<NavigationEnd> {
    injector = assertInjector(injectNavigationEnd, injector);

    return runInInjectionContext(injector, () => {
        return inject(Router).events.pipe(
            filter(
                (event: Event): event is NavigationEnd => event instanceof NavigationEnd,
            ),
        );
    });
}
