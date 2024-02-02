import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
    font-family: 'PreBold';
    margin-bottom: 30px;
    gap: 30px;
    p {
        font-size: ${({ theme }) => theme.fontSize.md};
        color: ${({ theme }) => theme.subFont};
        font-family: 'PreMedium';
        font-weight: 100;
    }
`;

export const Label = styled.label`
    display: flex;
    gap: 10px;
    color: ${({ theme }) => theme.mainFont};
    font-family: 'PreBold';
    margin: 20px 0;
`;

export const TextArea = styled.input`
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.mainFont};
    width: 650px;
    margin-bottom: 10px;
`;

export const TapP = styled.p`
    display: flex;
    align-items: center;
    width: 190px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const ButtonDiv = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ClickBtn = styled.button`
    width: 160px;
    height: 50px;
    margin-right: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 25px;
    background-color: ${props => (props.isSelected ? 'black' : 'white')};
    color: ${props => (props.isSelected ? 'white' : props.theme.borderline)};
    font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Complain = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const Button = styled.button`
    border-radius: 15px;
    width: 260px;
    height: 70px;
    margin-top: 50px;
    background-color: ${props =>
        props.$isDelete ? props.theme.subFont : props.theme.Main1};
    color: ${props => (props.$isDelete ? 'black' : 'white')};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: 'PreBold';
`;
