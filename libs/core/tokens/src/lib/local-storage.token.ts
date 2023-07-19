import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window.token';

export const LOCAL_STORAGE = new InjectionToken<Storage>('Browser local storage', {
    providedIn: 'root',
    factory: (): Storage => inject(WINDOW).localStorage,
});
