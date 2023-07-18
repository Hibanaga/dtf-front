import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .smart-search-bar {
        width: 60%;
        position: relative;
        
        .layout-forms-simple-input {
            height: 100%;
            
            .inner-input {
                height: 100%;
                
                .input {
                    height: 100%;
                }
            }
        }
    }

    .layout-button {
        .button {
            height: 100%;
            padding: .5em 1.3em;
            
            .button-icon {
                margin-top: .125em;
                
                svg {
                    width: .75em;
                    height: .75em;
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
