import {useEffect, useRef, useState} from 'react';
import {easeInOutCubic, easeInOutSine, linear} from 'utils/easings';

const easings = {
    linear,
    easeInOutCubic,
    easeInOutSine,
};

export const useTimer = (options: {duration?: number; easing?: keyof typeof easings}) => {
    const {duration = 300, easing = 'easeInOutCubic'} = options;

    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);

    const startTimeRef = useRef<number>(0);

    const run = () => {
        requestAnimationFrame(() => {
            setTime(Date.now());

            if (running && time - startTimeRef.current < duration) {
                run();
            } else {
                setRunning(false);
            }
        });
    };

    useEffect(() => {
        setRunning(true);

        return () => {
            setRunning(false);
        };
    }, [duration]);

    useEffect(() => {
        if (running) {
            startTimeRef.current = Date.now();
            run();
        }
    }, [running]);

    const value = easings[easing](Math.min(1, (time - startTimeRef.current) / duration));

    return {
        value,
    };
};
