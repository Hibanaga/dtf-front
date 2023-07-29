import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    .container-sign-up {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 4em;
        
        max-width: 18em;
        width: 100%;
        
        .headline {
            text-align: left;
            width: 100%;
            font-family: 'Comfortaa', cursive;
        }
        
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
