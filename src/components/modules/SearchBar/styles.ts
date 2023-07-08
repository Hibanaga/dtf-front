import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .smart-search-bar {
        width: 60%;
        
        position: relative;
    }

    .layout-button {
        .button {
            height: 100%;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
