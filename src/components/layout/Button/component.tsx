import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { IconPositionVariants } from 'types/page';

import { ButtonElements, IconProps, Props } from './index';
import StyledComponent from './styles';

const LayoutButton: FunctionComponent<Props> = ({
    children,
    href,
    onClick,
    type,
    element,
    className,
    icon,
    disabled,
    size,
    style,
    styles,
    variant,
    layout,
    loading,
    confirm,
    focus,
    buttonProps,
}) => {
    const router = useRouter();

    const defaultConfirmProps = {
        message: 'Potwierdź swój wybór',
    };

    const onCheckClick = () => {
        if (disabled) {
            return;
        }

        if (confirm?.enabled) {
            const confirmConfig = { ...defaultConfirmProps, ...confirm };

            if (window.confirm(confirmConfig?.message)) {
                return onClick && onClick();
            } else {
                return null;
            }
        }

        return onClick && onClick();
    };

    const getContent = () => {
        return  <span className="button-content">{children}</span>;
    };

    const getIcon = (icon: IconProps) => {
        if (!icon) return null;

        return <span className={classnames(['button-icon', icon.position])}>{icon.value}</span>;
    };

    const getElement = () => {
        const button = (
            <button
                type={type}
                onClick={onCheckClick}
                disabled={disabled}
                className={classnames([
                    'button',
                    focus && 'focused-button',
                ])}
                {...buttonProps}
            >
                {icon?.position === IconPositionVariants.Start && getIcon(icon)}
                {getContent()}
                {icon?.position === IconPositionVariants.End && getIcon(icon)}
            </button>
        );

        switch (element) {
            case ButtonElements.Anchor:
                if (href?.includes('#')) {
                    return (
                        <a
                            onClick={() => {
                                router.push(href || '');
                            }}
                            {...buttonProps}
                        >
                            {button}
                        </a>
                    );
                }

                return (
                    <a
                        href={href}
                        {...buttonProps}
                    >
                        {button}
                    </a>
                );
            default:
                return button;
        }
    };

    return (
        <StyledComponent
            className={classnames(
                'layout-button',
                className,
                `element-${element}`,
                `size-${size}`,
                `style-${style}`,
                `variant-${variant}`,
                `layout-${layout}`,
                {
                    disabled,
                },
            )}
            style={styles}
        >
            {getElement()}
        </StyledComponent>
    );
};

export default LayoutButton;
