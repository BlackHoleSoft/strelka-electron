import React from 'react';
import css from './desktop.module.scss';
import {DesktopGrid} from 'app/ui/entities/desktopGrid';
import {AppWidget} from 'app/ui/widgets/appWidget';

export const Desktop = () => {
    return (
        <DesktopGrid panel={<div>panel</div>}>
            <p>Apps:</p>
            <AppWidget appUrl='https://feature-sliced.design/' />
        </DesktopGrid>
    );
};
