import { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutIconButton: FunctionComponent<Props> = ({ children, className, variant, size }) => {
    return (
        <StyledComponent
            className={classnames(
                'layout-icon-button',
                `${variant}-variant`,
                `${size}-size`,
                className,
            )}
        >
            {children}
        </StyledComponent>
    );
};

export default LayoutIconButton;
