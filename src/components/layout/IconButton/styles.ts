import styled from '@emotion/styled';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .5em;
    cursor: pointer;

    &.small-size {
        width: 1em;
        height: 1em;
    }
    
    &.medium-size {
        width: 1.5em;
        height: 1.5em;
    }

    &.large-size {
        width: 2em;
        height: 2em;
    }
    
    
    &.primary-variant {
        padding: .5em;
        background-color: #FFF;
        box-shadow: 0 1px 2px rgba(0,0,0,.08), inset 0 0 0 1px rgba(0,0,0,.06), inset 0 -1px 0 rgba(0,0,0,.12), inset 1px 0 0 rgba(0,0,0,.06), inset -1px 0 0 rgba(0,0,0,.06);
        transition: 150ms ease-in-out;

        &:hover {
            box-shadow: 0 1px 3px rgba(0,0,0,.12), inset 0 0 0 1px rgba(0,0,0,.06), inset 0 -1px 0 rgba(0,0,0,.12), inset 1px 0 0 rgba(0,0,0,.06), inset -1px 0 0 rgba(0,0,0,.06);
        }
    }
`;
