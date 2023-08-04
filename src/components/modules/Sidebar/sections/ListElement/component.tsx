import React, { FunctionComponent } from 'react';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleSidebarSectionListElement: FunctionComponent<Props> = ({ children, image, label, url }) => {
    return (
        <StyledComponent
            href={url}
            className="module-side-bar-section-list-element"
        >
            {image && (
                <div className="inner-image">
                    {image}
                </div>
            )}
            <div className="data-label">
                {label}
            </div>
        </StyledComponent>
    );
};

export default ModuleSidebarSectionListElement;
