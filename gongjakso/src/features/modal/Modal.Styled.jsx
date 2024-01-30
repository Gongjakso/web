import styled from 'styled-components';
import closebuttonimg from '../../assets/images/Close.svg';

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
    width: 55%;
    height: 65%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    flex-direction: column;
`;

export const ModalBg = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

export const Image = styled.div`
    padding: 50px;
    width: 40$;
`;

export const Title = styled.div`
    color: black;
    font-size: 30px;
    text-align: center;
    display: flex;
    padding: 5px;
    font-weight: bold;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

export const GreyButton = styled.button`
    background: #d9d9d9;
    color: black;
    width: 320px;
    font-weight: bold;
    height: 70px;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    text-align: center;
    font-size: 20px;
`;

export const BlueButton = styled.button`
    background: #0150f1;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    width: 320px;
    font-weight: bold;
    height: 70px;
    text-align: center;
    padding: 5px;
    margin: 5px;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

export const Box = styled.div`
    display: flex;
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
