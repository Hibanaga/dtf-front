import React, { FunctionComponent, useState } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import classnames from 'classnames';
import { useFormik } from 'formik';

import Button, { ButtonStyles } from 'components/layout/Button';
import Input, { InputVariants } from 'components/layout/forms/SimpleInput';
import { Steps } from 'components/modules/LoginForm';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleLoginFormSectionSignInForm: FunctionComponent<Props> = ({ children, onSetCurrentForm }) => {
    const [currentStep, setCurrentStep] = useState(Steps.SignIn);
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
        <StyledComponent className={classnames(['module-login-form-section-form', 'sign-in-form'])}>
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
                        <h2 className="headline">Вхід в акаунт</h2>

                        <div className="inner-actions">
                            <Button
                                className="layout-button-mail"
                                onClick={() => {
                                    setCurrentStep(Steps.SignIn);
                                    setIsAccessLoginForm(true);
                                }}
                            >
                                Пошта
                            </Button>
                        </div>
                    </div>
                )}

                {isAccessLoginForm && (
                    <form
                        className="form"
                        action={handleSubmit}
                    >

                        <h2 className="headline">
                            {currentStep === Steps.SignIn ? 'Вхід в акаунт' : 'Відновлення пароля'}
                        </h2>

                        {currentStep === Steps.SignIn && (
                            <>
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
                            </>
                        )}

                        {currentStep === Steps.RecoveryPassword && (
                            <>
                                <Input
                                    variant={InputVariants.Primary}
                                    type="email"
                                    name="email"
                                    placeholder="Електронна адреса"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </>
                        )}


                        <Button
                            style={ButtonStyles.Secondary}
                            className="submit-button"
                        >
                            {currentStep === Steps.SignIn ? 'Ввійти' : 'Надіслати'}
                        </Button>
                    </form>
                )}
                {currentStep !== Steps.RecoveryPassword && (
                    <div
                        className="inner-action"
                        onClick={() => {
                            setIsAccessLoginForm(true);
                            setCurrentStep(Steps.RecoveryPassword);
                        }}
                    >
                        <span className="data-label">
                            <span className="button-link">Забули пароль?</span>
                        </span>
                    </div>
                )}
                <div className="inner-action">
                    <span className="data-label">
                        Немає аккаунта?
                        {' '}
                        <span
                            className="button-link"
                            onClick={onSetCurrentForm}
                        >
                            Зареєструватись
                        </span>
                    </span>
                </div>
            </div>
        </StyledComponent>
    );
};

export default ModuleLoginFormSectionSignInForm;
