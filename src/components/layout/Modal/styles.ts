import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    top: 0;
    left: 0;
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgba(0,0,0,.8);

     .modal-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 65em;
        background-color: rgba(255,255,255,1);
        box-shadow: 0 6px 20px rgba(31, 33, 34, 0.1);
        padding: .5em;
        border-radius: .5em;
        box-sizing: border-box;
        overflow-y: scroll;

         .button-close {
             position: fixed;
             top: 3%;
             right: 2%;
             z-index: 99999;

             .image-button {
                 cursor: pointer;
                 opacity: .6;
                 transition: 150ms;
                 width: 1.2em;
                 height: 1.2em;
                 
                 &:hover {
                     opacity: 1;
                 }
             }
         }
        
         .modal-body {
             overflow: auto;
         }
     }

    @media all and (max-width: ${variables.mobileL}) {
        .modal-container {
            position: fixed;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 90%;
            transform: none;
        }
    }
`;
