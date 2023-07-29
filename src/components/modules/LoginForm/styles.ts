import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    height: 100%;
    
    display: flex;
    
    .column-preview {
        position: relative;
        width: 35%;
        background-color: ${variables.theme.default.primary};
        height: 100%;
        overflow: hidden;
        user-select: none;
        
        .layout-image {
            &.image-cards {
                width: 7em;
                height: 7em;
                
                top: -2%;
                left: 10%;
                transform: rotate(-25deg);
            }
            &.image-console {
                width: 5em;
                height: 5em;
                
                top: 10%;
                left: 65%;
                transform: rotate(15deg);
            }
            &.image-ghost {
                width: 8em;
                height: 8em;

                top: 25%;
                left: 12.5%;
            }
            &.image-mushroom {
                width: 6em;
                height: 6em;
                
                top: 55%;
                left: 50%;
                transform: rotate(15deg);
            }
            &.image-cubik-rubik {
                width: 6em;
                height: 6em;
                
                top: 75%;
                left: 10%;
                transform: rotate(-15deg);
            }
        }
    }
    
    .column-form {
        width: 65%;
        height: 100%;
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
