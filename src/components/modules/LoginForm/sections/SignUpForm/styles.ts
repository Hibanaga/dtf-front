import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .headline {
        text-align: left;
        width: 100%;
        font-size: 1.25em;
        font-weight: 600;
    }
    
    .container-sign-up {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
        max-width: 18em;
        width: 100%;
        
        .row-sign-up {
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

        .sign-up-form {
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
        
        .inner-sign-in {
            width: 100%;
            margin-top: 1em;
            
            display: flex;
            justify-content: flex-start;
            
            .data-sign-in {
                display: block;
                text-align: left;
                color: #595959;
                font-size: .8em;
                
                .button-sign-in {
                    cursor: pointer;
                    color: #3766a9;
                    
                    &:hover {
                        color: #cd192e;
                    }
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
