import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import classnames from 'classnames';
import { Rotate as Hamburger } from 'hamburger-react';

import { LocalStorageKeys } from 'types/localStorage';
import { IconPositionVariants } from 'types/page';

import { getItem, setItem } from 'utils/localStorage';

import Button, { ButtonVariants } from 'components/layout/Button';
import Container from 'components/layout/Container';
import IconButton from 'components/layout/IconButton';
import NotificationsPopover from 'components/modules/NotificationsPopover';
import SearchBar from 'components/modules/SearchBar';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

import { Props } from './index';
import StyledComponent from './styles';

//TODO: Handle notification situation when user login and unlogin, and counter notifications
const LayoutHeader: FunctionComponent<Props> = ({ }) => {
    const ref = useRef(null);

    let hasNotifications = null;
    useEffect(() => {
        hasNotifications = localStorage && JSON.parse(getItem(LocalStorageKeys.UN_LOGIN_NOTIFICATION_STATUS) || '1');
    }, []);


    const [hasUnLoginNotification, setHasUnLoginNotification] = useState<boolean>(false);
    const [isShowNotifications, setIsShowNotifications] = useState(false);

    const handleClickOutside = () => {
        setIsShowNotifications(false);
    };

    useOnClickOutside(ref, handleClickOutside);

    useEffect(() => {
        setHasUnLoginNotification(Boolean(hasNotifications));
    }, []);

    const handleToggleNotificationButton = () => {
        setIsShowNotifications(!isShowNotifications);

        if (hasUnLoginNotification) {
            setHasUnLoginNotification(false);
            setItem(LocalStorageKeys.UN_LOGIN_NOTIFICATION_STATUS, JSON.stringify(0));
        }
    };

    return (
        <StyledComponent className="layout-header">
            <Container className="layout-layout-container">
                <div className="column column-menu">
                    <Hamburger size={25} />
                    <h1 className="logo-text">GFU</h1>
                </div>
                <div className="column column-actions">
                    <SearchBar />
                </div>
                <div className="column column-activity">
                    <div
                        ref={ref}
                        className="inner-notifications"
                    >
                        <div
                            className={classnames([
                                'icon-button-notification',
                                isShowNotifications && 'active',
                            ])}
                            onClick={handleToggleNotificationButton}
                        >
                            <NotificationsNoneRoundedIcon className="icon" />

                            {hasUnLoginNotification && (
                                <div className="inner-counter-notification">
                                    <span className="notification-count">1</span>
                                </div>
                            )}
                        </div>

                        {isShowNotifications && (
                            <NotificationsPopover headline={'Повідомлення'}>
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
                        )}

                    </div>

                    <div className="inner-sign-in">
                        <Button
                            className="sign-in-button"
                            variant={ButtonVariants.Simple}
                            icon={{
                                position:IconPositionVariants.Start,
                                value: <LoginRoundedIcon />,
                            }}
                        >
                            Увійти
                        </Button>
                    </div>
                </div>
            </Container>
        </StyledComponent>
    );
};

export default LayoutHeader;
