import React, { useState } from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import SelectCalendar from '../../components/common/Calendar/SelectCalendar';
import { patchExtension } from '../../service/apply_service';

const MyPageTeam = props => {
    const navigate = useCustomNavigate();
    const [checkedCase] = useState(props.teamCase.id);

    const [dates, setDates] = useState([]);

    const handleApply = selectedDates => {
        setDates(selectedDates);
    };

    const ClickExtensionDate = () => {
        // 아래 부분 2 로 넣은 부부 수정해야함
        patchExtension('2', dates.endDate);
    };

    return (
        <>
            <S.Background>
                <S.Modal w="50%" h="40%" bc={({ theme }) => theme.box1}>
                    <S.Backbtn onClick={() => props.CloseModal(false)}>
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>
                    <S.MainTitle>팀 모집 {props.teamCase.case}</S.MainTitle>
                    <S.CompletedBox>
                        {checkedCase === '1' && (
                            <S.CompletedBox>
                                <p>
                                    팀 모집을 마감하면 재모집을 할 수 없게
                                    됩니다.
                                </p>
                                <p>그래도 마감하시겠습니까?</p>
                            </S.CompletedBox>
                        )}

                        {checkedCase === '2' && (
                            <S.CompletedBox>
                                <p>마감 날짜를 입력해주세요!</p>
                                <SelectCalendar onApply={handleApply} />
                            </S.CompletedBox>
                        )}

                        {checkedCase === '3' && (
                            <S.CompletedBox>
                                <p>
                                    팀 모집을 취소하면 재모집을 할 수 없게
                                    됩니다.
                                </p>
                                <p>그래도 취소하시겠습니까?</p>
                            </S.CompletedBox>
                        )}
                    </S.CompletedBox>

                    <S.ApplyBox>
                        <S.ApplyBtn
                            w="40%"
                            onClick={() => {
                                if (checkedCase === '1') {
                                    return navigate('/profile');
                                } else if (checkedCase === '2') {
                                    ClickExtensionDate();
                                    props.CloseModal(false);
                                } else if (checkedCase === '3') {
                                    return navigate('/profile');
                                }
                            }}
                        >
                            {props.teamCase.case}
                        </S.ApplyBtn>
                    </S.ApplyBox>
                </S.Modal>
            </S.Background>
        </>
    );
};

export default MyPageTeam;
