import React, { FunctionComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutTooltip: FunctionComponent<Props> = ({ id, text, reactTooltipProps, children, className }) => {
    return (
        <StyledComponent
            className={classNames(['layout-tooltip', 'cursor-pointer', className || ''])}
            data-tip
            data-for={id}
        >
            <div className="tooltip-children">
                {children}
            </div>
            <ReactTooltip
                id={id}
                {...reactTooltipProps}
            >
                <div className="tooltip-body">
                    {text}
                </div>
            </ReactTooltip>
        </StyledComponent>
    );
};

export default LayoutTooltip;
