import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { LocalStorageKeys } from 'types/localStorage';
import { Option } from 'types/options';
import { IconPositionVariants } from 'types/page';

import { dedupeObjects } from 'utils/array';
import { getItem, setItem } from 'utils/localStorage';

import Button from 'components/layout/Button';
import Input from 'components/layout/forms/SimpleInput';
import Popover from 'components/layout/Popover';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

import { Props } from './index';
import StyledComponent from './styles';

//TODO: after integrate API for search on system add redirect to click on element popover
//TODO: handle situation when click to recent element, popover must save this element to searchbar, but now this doesn't work properly
const ModuleSearchBar: FunctionComponent<Props> = ({ children }) => {
    const ref = useRef(null);

    const [search, setSearch] = useState('');
    const [isFocusedInput, setIsFocusedInput] = useState(false);
    const [recentSearchItems, setRecentSearchItems] = useState<Option<string>[]>([]);

    const handleClickOutside = () => {
        setIsFocusedInput(false);
    };

    useOnClickOutside(ref, handleClickOutside);

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
            const newValueRecentQuestions = dedupeObjects([...recentSearchItems, { label: search, value: search }], 'value');
            setRecentSearchItems(newValueRecentQuestions);
            setItem(LocalStorageKeys.RECENT_SEARCH_ITEMS, JSON.stringify(newValueRecentQuestions));
        }
    };

    return (
        <StyledComponent className="module-search-bar">
            <div
                ref={ref}
                className="smart-search-bar"
            >
                <Input
                    placeholder="Пошук"
                    onFocus={() => setIsFocusedInput(true)}
                    onKeyDown={handleDetectKeydown}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {showRecentQuestionsPopover && (
                    <Popover
                        headline="Схожі запитання"
                        icon={<SearchRoundedIcon />}
                        position={IconPositionVariants.Start}
                        elements={recentSearchItems}
                        onClick={(newValue: Option<string>) => setSearch(newValue.value)}
                    />
                )}

                {showSearchListPopover && (
                    <Popover
                        hasSeenResultsButton
                        elements={[]}
                        onClick={(newValue: Option<string>) => null}
                    />
                )}
            </div>
            <Button
                icon={{
                    position: IconPositionVariants.Start,
                    value: <EditOutlinedIcon />,
                }}
            >
                Написати
            </Button>
        </StyledComponent>
    );
};

export default ModuleSearchBar;
