import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';

import Button from 'components/layout/Button';

import { Props } from './index';
import StyledComponent from './styles';

//TODO: handle API request
const ModuleLoginFormSectionSignUpForm: FunctionComponent<Props> = ({ children }) => {
    const { values, handleSubmit } = useFormik({
        initialValues: {},
        validationSchema: {}, //TODO: implement validation to register
        onSubmit: (values => console.log('submit action')),
    });

    return (
        <StyledComponent className="module-login-form-section-sign-up-form">
            <div className="container-sign-up">
                <h2 className="headline">Реєстрація</h2>

                <div className="inner-actions">
                    <Button className="layout-button-mail">
                        Пошта
                    </Button>
                </div>

                <div className="inner-sign-in">
                    <span className="data-sign-in">
                        Є акаунт?
                        {' '}
                        <span className="button-sign-in">Ввійти</span>
                    </span>
                </div>
            </div>
        </StyledComponent>
    );
};

export default ModuleLoginFormSectionSignUpForm;
