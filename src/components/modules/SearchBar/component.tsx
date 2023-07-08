import React, { FunctionComponent, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import Button, { ButtonSizes, ButtonStyles, ButtonVariants } from 'components/layout/Button';
import Input from 'components/layout/forms/SimpleInput';
import Popover from 'components/layout/Popover';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleSearchBar: FunctionComponent<Props> = ({ children }) => {
    const [search, setSearch] = useState('');
    const [recentSearchItems, setRecentSearchItems] = useState([]);

    return (
        <StyledComponent className="module-search-bar">
            <div className="smart-search-bar">
                <Input
                    placeholder="Пошук"
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/*<ul className="list-hints">*/}
                {/*    {recentSearchItems.map((element) => (*/}
                {/*        <li*/}
                {/*            key={element}*/}
                {/*            className="hint-element"*/}
                {/*        >*/}
                {/*            <span className="data-text">{element}</span>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}

                {/*<Popover*/}
                {/*    headline="popover headline"*/}
                {/*    icon={<SearchRoundedIcon />}*/}
                {/*    elements={[*/}
                {/*        {*/}
                {/*            label: '12',*/}
                {/*            value: '12',*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*/>*/}


                <Popover
                    hasSeenResultsButton
                    icon={<SearchRoundedIcon />}
                    elements={[
                        {
                            label: '12',
                            value: '12',
                        },
                    ]}
                />
                {/*<ul className="list-results">*/}
                {/*    <li className="list-result-element">*/}
                {/*        <span className="data-text"></span>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
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
