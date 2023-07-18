import React, { FunctionComponent } from 'react';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleNotificationsPopover: FunctionComponent<Props> = ({ headline, children }) => {
    return (
        <StyledComponent className="module-notifications-popover">
            <div className="arrow" />

            <div className="header">
                <h3 className="headline">{headline}</h3>
            </div>
            <div className="body">
                {children}
            </div>
        </StyledComponent>
    );
};

export default ModuleNotificationsPopover;
