import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    max-width: 12.5em;
    width: 100%;
    height: 100%;
    padding-top: 4em;
    box-sizing: border-box;
    pointer-events: none;
    opacity: 0;
    transition: 150ms;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    
    .list {
        padding: .5em;
    }
    
    &.animated-in {
        pointer-events: initial;
        max-width: 12.5em;
        opacity: 1;
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
