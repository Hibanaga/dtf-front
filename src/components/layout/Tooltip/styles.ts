import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    div[id*="tooltip-anchor"] {
        padding: 0;
        box-shadow: 0 1px 4px rgba(86, 100, 108, 0.1);
        background-color: #FFF;
        opacity: 1;
        
        &::before {
            display: none;
        }
        
        &::after {
            border-top: 1px solid rgb(0 0 0 / 0.1);
            border-right: 1px solid rgb(0 0 0 / 0.1);
        }
        
        .tooltip-body {
            padding: .65em 1em;
            max-width: 50em;
            background-color: #FFF;
            
            .element-tooltip {
                &:not(:last-of-type) {
                    margin-bottom: .375em;
                }
            }
        }
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
