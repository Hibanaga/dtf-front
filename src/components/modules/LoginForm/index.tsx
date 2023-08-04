import { ReactNode } from 'react';

import Component from './component';

export enum Steps {
    Register = 'register',
    SignIn = 'signIn',
    RecoveryPassword = 'recoveryPassword',
}

export interface Props {
    children?: ReactNode;
}

Component.defaultProps = {
};

export default Component;
