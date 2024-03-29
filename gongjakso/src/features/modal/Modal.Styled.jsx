import styled from 'styled-components';
import closebuttonimg from '../../assets/images/Close.svg';
import loginmodalimg from '../../assets/images/Loginmodal.png';

export const CloseButton = styled.button`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    position: fixed;
    top: 50px;
    right: 50px;
    cursor: pointer;
    background: url(${closebuttonimg});
    background-size: cover;
`;

export const Container = styled.div`
    display: flex;
    border: none;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 750px;
    height: 100%;
    max-height: 550px;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    flex-direction: column;
    padding: 70px 0;
`;

export const ModalBg = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

export const Image = styled.div`
    width: 300px;
    height: auto;
    padding: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${loginmodalimg});
    background-size: contain;
    background-repeat: no-repeat;
`;

export const Title = styled.div`
    color: black;
    font-family: 'PreBold';
    padding: 5px;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
    display: flex;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 550px;
    justify-content: center;
    align-items: center;
`;

export const GreyButton = styled.button`
    background: ${({ theme }) => theme.Grey};
    color: black;
    width: 45%;
    height: 100%;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.md};
    border-radius: 15px;
    text-align: center;
    padding: 10px;
    margin: 10px;
`;

export const BlueButton = styled.button`
    background: ${({ theme }) => theme.Main1};
    color: white;
    border-radius: 15px;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 45%;
    height: 100%;
    text-align: center;
    padding: 10px;
    margin: 10px;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 30px;
    justify-content: baseline;
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    position: relative;
    line-height: 25px;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 20px;
`;

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreMedium';
    display: flex;
    align-items: center;
`;

export const SelectField = styled.select`
    width: 350px;
    height: 45px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.base};
    padding: 10px;
    background-color: white;
    color: black;

    option {
        background-color: white;
        color: black;
    }

    option:hover {
        background-color: black;
        color: white;
    }
`;
