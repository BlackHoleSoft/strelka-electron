import React from 'react';
import css from './appWidget.module.scss';

type AppWidgetProps = {
    appUrl: string;
};

export const AppWidget = ({appUrl}: AppWidgetProps) => {
    return (
        <div className={css.app}>
            <iframe src={appUrl} />
        </div>
    );
};
