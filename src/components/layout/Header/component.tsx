import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


const LayoutHeader: FunctionComponent<Props> = ({  }) => {
    const router = useRouter();

    return (
        <StyledComponent className={classNames(['layout-header'])}>
            <Container className="layout-layout-container">

            </Container>
        </StyledComponent>
    );
};

export default LayoutHeader;
