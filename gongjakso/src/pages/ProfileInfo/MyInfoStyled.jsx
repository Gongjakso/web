import styled from 'styled-components';

export const TopBox = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 25px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 670px;
`;

export const InputField = styled.input`
    width: 480px;
    height: 55px;
    padding: 5px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Spacer = styled.div`
    flex-grow: 6;
`;

export const Title = styled.p`
    flex-grow: 4;
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: bold;
`;

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;
    margin-right: 10px;
`;

export const Wrapper = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SetBox = styled.button`
    width: 200px;
    height: 45px;
    font-size: ${({ theme }) => theme.fontSize.md};
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 10px;
`;

export const SelectField = styled.select`
    width: 480px;
    height: 55px;
    padding: 5px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.md};

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
