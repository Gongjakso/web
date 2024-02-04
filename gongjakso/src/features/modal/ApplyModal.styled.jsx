import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
`;

export const Modal = styled.div`
    border: 3px solid #195ee6;
    position: relative;
    top: 50%;
    left: 50%;
    width: ${props => props.w};
    height: ${props => props.h};
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 20px;
    padding: 50px;
`;

export const Backbtn = styled.button`
    position: absolute;
    right: 5%;
`;

export const MainTitle = styled.p`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
`;

// 텍스트 전체 틀
export const DetailBox = styled.div`
    height: 20%;
    padding: 10px;
    position: relative;
`;

export const SubTitle = styled.div`
    height: 20px;
    font-size: 20px;
    font-weight: bold;
`;

// RoundForm 감싸는 틀
export const FormBox = styled.div`
    display: flex;
    position: absolute;
    top: 50px;
`;

export const RoundForm = styled.button`
    width: 127px;
    height: 37px;
    border: 2px solid #8c8c8c;
    border-radius: 30px;
    font-size: 17px;
    text-align: center;
    padding: 7px;
    margin-left: 10px;
    color: #8c8c8c;
`;

// textarea 감싸는 틀
export const TextBox = styled.div`
    position: relative;
    top: 20px;
`;

export const InputArea = styled.textarea`
    width: 100%;
    display: block;
    border: none;
    border-bottom: 2px solid black;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.greyFont};
    font-size: 17px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #B2B2B;
    }
`;

// 글자 수 체크
export const InputNum = styled.p`
    color: #b2b2b2;
    text-align: right;
`;

export const Content = styled.div`
    border: none;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
    color: ${({ theme }) => theme.greyFont};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 25px;
`;
// 지원하기 버튼 감싸는 틀
export const ApplyBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ApplyBox2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    right: 0;
    width: 100%;
`;

export const ApplyBtn = styled.button`
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
    width: ${props => props.w};
    height: 55px;
    border-radius: 10px;
    margin: 15px;
    padding: 15px;
    font-size: 17px;
    font-weight: 600;
    background: #0054ff;
    color: white;
`;

export const ApplyBtn2 = styled.button`
    width: 25%;
    margin: 10px;
    border-radius: 10px;
    padding: 20px;
    font-size: 17px;
    font-weight: 600;
    background: ${props => props.bg};
    color: white;
`;

// 지원 완료 창 텍스트 틀
export const CompletedBox = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 33px;
`;
