import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .layout-forms-simple-input {
        width: 60%;

        .input {
            box-sizing: border-box;
            background-color: #caeaff;
            box-shadow: none;
            border: none;
            transition: 150ms ease-in-out;
            font-size: 1em;
            color: #7f7f7f;
        }
        
        &:hover {
            .input {
                background-color: #FFF;
                box-shadow: 0 0 0 3px rgba(22,147,229,0.12);
            }
        }
    }

    .layout-button {
        .button {
            height: 100%;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
