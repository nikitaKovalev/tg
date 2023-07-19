import {
    animate,
    animation,
    group,
    keyframes,
    query,
    stagger,
    style,
    transition,
    trigger,
    useAnimation,
} from '@angular/animations';

import {AnimationType, DURATION, State} from './constants';

enum Animation {
    Fade = 'fade',
    FadeIn = 'fadeIn',
    FadeInUp = 'fadeInUp',
    FadeInLeft = 'fadeInLeft',
    FadeOut = 'fadeOut',
    FadeSlide = 'fadeSlide',
    FadeSlideIn = 'fadeSlideIn',
    FadeSlideOut = 'fadeSlideOut',
    FadeInGrowStagger = 'fadeInGrowStagger',
}

const fadeAnimations: AnimationType<typeof Animation, 'fade' | 'fadeSlide'> = {
    [Animation.FadeIn]: animation([
        style({opacity: 0}),
        animate(DURATION, keyframes([style({opacity: 0}), style({opacity: 1})])),
    ]),
    [Animation.FadeInUp]: animation([
        style({opacity: 0}),
        animate(
            DURATION,
            keyframes([
                style({opacity: 0, transform: 'translate(0px, 50px)'}),
                style({opacity: 1, transform: 'translate(0px, 0px)'}),
            ]),
        ),
    ]),
    [Animation.FadeInLeft]: animation([
        style({opacity: 0}),
        animate(
            DURATION,
            keyframes([
                style({opacity: 0, transform: 'translate(-25px, 0px)'}),
                style({opacity: 1, transform: 'translate(0px, 0px)'}),
            ]),
        ),
    ]),
    [Animation.FadeOut]: animation([
        style({opacity: 1}),
        animate(DURATION, keyframes([style({opacity: 1}), style({opacity: 0})])),
    ]),
    [Animation.FadeSlideIn]: animation([
        style({opacity: 0, transform: 'translateY(10px)'}),
        animate(DURATION, style({opacity: 1, transform: 'translateY(0)'})),
    ]),
    [Animation.FadeSlideOut]: animation([
        animate(DURATION, style({opacity: 0, transform: 'translateY(10px)'})),
    ]),
    [Animation.FadeInGrowStagger]: animation([
        query(
            State.Enter,
            [
                style({opacity: 0, transform: 'scale(0.8)'}),
                stagger(100, [
                    group([
                        animate(`${DURATION + 200}ms`, style({opacity: 1})),
                        animate(
                            `${DURATION - 100}ms ease-in`,
                            style({transform: 'scale(1)'}),
                        ),
                    ]),
                ]),
            ],
            {optional: true},
        ),
    ]),
};

export const fadeIn = trigger(Animation.FadeIn, [
    transition(State.Enter, [useAnimation(fadeAnimations.fadeIn)]),
]);

export const fadeInUp = trigger(Animation.FadeInUp, [
    transition(State.Enter, [useAnimation(fadeAnimations.fadeInUp)]),
]);

export const fadeInLeft = trigger(Animation.FadeInLeft, [
    transition(State.Enter, [useAnimation(fadeAnimations.fadeInLeft)]),
]);

export const fadeOut = trigger(Animation.FadeOut, [
    transition(State.Leave, [useAnimation(fadeAnimations.fadeOut)]),
]);

export const fade = trigger(Animation.Fade, [
    transition(State.Enter, [useAnimation(fadeAnimations.fadeIn)]),
    transition(State.Leave, [useAnimation(fadeAnimations.fadeOut)]),
]);

export const fadeSlide = trigger(Animation.FadeSlide, [
    transition(State.Enter, [useAnimation(fadeAnimations.fadeSlideIn)]),
    transition(State.Leave, [useAnimation(fadeAnimations.fadeSlideOut)]),
]);

export const fadeSlideIn = trigger(Animation.FadeSlideIn, [
    transition(State.Enter, [useAnimation(fadeAnimations.fadeSlideIn)]),
]);

export const fadeInGrowStagger = trigger(Animation.FadeInGrowStagger, [
    transition(State.Enter, [useAnimation(fadeAnimations.fadeInGrowStagger)]),
]);
