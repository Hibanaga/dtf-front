import { ReactNode } from 'react';

import { Option } from 'types/options';
import { IconPositionVariants } from 'types/page';

import Component from './component';

export interface Props {
    headline?: string;
    children?: ReactNode;
    className?: string;
    icon?: ReactNode;
    position?: IconPositionVariants;
    elements: Option<string>[];
    onClick?: (newValue: Option<string>) => void;
    hasSeenResultsButton?: boolean;
}

Component.defaultProps = {
    hasSeenResultsButton: false,
};

export default Component;
