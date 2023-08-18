import React, {PropsWithChildren, ReactNode} from 'react';
import css from './desktopGrid.module.scss';

type DesktopGridProps = {
    panel: ReactNode;
} & PropsWithChildren;

export const DesktopGrid = ({children, panel}: DesktopGridProps) => {
    return (
        <div className={css.grid}>
            {children}
            {panel}
        </div>
    );
};
