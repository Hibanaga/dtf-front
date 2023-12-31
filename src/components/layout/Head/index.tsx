import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    title?: string,
    name?: string,
    description?: string,
    children?: ReactNode
}

Component.defaultProps = {
    name: '- Games For Ukraine',
};

export default Component;
