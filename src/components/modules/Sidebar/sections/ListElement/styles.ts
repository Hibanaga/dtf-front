import Link from 'next/link';
import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled(Link)`
    width: 100%;
    padding: .5em;
    margin: .1em 0;
    box-sizing: border-box;
    border-radius: .25em;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    
    .inner-image {
        padding-right: .5em;
        
        .icon {
            color: #595959;
        }
    }
    
    .data-label {
        color: #595959;
    }
    
    &:hover {
        background-color: #FFF;
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
