import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';
import { useForm } from 'react-hook-form';
import { SelectInput } from '../../components/common/Input/Input'; // 드롭다운 컴포넌트 import
import majorData from '../../utils/majorData.json'; // 전공 데이터 import
import jobData from '../../utils/jobData.json' // 직무 데이터 import

const SignUpModal = ({ closeSignUpModal }) => {
    const navigate1 = useNavigate();
    const handleModalClick = path => {
        closeSignUpModal();
        navigate1(path);
    };

    const {
        register,
        setError,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
    });

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    const status_options = [
        '대학 재학 중',
        '대학 휴학 중',
        '취업 준비 중',
        '기타',
    ];



    return (
        <S.ModalBg>
            <S.Container>
                <S.Title>안녕하세요, 공작소에 오신 것을 환영합니다.</S.Title>
                <S.Title>
                    3가지만 입력하면 맞춤형 활동을 시작할 수 있습니다!
                </S.Title>
                <S.BoxContainer>
                    <S.Box>
                        <SelectInput
                            label={'현재상태'}
                            id={'status'}
                            error={errors.status}
                            placeholder="*현재 당신의 상태를 선택해주세요."
                            selectOptions={status_options}
                            register={register}
                        />
                    </S.Box>
                    <S.Box>
                        <SelectInput
                            label={'전공'}
                            id={'major'}
                            error={errors.major}
                            placeholder="*현재 전공하고 있는 분야를 선택해주세요."
                            selectOptions={majorData.map(item => item.key)}
                            register={register}
                        />
                    </S.Box>
                    <S.Box>
                        <SelectInput
                            label={'희망 직무'}
                            id={'job'}
                            error={errors.job}
                            placeholder="*희망하시는 직무를 선택해주세요."
                            selectOptions={jobData.map(item => item.key)}
                            register={register}
                        />
                    </S.Box>
                </S.BoxContainer>

                <S.ButtonBox>
                    <S.BlueButton onClick={() => handleModalClick('/')}>
                        완료
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default SignUpModal;
