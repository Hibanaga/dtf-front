import { ReactNode } from 'react';

import { IconPositionVariants } from 'types/page';

import Component from './component';

export enum ButtonTypes {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

export enum ButtonElements {
    Button = 'button',
    Anchor = 'anchor',
}

export enum ButtonStyles {
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
}

export enum ButtonVariants {
    Primary = 'primary',
    Contained = 'contained',
    Outline = 'outline',
    Link = 'link',
    Simple = 'simple',
}

export enum ButtonLayouts {
    Default = 'default',
    Wide = 'wide',
    Block = 'block',
}

export enum ButtonSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}


export interface ListProps extends Props {
    key: string;
}

export interface IconProps {
    position: IconPositionVariants;
    value: ReactNode;
}

export interface Props {
    children: any;
    type?: ButtonTypes;
    element?: ButtonElements;
    className?: string;
    onClick?: Function;
    href?: string;
    icon?: IconProps;
    disabled?: boolean;
    size?: ButtonSizes;
    style?: ButtonStyles;
    styles?: object;
    variant?: ButtonVariants;
    layout?: ButtonLayouts;
    loading?: boolean;
    confirm?: {
        enabled: boolean;
        message?: string;
    };
    focus?: boolean;
    copy?: {
        enabled: boolean;
        content: string;
    }
    buttonProps?: any;
}

Component.defaultProps = {
    element: ButtonElements.Button,
    style: ButtonStyles.Primary,
    styles: {},
    variant: ButtonVariants.Primary,
    size: ButtonSizes.Medium,
    layout: ButtonLayouts.Default,
    className: '',
    type: ButtonTypes.Button,
    disabled: false,
    loading: false,
    buttonProps: {},
};

export default Component;
