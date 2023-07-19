import {
    animate,
    animation,
    style,
    transition,
    trigger,
    useAnimation,
} from '@angular/animations';

import {AnimationType, State} from './constants';

const EXPAND_ANIMATION = '400ms cubic-bezier(0.4, 0.0, 0.2, 1)';

enum Animation {
    Expand = 'expand',
    ExpandIn = 'expandIn',
    ExpandOut = 'expandOut',
}

const expandAnimations: AnimationType<typeof Animation, 'expand'> = {
    [Animation.ExpandIn]: animation([
        style({height: '0px', minHeight: '0', opacity: 0}),
        animate(EXPAND_ANIMATION, style({height: '*', opacity: 1})),
    ]),
    [Animation.ExpandOut]: animation([
        style({height: '*', opacity: 1}),
        animate(EXPAND_ANIMATION, style({height: '0px', minHeight: '0', opacity: 0})),
    ]),
};

export const expand = trigger(Animation.Expand, [
    transition(State.Enter, [useAnimation(expandAnimations.expandIn)]),
    transition(State.Leave, [useAnimation(expandAnimations.expandOut)]),
]);
