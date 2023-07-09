import React, { FunctionComponent, useState } from 'react';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import classnames from 'classnames';
import { Rotate as Hamburger } from 'hamburger-react';

import Container from 'components/layout/Container';
import IconButton from 'components/layout/IconButton';
import NotificationsPopover from 'components/modules/NotificationsPopover';
import SearchBar from 'components/modules/SearchBar';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutHeader: FunctionComponent<Props> = ({ }) => {
    const [isShowNotifications, setIsShowNotifications] = useState(false);

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
                    <div className="inner-notifications">
                        <div
                            className={classnames([
                                'icon-button-notification',
                                isShowNotifications && 'active',
                            ])}
                            onClick={() => setIsShowNotifications(!isShowNotifications)}
                        >
                            <NotificationsNoneRoundedIcon className="icon" />
                        </div>

                        <NotificationsPopover headline={'повідомлення'}>
                            <div className="template-notification-un-login-element">
                                <div className="inner-icon">
                                    <PriorityHighRoundedIcon className="icon" />
                                </div>

                                <div className="inner-content">
                                    <span className="data-text">
                                        Авторизуйтесь або зареєструйтесь, щоб оцінювати матеріали, створювати записи та писати коментарі.
                                    </span>
                                    <div className="inner-login-actions">
                                        <IconButton>
                                            <MailOutlineRoundedIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </NotificationsPopover>
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
