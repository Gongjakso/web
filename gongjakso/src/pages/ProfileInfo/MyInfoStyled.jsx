import styled from 'styled-components';

export const TopBox = styled.div`
    height: 200px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 25px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: 10px 550px;
`;

export const InputField = styled.input`
    width: 230px;
    height: 30px;
    padding: 5px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
`;

export const Title = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
`;

export const SubTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
`;

export const Wrapper = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SetBox = styled.button`
    width: 150px;
    height: 40px;
    font-size: 15px;
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 10px;
`;
