import {
    animate,
    animateChild,
    query,
    stagger,
    style,
    transition,
    trigger,
} from '@angular/animations';

import {DURATION, State} from './constants';

enum Animation {
    List = 'listStagger',
    Grid = 'gridStagger',
}

const staggerAnimations = {
    [Animation.List]: trigger(Animation.List, [
        transition(`${State.Enter}, ${State.Any}`, [
            query(State.Enter, [stagger(100, [animateChild()])], {optional: true}),
        ]),
    ]),
    [Animation.Grid]: trigger(Animation.Grid, [
        transition(`${State.Enter}`, [
            query('.ideo-grid-item', [
                style({opacity: 0, transform: 'scale(0.8)'}),
                stagger(100, [
                    animate(DURATION, style({opacity: 1, transform: 'scale(1)'})),
                ]),
            ]),
        ]),
    ]),
};

export const listStagger = staggerAnimations.listStagger;
export const gridStagger = staggerAnimations.gridStagger;
