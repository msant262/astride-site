import { useEffect } from 'react';
import type { RefObject } from 'react';
import anime from 'animejs';

export interface UseEntranceAnimationProps {
    elementRef: RefObject<HTMLElement | null>;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
    easing?: string;
    distance?: number;
}

export const useEntranceAnimation = ({
    elementRef,
    delay = 0,
    direction = 'up',
    duration = 1000,
    easing = 'easeOutExpo',
    distance = 50,
}: UseEntranceAnimationProps) => {
    useEffect(() => {
        if (!elementRef.current) return;

        const translateProps = {
            up: { translateY: [distance, 0] },
            down: { translateY: [-distance, 0] },
            left: { translateX: [distance, 0] },
            right: { translateX: [-distance, 0] },
        };

        anime({
            targets: elementRef.current,
            opacity: [0, 1],
            ...translateProps[direction],
            duration,
            delay,
            easing,
        });
    }, [elementRef, delay, direction, duration, easing, distance]);
};
