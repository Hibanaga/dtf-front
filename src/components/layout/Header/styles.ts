import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    height: 4em;
    background-color: #d9f5ff;
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
                        margin: .3em 0 0 .5em;
                        padding: .5em;
                        position: relative;

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
                                color: #1693e5;
                            }
                        }

                        &.active {
                            .icon {
                                transform: rotate(30deg);
                                color: #1693e5;
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

                    .icon {
                        font-size: 1.5em;
                        transition: 150ms;
                    }

                    .content {
                        transition: 150ms;
                        margin-left: .5em;
                        display: block;
                        margin-top: .2em;
                    }

                    &:hover {
                        .icon {
                            color: #1693e5;
                        }

                        .content {
                            color: #1693e5;
                        }
                    }
                }
            }
        }
    }
`;
