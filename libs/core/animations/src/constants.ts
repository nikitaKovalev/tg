import {AnimationReferenceMetadata} from '@angular/animations';

export enum State {
    Enter = ':enter',
    Leave = ':leave',
    Any = '* => *',
}

export type AnimationType<T extends Record<string, string>, U> = {
    [K in keyof T as Exclude<Uncapitalize<K & string>, U>]: AnimationReferenceMetadata;
};

export const DURATION = 300 as const;
