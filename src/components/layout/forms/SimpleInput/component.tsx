import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import SimpleError from 'components/layout/forms/SimpleError';
import SimpleLabel from 'components/layout/forms/SimpleLabel';

import { Props } from './index';
import StyledComponent from './styles';

const SimpleInput: FunctionComponent<Props> = ({ id, label, placeholder, value, onChange, type, name, wrapperCss, error, disabled, variant, ...restEventHandlers }) => {
    return (
        <StyledComponent className={classNames([
            'layout-forms-simple-input',
            `${variant}-input`,
            wrapperCss,
        ])}
        >
            {label && (
                <SimpleLabel
                    name="email"
                    label={label}
                />
            )}
            <div className="">
                <input
                    type={type}
                    min="0"
                    name={name}
                    id={id}
                    className={classNames(
                        'input',
                        error ? 'error-input' : '',
                    )}
                    placeholder={placeholder}
                    onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onKeyDown={onKeyDown}
                    value={value}
                    disabled={disabled}
                    {...restEventHandlers}
                />
                {error && <SimpleError error={error} />}
            </div>
        </StyledComponent>
    );
};

export default SimpleInput;
