import React, { FunctionComponent } from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import classnames from 'classnames';

import Routes from 'types/routes';

import ListElement from 'components/modules/Sidebar/sections/ListElement';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleSidebar: FunctionComponent<Props> = ({ children }) => {
    const treeList = [
        { label: 'Популярне', image: <FeedOutlinedIcon className="icon" />, url: Routes.Popular },
        { label: 'Свіже', image: <AccessTimeOutlinedIcon className="icon" />, url: Routes.New },
        { label: 'Рейтинг', image: <TrendingUpOutlinedIcon className="icon" />, url: Routes.Ranking },
        { label: 'Підписки', image: <FormatListNumberedOutlinedIcon className="icon" />, url: Routes.Subscriptions },
    ];

    return (
        <StyledComponent className="module-side-bar">
            <div className={classnames(['list', 'activities'])}>
                {treeList.map((element) => (
                    <ListElement
                        key={element.url}
                        {...element}
                    />
                ))}
            </div>
        </StyledComponent>
    );
};

export default ModuleSidebar;
