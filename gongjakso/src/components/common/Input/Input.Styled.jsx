import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
`;

export const SelectValue = styled.div`
    display: block;
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 15px;
    font-size: 21px;
    cursor: pointer;
    transition: border-color 0.2s ease;

    &:hover {
        border-color: #007bff;
    }
`;

export const OptionList = styled.div`
    position: absolute;
    left: 0;
    width: 250px;
    font-size: 18px;
    margin: 7px 0;
    list-style: none;
    border-radius: 4px;
    background-color: #fff;
    z-index: 1;
    border: 1px solid hsl(0, 0%, 90%);
    .option {
        padding: 15px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: black;
            color: white;
        }
    }
`;

export const InputLabel = styled.label`
    display: inline-block;
    width: ${props => (props.$isLabel ? '20%' : '0')};
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

export const Arrow = styled.img`
    display: flex;
    align-items: center;
    padding-right: 5px;
    justify-content: center;
`;
