import React, { FunctionComponent } from 'react';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import classnames from 'classnames';

import { Option } from 'types/options';
import { IconPositionVariants } from 'types/page';

import {  Props } from './index';
import StyledComponent from './styles';

const LayoutPopower: FunctionComponent<Props> = ({ children, className, elements, icon, position, headline, hasSeenResultsButton, onClick }) => {
    const ListElement = (element: Option<string>) => (
        <li
            key={element.value}
            className="list-popover-element"
            onClick={() => onClick && onClick(element)}
        >
            {position === IconPositionVariants.Start && icon}
            <span className="data-value">{element.label}</span>
            {position === IconPositionVariants.End && icon}
        </li>
    );

    return (
        <StyledComponent className={classnames(['layout-popover', className])}>
            {headline && <h3 className="popover-headline">{headline}</h3>}
            {elements && (
                <ul className={classnames([
                    'list-popover',
                    headline && 'spacing',
                ])}
                >
                    {elements.map((element) => (
                        <ListElement
                            key={element.value}
                            label={element.label}
                            value={element.value}
                        />
                    ))}

                    {hasSeenResultsButton && (
                        <li className={classnames(['list-popover-element', 'no-result-element'])}>
                            <KeyboardReturnRoundedIcon />
                            <span className="data-value">Перейти до результатів</span>
                        </li>
                    )}
                </ul>
            )}
            {children}
        </StyledComponent>
    );
};

export default LayoutPopower;
