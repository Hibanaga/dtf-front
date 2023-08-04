import React, { FunctionComponent, useState } from 'react';

import Image from 'components/layout/Image';
import SignInForm from 'components/modules/LoginForm/sections/SignInForm';
import SignUpForm from 'components/modules/LoginForm/sections/SignUpForm';

import { Props } from './index';
import StyledComponent from './styles';

const LoginForm: FunctionComponent<Props> = ({ children }) => {
    const [isLoginForm, setIsLoginForm] = useState(false);

    const previewImages = [
        { src: '/images/login/cards.png', alt: '', className: 'image-cards' },
        { src: '/images/login/console.png', alt: '', className: 'image-console' },
        { src: '/images/login/ghost.png', alt: '', className: 'image-ghost' },
        { src: '/images/login/mushroom.png', alt: '', className: 'image-mushroom' },
        { src: '/images/login/cubik-rubik.png', alt: '', className: 'image-cubik-rubik' },
    ];

    return (
        <StyledComponent className="module-login-form">
            <div className="column-preview">
                {previewImages.map((imageAttributes) => (
                    <Image
                        key={imageAttributes.className}
                        {...imageAttributes}
                    />
                ))}
            </div>
            <div className="column-form">
                {isLoginForm
                    ? <SignInForm onSetCurrentForm={() => setIsLoginForm(false)} />
                    : <SignUpForm onSetCurrentForm={() => setIsLoginForm(true)} />
                }
            </div>
        </StyledComponent>
    );
};

export default LoginForm;
