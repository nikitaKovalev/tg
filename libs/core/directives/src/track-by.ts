import {NgForOf} from '@angular/common';
import {Directive, inject, Input, type NgIterable} from '@angular/core';

@Directive({
    selector: '[ngForTrackById]',
    standalone: true,
})
export class TrackByIdDirective<T extends {id: string | number}> {
    private readonly ngFor = inject(NgForOf<T>, {self: true});

    @Input()
    ngForOf!: NgIterable<T>;

    constructor() {
        this.ngFor.ngForTrackBy = (index: number, item: T) => item.id;
    }
}

@Directive({
    selector: '[ngForTrackByProp]',
    standalone: true,
})
export class TrackByPropDirective<T> {
    private readonly ngFor = inject(NgForOf<T>, {self: true});

    @Input()
    ngForOf!: NgIterable<T>;

    @Input({required: true})
    set ngForTrackByProp(trackByProp: keyof T) {
        if (!trackByProp) {
            return;
        }

        this.ngFor.ngForTrackBy = (index: number, item: T) => item[trackByProp];
    }
}

@Directive({
    selector: '[ngForTrackByIndex]',
    standalone: true,
})
export class TrackByIndexDirective<T> {
    private readonly ngFor = inject(NgForOf<T>, {self: true});

    @Input()
    ngForOf!: NgIterable<T>;

    constructor() {
        this.ngFor.ngForTrackBy = (index: number) => index;
    }
}

export const TRACK_BY_DIRECTIVES = [
    TrackByIdDirective,
    TrackByPropDirective,
    TrackByIndexDirective,
] as const;
