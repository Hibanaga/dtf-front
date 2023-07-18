import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    position: absolute;
    background-color: #FFF;
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.06), 0 1px 2px 0 rgba(0,0,0,0.06);
    width: 100%;
    top: 125%;
    padding: .5em;
    border-radius: .5em;
    box-sizing: border-box;
    
    .popover-headline {
        margin-top: .35em;
        color: #595959;
        font-size: .85em;
        font-weight: 400;
    }
    
    .list-popover {
        
        &.spacing {
            margin-top: .75em;   
        }
        
        .list-popover-element {
            padding: .5em 1em .5em .75em;
            border-radius: .5em;
            cursor: pointer;
            
            display: flex;
            align-items: center;
            justify-content: flex-start;
            
            &:hover {
                background-color: rgba(0,0,0,0.05);
            }
            
            .data-value {
                display: block;
                padding-left: .5em;
                padding-top: .25em;
                font-size: .9em;
            }

            &.no-result-element {
                .data-value {
                    padding-top: .1em;
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
