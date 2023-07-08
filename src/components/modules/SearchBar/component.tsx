import React, { FunctionComponent, useState } from 'react';

import Button, { ButtonSizes, ButtonStyles, ButtonVariants } from 'components/layout/Button';
import Input from 'components/layout/forms/SimpleInput';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleSearchBar: FunctionComponent<Props> = ({ children }) => {
    const [search, setSearch] = useState('');

    return (
        <StyledComponent className="module-search-bar">
            <Input
                placeholder="Пошук"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button
                size={ButtonSizes.Medium}
                variant={ButtonVariants.Primary}
                style={ButtonStyles.Primary}
            >
                Написати
            </Button>
        </StyledComponent>
    );
};

export default ModuleSearchBar;
