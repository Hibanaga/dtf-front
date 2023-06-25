import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    height: 100%;
    margin: 0 auto;

    @media all and (max-width: ${variables.desktopXS}) {
        width: 96%;
        margin: 0 auto;
    }
`;
