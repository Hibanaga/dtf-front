import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    max-width: 12.5em;
    width: 100%;
    height: 100%;
    padding-top: 4em;
    
    position: fixed;
    top: 0;
    left: 0;
    background-color: red;
    z-index: 0;
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
