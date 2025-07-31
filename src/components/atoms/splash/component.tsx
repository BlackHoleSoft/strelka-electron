import {useTimer} from 'hooks/system/useTimer';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import splash from 'assets/splash.jpg';
import strelka from 'assets/strelka.svg';

const Elem = styled.div`
    position: relative;
    width: 600px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div<{blur: number}>`
    background-image: url('${splash}');
    background-size: cover;
    background-position: center;
    width: 120vw;
    height: 120vh;
    top: -10vh;
    left: -10vw;
    position: fixed;
    filter: blur(${p => p.blur}px);
`;

const Text = styled.div`
    background-image: linear-gradient(90deg, #d2fffb58, #e2efff36);

    width: 400px;
    height: 150px;

    transform-origin: center;

    mask-image: url('${strelka}');
    mask-position: center;
    mask-size: contain;

    backdrop-filter: blur(8px);
`;

const TextNormal = styled.div`
    background: linear-gradient(90deg, #d2fffb, #e2efff);
    background-size: cover;
    background-clip: text;
    color: transparent;
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Oxanium';
`;

const Sparkle = styled.div<{
    colors: [string, string];
    position: [number, number];
    dist: number;
    blur: number;
    size: number;
}>`
    position: absolute;
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    border-radius: 50%;
    top: ${p => p.position[0]}px;
    left: ${p => p.position[1]}px;
    background-color: ${p => p.colors[0]};
    filter: blur(${p => p.blur}px);

    &::before {
        content: '';
        position: absolute;
        width: ${p => p.size}px;
        height: ${p => p.size}px;
        border-radius: 50%;
        top: ${p => p.dist}px;
        left: ${p => p.dist}px;
        background-color: ${p => p.colors[1]};
        filter: blur(${p => p.blur}px);
    }
`;

export const Splash = () => {
    const {value: progress} = useTimer({
        duration: 3000,
    });

    return (
        <>
            <Background blur={progress * 15} />
            <Elem>
                <Sparkle
                    colors={['#fa4b7f6e', '#34f8963e']}
                    size={10}
                    dist={Math.abs(0.5 - progress) * 3}
                    position={[0, 20]}
                    blur={Math.abs(0.5 - progress) * 5}
                />
                <Sparkle
                    colors={['#ffa6226d', '#34f8963e']}
                    size={23}
                    dist={Math.abs(0.7 - progress) * 3}
                    position={[200, 216]}
                    blur={Math.abs(0.7 - progress) * 5}
                />
                <Sparkle
                    colors={['#ff781f6d', '#34e1f83d']}
                    size={34}
                    dist={Math.abs(0.3 - progress) * 3}
                    position={[320, 130]}
                    blur={Math.abs(0.3 - progress) * 5}
                />
                <Sparkle
                    colors={['#fa4b7f6e', '#5f34f83d']}
                    size={12}
                    dist={Math.abs(0.2 - progress) * 3}
                    position={[60, 320]}
                    blur={Math.abs(0.2 - progress) * 5}
                />
                <Sparkle
                    colors={['#884bfa6d', '#ffa51f2f']}
                    size={26}
                    dist={Math.abs(0.6 - progress) * 3}
                    position={[290, 550]}
                    blur={Math.abs(0.6 - progress) * 5}
                />
                <TextNormal
                    style={{
                        fontSize: `${3 + progress * 1}rem`,
                        opacity: progress * 0.5,
                        filter: `blur(${(1 - progress) * 10}px)`,
                    }}
                >
                    STRELKA
                </TextNormal>
            </Elem>
        </>
    );
};
