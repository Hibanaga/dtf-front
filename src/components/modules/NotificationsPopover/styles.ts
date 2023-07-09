import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: absolute;
    top: 115%;
    cursor: default;

    background-color: #FFF;
    box-shadow: 0 3px 5px 0 rgba(116,116,116,.25);
    right: -.35em;
    min-width: 27.5em;
    
    .arrow {
        width: 1.5em;
        height: 1.5em;
        background-color: #FFF;
        position: absolute;
        top: -.5em;
        right: 1em;
        transform: rotate(45deg);
    }
    
    .header {
        background-color: #FFF;
        border-bottom: .01em solid rgba(116,116,116,.25);
        padding: .7em 1em;
        
        .headline {
            display: block;
            font-size: .8em;
        }
    }
    
    .body {
        padding: .7em 1em;
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
