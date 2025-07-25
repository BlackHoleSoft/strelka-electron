import {Splash} from 'components/atoms/splash/component';
import {CenteredTemplate} from 'components/templates/centeredTemplate/component';
import {ScreenTemplate} from 'components/templates/screenTemplate/components';
import React from 'react';

export const SplashScreen = () => {
    return (
        <ScreenTemplate>
            <CenteredTemplate>
                <Splash />
            </CenteredTemplate>
        </ScreenTemplate>
    );
};
