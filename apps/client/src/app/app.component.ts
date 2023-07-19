import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'nx-angular-monorepo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
