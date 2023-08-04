import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    height: 4em;
    background-color: ${variables.theme.default.primary};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    .layout-layout-container {
        margin: 0 1.5em;
        display: grid;
        grid-template-columns: calc(2 / 12 * 100%) calc(5 / 12 * 100%) calc(2 / 12 * 100%);
        justify-content: space-between;

        .column {
            height: 100%;
            display: flex;
            align-items: center;

            &.column-menu {
                .logo-text {
                    margin-top: .1em;
                    font-size: 1.75em;
                    margin-left: .5em;
                    font-weight: 900;
                    font-family: Sathu;
                    letter-spacing: .1em;
                }
            }

            &.column-activity {
                justify-content: flex-end;

                .inner-notifications {
                    position: relative;

                    .icon-button-notification {
                        cursor: pointer;
                        padding: .5em;
                        position: relative;
                        margin-top: .175em;

                        .inner-counter-notification {
                            position: absolute;
                            background-color: #ff3434;
                            color: #FFF;
                            border-radius: 50%;
                            width: 1.1em;
                            height: 1.1em;
                            top: 2%;
                            right: 10%;

                            .notification-count {
                                display: block;
                                position: absolute;
                                font-size: .7em;
                                margin-top: .1em;
                                margin-left: .01em;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }

                        .icon {
                            font-size: 1.8em;
                            transition: 150ms;

                            &:hover {
                                color: ${variables.theme.default.hoverIcon};
                            }
                        }

                        &.active {
                            .icon {
                                transform: rotate(30deg);
                                color: ${variables.theme.default.hoverIcon};
                            }
                        }
                    }

                    .module-notifications-popover {
                        .body {
                            .template-notification-un-login-element {
                                display: flex;

                                .inner-icon {
                                    min-width: 2.6em;
                                    height: 2.6em;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    background-color: #eaf8ef;
                                    border-radius: .25em;
                                    border: .01em solid rgba(116, 116, 116, .25);

                                    .icon {
                                        color: #07a23b;
                                    }
                                }

                                .inner-content {
                                    margin-left: .5em;

                                    .data-text {
                                        font-size: .8em;
                                    }

                                    .inner-login-actions {
                                        margin-top: 1em;
                                    }
                                }
                            }
                        }
                    }
                }

                .inner-sign-in {
                    display: flex;
                    align-items: center;
                    padding: .5em;
                    cursor: pointer;

                    .sign-in-button {
                        .button {
                            min-width: 4em;

                            .button-icon {
                                margin-top: .175em;

                                svg {
                                    transition: 150ms;
                                }
                            }

                            .button-content {
                                transition: 150ms;
                                display: block;
                                font-size: 1.1em;
                                margin-left: .2em;
                            }
                        }

                        &:hover {
                            .button {
                                .button-icon {
                                    svg {
                                        color: ${variables.theme.default.hoverIcon};
                                    }
                                }

                                .button-content {
                                    color: ${variables.theme.default.hoverIcon};
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .layout-modal {
        .modal-container {
            max-width: 40em;
            max-height: 30em;
            height: 100%;
            padding: 0;
            
            .modal-body {
                height: 100%;
            }
        }
    }
`;
