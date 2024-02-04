import styled from 'styled-components';
import { ReactComponent as Up } from '../../assets/images/Up.svg';

export const TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    flex-grow: 4;
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: bold;
`;

export const Spacer = styled.div`
    flex-grow: 6;
`;

export const BoxDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    flex-direction: column;
    margin: 100px;
`;

export const UpImage = styled(Up)`
    width: 56px;
    margin: 50px 0px 50px auto;
`;

export const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end; // Aligns ite margin-top: 50px;
    width: 1200px; // 원하는 너비로 설정
    margin: 150px auto 0px auto; // 가운데 정렬
`;
