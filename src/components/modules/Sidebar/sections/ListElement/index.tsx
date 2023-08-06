import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    children?: ReactNode;
    label: string;
    image: ReactNode;
    url: string;
}

Component.defaultProps = {
};

export default Component;
