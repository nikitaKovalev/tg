import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export type ExtraNotifications = {
    subscribe?: boolean;
    unsubscribe?: boolean;
    finalize?: boolean;
};

export function debug<T>(
    tag: string,
    extraNotifications?: ExtraNotifications,
): MonoTypeOperatorFunction<T> {
    const formatNotif = (notif: string, data?: unknown): [string, string, unknown] => [
        new Date().toISOString(),
        `[${tag}: ${notif}]`,
        data,
    ];

    return tap<T>({
        next: value => console.info(...formatNotif('Next', value)),
        error: (err: unknown) => console.error(...formatNotif('Error', err)),
        complete: () => console.warn(...formatNotif('Completed')),
        subscribe: () =>
            extraNotifications?.subscribe && console.info(...formatNotif('Subscribed')),
        unsubscribe: () =>
            extraNotifications?.unsubscribe &&
            console.info(...formatNotif(`Unsubscribed`)),
        finalize: () =>
            extraNotifications?.finalize && console.info(...formatNotif(`Finalized`)),
    });
}
