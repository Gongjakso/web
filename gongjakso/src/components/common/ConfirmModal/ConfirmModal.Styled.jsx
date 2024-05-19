import { styled } from 'styled-components';

// import { ReactComponent as Close } from '../../assets/images/Close.svg';

export const Dialog = styled.dialog`
    width: 100%;
    height: 100%;
    border: none;
    position: fixed;
    top: 50%; /* 화면 상단에서 절반 위치에 설정 */
    left: 50%; /* 화면 왼쪽에서 절반 위치에 설정 */
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    z-index: 999;
`;

export const ConfirmModalContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
`;

export const ConfirmModalInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${props => props.theme.Main1};

    background: #fff;
    text-align: center;
    border-radius: 14px;
    padding: 15px;
    position: relative;

    width: 40%;
    height: 40%;
`;

export const ConfirmModalQustion = styled.h3`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.ll};
    font-family: 'PreBold';
    letter-spacing: 0.5px;
    margin-bottom: 30px;
`;

export const ConfirmModalExplain = styled.div`
    color: ${props => props.theme.subFont};
`;

export const ConfirmModalButtonBox = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const CloseConfirmModalButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px;
`;

// export const CloseModalIcon = styled(Close)`
//     color: ${props => props.theme.subFont};
// `;
