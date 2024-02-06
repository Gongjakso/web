import React from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';

const Completed = props => {
    const navigate = useCustomNavigate();

    return (
        <div>
            <S.Background>
                <S.Modal w="55%" h="40%" bc={({ theme }) => theme.box1}>
                    <S.Backbtn
                        onClick={() => {
                            navigate('/' + props.title[1]);
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>
                    <S.MainTitle>{props.title[0]} 팀 지원하기</S.MainTitle>
                    <S.CompletedBox>
                        <p>지원이 완료되었습니다!</p>
                        <p>모집 결과는 마이페이지에서 확인하실 수 있습니다.</p>
                    </S.CompletedBox>

                    <S.ApplyBox>
                        <S.ApplyBtn
                            w="40%"
                            onClick={() => {
                                navigate('/profile');
                            }}
                        >
                            마이페이지로 이동하기
                        </S.ApplyBtn>
                    </S.ApplyBox>
                </S.Modal>
            </S.Background>
        </div>
    );
};

export default Completed;
