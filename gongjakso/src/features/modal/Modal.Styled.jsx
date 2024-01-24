import styled from 'styled-components';

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
    font-size: 20px;
    text-align: center;s
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
    width: 200px;
    font-weight: bold;
    height: 50px;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    text-align: center;
`;

export const BlueButton = styled.button`
    background: #0150f1;
    color: white;
    border-radius: 10px;
    font-size: 15px;
    width: 200px;
    font-weight: bold;
    height: 50px;
    text-align: center;
    padding: 5px;
    margin: 5px;
`;
