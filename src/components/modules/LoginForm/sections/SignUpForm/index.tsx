import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    children?: ReactNode;
    onSetCurrentForm: () => void;
}

Component.defaultProps = {
};

export default Component;
