import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {CASE_CONVERTER_INTERCEPTOR_FUNCTIONS} from '@lightech-llc/case-converter';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withComponentInputBinding()),
        provideHttpClient(withInterceptors(CASE_CONVERTER_INTERCEPTOR_FUNCTIONS)),
        provideAnimations(),
        importProvidersFrom([]),
    ],
};
