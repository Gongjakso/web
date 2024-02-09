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
    max-width: 1200px;
    height: 100%;
    max-height: 800px;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 32px;
    flex-direction: column;
    padding: 20px 0;
    gap: 20px;
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
`;

export const Image = styled.div`
    width: 350px;
    height: 350px;
    padding: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
    background: url(${loginmodalimg});
    background-size: contain;
    background-repeat: no-repeat;
`;

export const Title = styled.div`
    color: black;
    font-size: 35px;
    text-align: center;
    display: flex;
    padding: 5px;
    font-weight: bold;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 800px;
    height: 230px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const GreyButton = styled.button`
    background: #d9d9d9;
    color: black;
    width: 360px;
    font-weight: 700;
    height: 80px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    font-size: 25px;
`;

export const BlueButton = styled.button`
    background: ${props =>
        props.isDelete ? props.theme.Grey : props.theme.Main1};
    color: white;
    border-radius: 10px;
    font-size: 25px;
    width: 40%;
    font-weight: 700;
    height: 40%;
    text-align: center;
    padding: 10px;
    margin: 10px;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 30px;
    font-size: 20px;
`;

export const BoxInfo = styled.div`
    font-size: 22px;
    padding: 25px;
`;
