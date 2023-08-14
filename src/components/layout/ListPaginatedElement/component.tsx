import React, { FunctionComponent } from 'react';

import { Props } from './index';
import StyledComponent from './styles';

const ListPaginatedElement: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="layout-paginated-element">
            <div className="header-inner">
                <div className="data-category">
                    <span className="data-value"></span>
                </div>
                <div className="data-publication-time">
                    <span className="data-value"></span>
                </div>
            </div>
            <div className="body-innter"></div>
            <div className="footer-inner"></div>
        </StyledComponent>
    );
};

export default ListPaginatedElement;
