import React from 'react';
import {FC, PropsWithChildren} from 'react';
import styled from 'styled-components';

const Elem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ScreenTemplate: FC<PropsWithChildren> = ({children}) => <Elem>{children}</Elem>;
