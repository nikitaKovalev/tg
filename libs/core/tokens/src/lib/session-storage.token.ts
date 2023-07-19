import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window.token';

export const SESSION_STORAGE = new InjectionToken<Storage>('Browser session storage', {
    providedIn: 'root',
    factory: (): Storage => inject(WINDOW).sessionStorage,
});
