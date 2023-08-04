import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    height: 100%;
    
    display: flex;
    
    .column-preview {
        position: relative;
        width: 35%;
        background-color: ${variables.theme.default.primary};
        height: 100%;
        overflow: hidden;
        user-select: none;
        
        .layout-image {
            &.image-cards {
                width: 7em;
                height: 7em;
                
                top: -2%;
                left: 10%;
                transform: rotate(-25deg);
            }
            &.image-console {
                width: 5em;
                height: 5em;
                
                top: 10%;
                left: 65%;
                transform: rotate(15deg);
            }
            &.image-ghost {
                width: 8em;
                height: 8em;

                top: 25%;
                left: 12.5%;
            }
            &.image-mushroom {
                width: 6em;
                height: 6em;
                
                top: 55%;
                left: 50%;
                transform: rotate(15deg);
            }
            &.image-cubik-rubik {
                width: 6em;
                height: 6em;
                
                top: 75%;
                left: 10%;
                transform: rotate(-15deg);
            }
        }
    }
    
    .column-form {
        width: 65%;
        height: 100%;
    }
    
    .module-login-form-section-form {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;

        .prev-button {
            position: absolute;
            top: 3.75%;
            left: 4%;

            display: flex;
            align-items: center;
            cursor: pointer;

            .icon {
                width: .8em;
                height: .8em;
                color: #222;
                opacity: .6;
                transition: 150ms ease-in-out;
            }

            .data-value {
                display: block;
                padding-left: .25em;
                padding-top: .25em;
                color: #222;
                opacity: .6;
                font-size: .9em;
                transition: 150ms ease-in-out;
            }

            &:hover {
                .icon {
                    opacity: 1;
                    color: ${variables.theme.default.hoverIcon};
                    transform: translateX(-.1em);
                }

                .data-value {
                    opacity: 1;
                    color: ${variables.theme.default.hoverIcon};
                }
            }
        }

        .headline {
            text-align: left;
            width: 100%;
            font-size: 1.25em;
            font-weight: 600;
        }

        .container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            max-width: 18em;
            width: 100%;

            .row {
                width: 100%;

                .inner-actions {
                    width: 100%;
                    margin-top: 2em;

                    .layout-button {
                        &.layout-button-mail {
                            width: 100%;

                            .button {
                                width: 100%;
                                min-width: 100%;
                            }
                        }
                    }
                }
            }

            .form {
                height: 100%;
                width: 100%;
                max-width: 18em;

                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                > * {
                    height: 2.7em;
                    margin-bottom: 1em;
                }

                .headline {
                    height: initial;
                }

                .layout-button {
                    margin-bottom: 0;

                    &.submit-button {
                        .button {
                            height: 100%;
                        }
                    }
                }

                .layout-forms-simple-input {
                    .inner-input {
                        height: 100%;

                        .input {
                            height: 100%;
                            padding: 0 1em 0 .85em;
                        }
                    }
                }
            }

            .inner-action {
                width: 100%;
                margin-top: 1em;

                display: flex;
                justify-content: flex-start;

                .data-label {
                    display: block;
                    text-align: left;
                    color: #595959;
                    font-size: .8em;

                    .button-link {
                        cursor: pointer;
                        color: #3766a9;

                        &:hover {
                            color: #cd192e;
                        }
                    }
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
