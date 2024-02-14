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
    border: 3px solid ${props => props.bc};
    position: relative;
    top: 50%;
    left: 50%;
    width: ${props => props.w};
    height: ${props => props.h};
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 40px;
    padding: 50px;
`;

export const Backbtn = styled.button`
    position: absolute;
    right: 5%;
`;

export const MainTitle = styled.p`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xlg};
    font-weight: bold;
    margin-bottom: 50px;
`;

// 텍스트 전체 틀
export const DetailBox = styled.div`
    height: 17%;
    padding: 10px;
    position: relative;
`;

export const DetailBox2 = styled.div`
    padding: 10px;
`;

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
`;

// RoundForm 감싸는 틀
export const FormBox = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
`;

export const RoundForm = styled.button`
    width: 140px;
    border: 2px solid #a3a3a3;
    border-radius: 30px;
    font-size: ${({ theme }) => theme.fontSize.md};
    text-align: center;
    padding: 10px;
    margin-left: 10px;
    background-color: ${props => (props.isSelected ? 'black' : 'white')};
    color: ${props => (props.isSelected ? 'white' : props.theme.subFont)};
`;

// textarea 감싸는 틀
export const TextBox = styled.div`
    position: relative;
    top: 20px;
`;

// 지원 분야 감싸는 틀
export const WarningBox = styled.div`
    display: flex;
    align-items: center;
`;

export const WarningTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    color: red;
    font-weight: bold;
    margin-left: 20px;
`;

export const InputArea = styled.textarea`
    width: 100%;
    display: block;
    border: none;
    border-bottom: 2px solid black;
    resize: none;
    overflow: hidden;
    color: ${({ theme }) => theme.greyFont};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: 'PreRegular';
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${({ theme }) => theme.greyFont};
    }
`;

// 글자 수 체크
export const InputNum = styled.p`
    color: ${({ theme }) => theme.greyFont};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreRegular';
    letter-spacing: 1px;
    margin-top: 10px;
    text-align: right;
`;

// 지원하기 버튼 감싸는 틀
export const ApplyBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ApplyBtn = styled.button`
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
    width: ${props => props.w};
    border-radius: 10px;
    margin: 15px;
    padding: 20px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    background: ${({ theme }) => theme.box1};
    color: white;
`;

// 내가 모집중인 팀 지원서 모달창 버튼 틀
export const ProfileApplyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    right: 0;
    width: 100%;
`;

export const ProfileApplyBtn = styled.button`
    width: 30%;
    margin: 15px;
    border-radius: 12px;
    padding: 20px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    background: ${props => props.bg};
    color: white;
`;

// 지원 이유
export const Content = styled.div`
    border: none;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
    color: ${({ theme }) => theme.greyFont};
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 30px;
`;

// 지원 완료 창 텍스트 틀
export const CompletedBox = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    line-height: 33px;
    gap: 20px;
`;
