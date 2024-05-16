import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 9998;
`;

export const DateContent = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 60px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.borderline};
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.subFont};
    padding-left: 15px;
    font-weight: 500;
    line-height: 140%;
    text-align: start;
`;

export const DateSelect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.subFont};
    border-radius: 15px;
    padding: 15px 0;
    background-color: white;
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    border-radius: 15px;
    color: ${props => (props.$isDelete ? 'black' : 'white')};
    background-color: ${props =>
        props.$isDelete ? props.theme.subFont : props.theme.mainFont};
`;
