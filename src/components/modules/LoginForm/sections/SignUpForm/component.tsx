import React, { FunctionComponent, useState } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import classnames from 'classnames';
import { useFormik } from 'formik';

import Button, { ButtonStyles } from 'components/layout/Button';
import Input, { InputVariants } from 'components/layout/forms/SimpleInput';

import { Props } from './index';
import StyledComponent from './styles';

//TODO: handle API request
const ModuleLoginFormSectionSignUpForm: FunctionComponent<Props> = ({ children, onSetCurrentForm }) => {
    const [isAccessLoginForm, setIsAccessLoginForm] = useState(false);

    //TODO: implement validation to register
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
        },
        onSubmit: (values => console.log('submit action')),
    });

    return (
        <StyledComponent className={classnames(['module-login-form-section-form', 'sign-up-form'])}>
            {isAccessLoginForm && (
                <div
                    className="prev-button"
                    onClick={() => setIsAccessLoginForm(false)}
                >
                    <ArrowBackIosRoundedIcon className="icon" />
                    <span className="data-value">Назад</span>
                </div>
            )}

            <div className="container">
                {!isAccessLoginForm && (
                    <div className="row">
                        <h2 className="headline">Реєстрація</h2>

                        <div className="inner-actions">
                            <Button
                                className="layout-button-mail"
                                onClick={() => setIsAccessLoginForm(true)}
                            >
                            Пошта
                            </Button>
                        </div>
                    </div>
                )}

                {isAccessLoginForm && (
                    <form
                        className="form"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="headline">Реєстрація</h2>

                        <Input
                            variant={InputVariants.Primary}
                            name="fullName"
                            placeholder="Повне ім'я"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                        <Input
                            variant={InputVariants.Primary}
                            type="email"
                            name="email"
                            placeholder="Електронна адреса"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <Input
                            variant={InputVariants.Primary}
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                        />

                        <Button
                            style={ButtonStyles.Secondary}
                            className="submit-button"
                        >
                                Зареєструватися
                        </Button>
                    </form>
                )}

                <div className="inner-action">
                    <span className="data-label">
                        Є акаунт?
                        {' '}
                        <span
                            className="button-link"
                            onClick={onSetCurrentForm}
                        >
                            Ввійти
                        </span>
                    </span>
                </div>
            </div>
        </StyledComponent>
    );
};

export default ModuleLoginFormSectionSignUpForm;
