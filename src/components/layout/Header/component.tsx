import React, { FunctionComponent } from 'react';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { Rotate as Hamburger } from 'hamburger-react';

import Container from 'components/layout/Container';
import SearchBar from 'components/modules/SearchBar';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutHeader: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className={'layout-header'}>
            <Container className="layout-layout-container">
                <div className="column column-menu">
                    <Hamburger size={25} />
                    <h1 className="logo-text">GFU</h1>
                </div>
                <div className="column column-actions">
                    <SearchBar />
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
