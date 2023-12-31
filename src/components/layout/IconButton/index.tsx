import { MouseEventHandler, ReactNode } from 'react';

import Component from './component';

export enum IconButtonVariants {
    Primary = 'primary',
    Secondary = 'secondary',
}

export enum IconButtonSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export interface Props {
    children: ReactNode;
    variant?: IconButtonVariants,
    size?: IconButtonSizes;
    onClick?: MouseEventHandler<HTMLDivElement>;
    className?: string;
}

Component.defaultProps = {
    variant: IconButtonVariants.Primary,
    size: IconButtonSizes.Medium,
};

export default Component;
