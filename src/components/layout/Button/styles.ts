import styled from '@emotion/styled';

export default styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .button {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-size: 1em;
        text-decoration: none;
        cursor: pointer;

        border-radius: .4em;
        border: none;

        &.focused-button {
            background-color: #4d4d4d;
        }

        .layout-spinner {
            position: relative;
            top: 0;

            .spinner {
                height: 1.2em;
            }
        }

        &.disabled {
            background-color: #909090 !important;
        }
    }

    a {
        text-decoration: none;
    }

    span {
        font-weight: 400;
        font-size: .925em;
        text-decoration: none;
        cursor: pointer;
    }

    .button-icon {
        &.start {
           margin-right: .25em; 
        }
        
        &.end {
            margin-left: .25em;
        }
    }

    /* Layouts */

    &.layout-default {
        .button {
            padding: .7em 1.5em;
        }
    }

    &.layout-wide {
        .button {
            padding: .7em 3.5em;
        }
    }

    &.layout-block {
        width: 100%;

        .button {
            padding: .7em 1em;
            width: 100%;
        }
    }


    /* Sizes */

    &.size-small {
        .button {
            font-size: .75em;
            min-width: 6em;
        }
    }

    &.size-medium {
        .button {
            font-size: 1em;
            min-width: 8em;

        }
    }

    &.size-large {
        .button {
            font-size: 1.15em;
            min-width: 8em;
        }
    }


    /* Styles */

    &.style-primary {
        &.variant-primary {
            .button {
                background-color: #FFF;
                box-shadow: 0 1px 2px rgba(0,0,0,.08), inset 0 0 0 1px rgba(0,0,0,.06), inset 0 -1px 0 rgba(0,0,0,.12), inset 1px 0 0 rgba(0,0,0,.06), inset -1px 0 0 rgba(0,0,0,.06);
                transition: 150ms ease-in-out;
            }

            &:hover {
                .button {
                    box-shadow: 0 1px 3px rgba(0,0,0,.12), inset 0 0 0 1px rgba(0,0,0,.06), inset 0 -1px 0 rgba(0,0,0,.12), inset 1px 0 0 rgba(0,0,0,.06), inset -1px 0 0 rgba(0,0,0,.06);
                }
            }
            
            &:active {
                .button {
                    box-shadow: inset 0 0 0 1px rgba(0,0,0,.06), inset 0 -1px 0 rgba(0,0,0,.12), inset 1px 0 0 rgba(0,0,0,.06), inset -1px 0 0 rgba(0,0,0,.06);
                }
            }
        }
        
        &.variant-simple {
            .button {
                background-color: transparent;
                padding: 0;
            }
        }

        &.variant-contained {
            .button {
                background-color: rgba(83, 196, 190, 0.15);
                color: #53C4BE;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-outline {
            .button {
                background-color: transparent;
                color: #4FC0BA;
                border: .01em solid #4FC0BA;
            }

            &:hover {
                .button {
                    background-color: #4FC0BA;
                    color: #FFF;
                }
            }
        }

        &.variant-link {
            display: inline-block;

            .button {
                background-color: transparent;
                border: none;
                padding: 0;
                min-width: initial;

                color: #4FC0BA;
            }

            &:hover {
                opacity: 0.7;
            }
        }
    }

    &.style-secondary {
        width: 100%;
        
        &.variant-primary {
            .button {
                background-color: #4683d9;
                color: #FFF;
                transition: 150ms;
                width: 100%;
            }

            &:hover {
                .button {
                    background-color: #437cce;
                }
            }
        }

        &.variant-contained {
            .button {
                background-color: rgba(151, 151, 151, 0.15);
                padding: 1.05em;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-outline {
            color: #FFF;

            .button {
                background-color: transparent;
                border: 2px solid #979797;
                padding: 1.05em;
            }

            &:hover {
                .button {
                    background-color: #979797;
                }
            }
        }

        &.variant-link {
            color: #FFF;

            .button {
                background-color: transparent;
                padding: 1.05em;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }
    }

    &.style-error {
        &.variant-primary {
            .button {
                background-color: #FD6E6E;
                color: #FFF;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-contained {
            .button {
                background-color: rgba(253, 110, 110, 0.15);
                color: #FFF;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-outline {
            .button {
                background-color: transparent;
                color: #FD6E6E;
                border: .01em solid #FD6E6E;
            }

            &:hover {
                .button {
                    background-color: #FD6E6E;
                    color: #FFF;
                }
            }
        }

        &.variant-link {
            .button {
                background-color: transparent;
                color: #FD6E6E;
            }

            &:hover {
                .button {
                    background-color: #FD6E6E;
                    color: #FFF;
                }
            }
        }
    }

    /* Modificators */

    &.disabled {
        .button {
            background-color: #4FC0BA;
            color: #FFF;
        }

        &:hover {
            .button {
                background-color: darken(#4FC0BA, 10%);
            }
        }
    }

    &.shadow {
        .button-shadow {
            display: block;
        }
    }

`;
