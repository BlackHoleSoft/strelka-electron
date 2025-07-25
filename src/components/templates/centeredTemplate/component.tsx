import React, {FC, PropsWithChildren} from 'react';
import styled from 'styled-components';

const Elem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CenteredTemplate: FC<PropsWithChildren> = ({children}) => <Elem>{children}</Elem>;
