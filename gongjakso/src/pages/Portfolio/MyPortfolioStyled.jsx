import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    height: 500px;
    margin: 150px 50px;
`;

export const Title = styled.p`
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    margin: 200px 0px 90px 0px;
`;

export const Subtitle = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
`;

export const Bluetitle = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.box1};
    margin: 40px auto 100px auto;
`;

export const InputEmail = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.md};
    padding-bottom: 10px;
`;

export const BottomBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #b7b7b7;
    width: 600px;
    margin: auto;
`;

//이메일 작성 후 확인 버튼
export const CheckBox = styled.button`
    width: 25%;
    height: 40px;
    cursor: pointer;
    position: relative;
    top: 50px;
    border: 1px solid #b7b7b7;
    background-color: transparent;
    color: black;
    border-radius: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
`;
