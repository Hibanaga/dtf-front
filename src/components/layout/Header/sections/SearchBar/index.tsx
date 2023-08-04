import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    children?: ReactNode;
    onOpenLoginForm: () => void;
}

Component.defaultProps = {
};

export default Component;
