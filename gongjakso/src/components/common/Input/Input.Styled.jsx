import styled, { css } from 'styled-components';

export const Select = styled.select`
    display: block;
    width: 100%;
    height: 100%;
    padding: 15px;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    font-size: ${props => props.theme.fontSize.md};
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.mainFont};
    }

    &.warning {
        border: 1px solid ${({ theme }) => theme.repo.open};
    }
    ${props =>
        props.onMouseDown &&
        css`
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
        `}
`;

export const InputLabel = styled.label`
    display: inline-block;
    width: ${props => (props.isLabel ? '20%' : '0')};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: 'PreMedium';
    display: flex;
    align-items: center;
`;

export const InputText = styled.input.attrs(props => ({
    type: props.type || 'text',
}))`
    font-size: ${({ theme }) => theme.fontSize.md};

    width: 100%;
    max-width: 1000px;
    padding: 2.5px 0;
    border-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.mainFont};
    }

    &.warning {
        border-bottom: 1px solid ${({ theme }) => theme.repo.open};
    }
`;
