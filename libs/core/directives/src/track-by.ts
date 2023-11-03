import {NgForOf} from '@angular/common';
import {type NgIterable, Directive, inject, Input} from '@angular/core';

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

export const TRACK_BY_DIRECTIVES = [TrackByIdDirective, TrackByPropDirective] as const;
