import React, { FunctionComponent, useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { LocalStorageKeys } from 'types/localStorage';
import { Option } from 'types/options';

import { getItem, setItem } from 'utils/localStorage';

import Button, { ButtonSizes, ButtonStyles, ButtonVariants } from 'components/layout/Button';
import Input from 'components/layout/forms/SimpleInput';
import Popover, { IconPopoverPositions } from 'components/layout/Popover';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleSearchBar: FunctionComponent<Props> = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isFocusedInput, setIsFocusedInput] = useState(false);
    const [recentSearchItems, setRecentSearchItems] = useState<Option<string>[]>([]);

    const showRecentQuestionsPopover = isFocusedInput && !search?.length && !!recentSearchItems?.length;
    const showSearchListPopover = isFocusedInput && !!search?.length;

    useEffect(() => {
        const recentSearchItems = getItem(LocalStorageKeys.RECENT_SEARCH_ITEMS);

        if (recentSearchItems) {
            setRecentSearchItems(JSON.parse(recentSearchItems));
        }
    }, []);

    const handleDetectKeydown = (e) => {
        if (e.keyCode === 13) {
            const newValueRecentQuestions = [...recentSearchItems, { label: search, value: search }];
            setRecentSearchItems(newValueRecentQuestions);
            setItem(LocalStorageKeys.RECENT_SEARCH_ITEMS, JSON.stringify(newValueRecentQuestions));
        }
    };

    return (
        <StyledComponent className="module-search-bar">
            <div className="smart-search-bar">
                <Input
                    placeholder="Пошук"
                    onFocus={() => setIsFocusedInput(true)}
                    onBlur={() => setIsFocusedInput(false)}
                    onKeyDown={handleDetectKeydown}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {showRecentQuestionsPopover && (
                    <Popover
                        headline="Схожі запитання"
                        icon={<SearchRoundedIcon />}
                        elements={recentSearchItems}
                    />
                )}

                {showSearchListPopover && (
                    <Popover
                        hasSeenResultsButton
                        position={IconPopoverPositions.Start}
                        icon={<SearchRoundedIcon />}
                        elements={[]}
                    />
                )}
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
