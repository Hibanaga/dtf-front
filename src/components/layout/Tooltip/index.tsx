import { ReactNode } from 'react';
import { TooltipProps } from 'react-tooltip';

import Component from './component';


export interface Props {
    id: string;
    children?: ReactNode;
    text: string;
    reactTooltipProps?: TooltipProps;
    className?: string;
}


Component.defaultProps = {
    children: null,
    reactTooltipProps: {},
};

export default Component;
