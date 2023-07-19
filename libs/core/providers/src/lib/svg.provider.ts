import {Provider} from '@angular/core';
import {TuiSafeHtml} from '@taiga-ui/cdk';
import {TUI_SANITIZER, tuiSvgSrcInterceptors} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

export const SVG_PROVIDER: Provider[] = [
    {
        provide: TUI_SANITIZER,
        useClass: NgDompurifySanitizer,
    },
    tuiSvgSrcInterceptors((src: TuiSafeHtml) =>
        String(src).startsWith('client::')
            ? `assets/svg/${String(src).replace('client::', '')}.svg`
            : src,
    ),
];
