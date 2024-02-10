import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TUI_SANITIZER,
    TuiAlertModule,
    TuiDialogModule,
    TuiRootModule,
} from '@taiga-ui/core';
import {SVG_PROVIDER} from '@tg/core/providers';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    standalone: true,
    imports: [RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule],
    selector: 'tg-root',
    template: `
        <tui-root>
            <router-outlet></router-outlet>
        </tui-root>
    `,
    styleUrls: ['./app.component.scss'],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, SVG_PROVIDER],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
