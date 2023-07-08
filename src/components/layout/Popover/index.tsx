import { ReactNode } from 'react';

import { Option } from 'types/options';

import Component from './component';

export enum IconPopoverPositions {
    Start = 'start',
    End = 'end',
}

export interface Props {
    headline?: string;
    children?: ReactNode;
    className?: string;
    icon?: ReactNode;
    position?: IconPopoverPositions;
    elements: Option<string>[];
    hasSeenResultsButton?: boolean;
}

Component.defaultProps = {
    hasSeenResultsButton: false,
};

export default Component;
