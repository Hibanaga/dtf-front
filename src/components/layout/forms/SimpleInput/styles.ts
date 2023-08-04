import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    .input {
        display: block;
        width: 100%;
        border-radius: 6px;
        outline: none;
    }

    &.primary-input {
        width: 100%;
        
        .input {
            box-sizing: border-box;
            background-color: #f5f5f5;
            box-shadow: none;
            border: none;
            transition: 150ms ease-in-out;
            color: #222;
            padding: .75em 1em .85em;
            font-size: .9em;

            &:focus {
                background-color: #FFF;
                box-shadow: 0 0 0 3px rgba(22,147,229,0.12);
            }

            &:disabled {
                background-color: rgba(224, 224, 224, 0.2);
                border: none;
                box-shadow: none;
                pointer-events: none;
            }

            &.error-input {
                border: 2px solid #DC2626;
            }
        }

        &:hover {
            .input {
                &::placeholder {
                    color: #7f7f7f;
                }

                &:hover {
                    background-color: #FFF;
                    box-shadow: 0 0 0 3px rgba(22,147,229,0.12);
                }
            }
        }
    }

    &.secondary-input {
        .input {
            box-sizing: border-box;
            background-color: #caeaff;
            box-shadow: none;
            border: none;
            transition: 150ms ease-in-out;
            font-size: 1em;
            color: #7f7f7f;
            padding: .75em 1em .85em;

            &:focus {
                background-color: #FFF;
                box-shadow: 0 0 0 3px rgba(22,147,229,0.12);
            }

            &:disabled {
                background-color: rgba(224, 224, 224, 0.2);
                border: none;
                box-shadow: none;
                pointer-events: none;
            }

            &.error-input {
                border: 2px solid #DC2626;
            }
        }

        &:hover {
            .input {
                &::placeholder {
                    color: #7f7f7f;
                }

                &:hover {
                    background-color: #FFF;
                    box-shadow: 0 0 0 3px rgba(22,147,229,0.12);
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
