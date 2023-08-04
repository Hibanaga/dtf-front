import React, { FunctionComponent } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutModal: FunctionComponent<Props> = ({ children, hasCancelButton, onClose }) => {
    return (
        <StyledComponent className="layout-modal">
            <div
                className="modal-backdrop"
                onClick={onClose}
            />
            <div className="modal-container">
                {hasCancelButton && (
                    <div className="button-close">
                        <CloseRoundedIcon
                            className="image-button"
                            onClick={() => onClose && onClose()}
                        />
                    </div>
                )}

                <div className="modal-body">
                    {children}
                </div>
            </div>
        </StyledComponent>
    );
};

export default LayoutModal;
