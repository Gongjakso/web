import React, { useState, useEffect } from 'react'; // useEffect 추가
import * as S from './MyPortfolioStyled';
import axios from 'axios';
import useCustomNavigate from '../../hooks/useNavigate';

import { getMyInfo } from '../../service/auth_service';
import { openAlertModal } from '../../features/modal/modalSlice/alertModalSlice';
import { useDispatch } from 'react-redux';
import AlertModal from '../../components/common/AlertModal/AlertModal';

const TeamPortfolio = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const goToPage = useCustomNavigate();

    useEffect(() => {
        const fetchMyInfo = async () => {
            try {
                const { data } = await getMyInfo();
                setEmail(data.email);
            } catch (error) {
                console.error(
                    '내 정보를 불러오는 중 오류가 발생했습니다: ',
                    error,
                );
            }
        };

        fetchMyInfo();
    }, []);

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const baseURL = process.env.REACT_APP_BASE_URL;

    const isValidEmail = email => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleEmailSubmit = async () => {
        if (!isValidEmail(email)) {
            dispatch(
                openAlertModal({
                    titleContent: '포트폴리오',
                    modalContent: '유효한 이메일 주소를 입력해주세요.',
                }),
            );
            return;
        }

        try {
            const response = await axios.post(`${baseURL}email`, {
                address: email,
            });

            if (response.status === 200) {
                dispatch(
                    openAlertModal({
                        titleContent: '포트폴리오',
                        modalContent: '출시 후, 메일 전송 해드리겠습니다!',
                    }),
                );
            } else {
                console.log('서버로부터의 응답이 예상과 다릅니다.', response);
            }
        } catch (error) {
            dispatch(
                openAlertModal({
                    titleContent: '포트폴리오',
                    modalContent: '이미 등록된 이메일입니다.',
                }),
            );
            console.error('서버 요청 중 오류가 발생했습니다: ', error);
        }
    };

    return (
        <S.Container>
            <S.Title>나의 포트폴리오</S.Title>
            <S.Subtitle>
                다양한 포트폴리오 양식을 구매하고,<br></br>선배들의 조언까지!
            </S.Subtitle>
            <S.Bluetitle>
                포트폴리오 탭<br></br>Coming Soon
            </S.Bluetitle>
            <S.BottomBox>
                <S.InputEmail
                    type="email"
                    placeholder="*포트폴리오 탭을 가장 먼저 만나보고 싶다면 메일 주소를 남겨주세요!"
                    value={email}
                    onChange={handleEmailChange}
                />
                <S.CheckBox onClick={handleEmailSubmit}>확인</S.CheckBox>
            </S.BottomBox>
            <AlertModal />
        </S.Container>
    );
};

export default TeamPortfolio;
