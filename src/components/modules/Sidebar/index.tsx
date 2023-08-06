import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    isOpen: boolean,
    children?: ReactNode;
}

Component.defaultProps = {
};

export default Component;
