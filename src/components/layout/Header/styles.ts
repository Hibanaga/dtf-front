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
        grid-template-columns: calc(2 / 12 * 100%) calc(6 / 12 * 100%) calc(2 / 12 * 100%);
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
                
                .icon-button-notification {
                    cursor: pointer;
                    margin: .3em 0 0 .5em;
                    padding: .5em;
                    
                    .icon {
                        font-size: 1.8em;
                        transition: 150ms;
                        
                        &:hover {
                            color: #1693e5;
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
