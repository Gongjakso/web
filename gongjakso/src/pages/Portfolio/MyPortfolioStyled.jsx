import styled from 'styled-components';

export const Title = styled.p`
    font-size: 35px;
    text-align: center;
    font-weight: bold;
`;

export const Subtitle1 = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
`;

export const Subtitle2 = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: #0054ff;
`;

export const InputEmail = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 250%;
    font-size: 14px;
    padding-bottom: 10px;
`;

export const BottomBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #b7b7b7;
    width: 30%;
    margin: auto;
`;

//이메일 작성 후 확인 버튼
export const CheckBox = styled.button`
    width: 100px;
    cursor: pointer;
    position: relative;
    top: 40px;
    border: 1px solid #b7b7b7;
    background-color: transparent;
    color: black;
    border-radius: 7px;
`;
