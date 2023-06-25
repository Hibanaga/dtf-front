import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import classNames from 'classnames';
import { Rotate as Hamburger } from 'hamburger-react';

import Button from 'components/layout/Button';
import Container from 'components/layout/Container';
import SimpleInput from 'components/layout/forms/SimpleInput';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutHeader: FunctionComponent<Props> = ({ }) => {
    const [search, setSearch] = useState('');

    return (
        <StyledComponent className={'layout-header'}>
            <Container className="layout-layout-container">
                <div className="column column-menu">
                    <Hamburger />
                    <h1 className="logo-text">GFU</h1>
                </div>
                <div className="column column-actions">
                    <SimpleInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button>
                        button
                    </Button>
                </div>
                <div className="column column-activity">
                    <div className="icon-button-notification">
                        <NotificationsNoneRoundedIcon className="icon" />
                    </div>

                    <div className="inner-sign-in">
                        <LoginRoundedIcon className="icon" />
                        <span className="content">Увійти</span>
                    </div>
                </div>
            </Container>
        </StyledComponent>
    );
};

export default LayoutHeader;
