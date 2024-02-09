// SignUpModal.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';
import { useForm } from 'react-hook-form';
import { SelectInput } from '../../components/common/Input/Input';
const SignUpModal = ({ closeModal1 }) => {
    const navigate1 = useNavigate();
    const handleModalClick = path => {
        closeModal1();
        navigate1(path);
    };
    const handleModalDeleteClick = path => {
        closeModal1();
    };
    const {
        register,
        setError,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
    });

    const status_options = [
        '대학 재학 중',
        '대학 휴학 중',
        '취업 준비 중',
        '기타',
    ];
    const major_options = ['인문 사회 계열', '공학 계열', '예체능 계열'];
    const job_options = [
        '기획/전략',
        '마케팅/홍보',
        'IT 개발',
        '디자인',
        '미디어/문화',
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
                            id={'productName'}
                            error={errors.productName}
                            placeholder="*현재 당신의 상태를 선택해주세요."
                            selectOptions={status_options}
                            register={register}
                            registerOptions={{
                                required: '상품명을 입력하세요.',
                            }}
                        />
                    </S.Box>
                    <S.Box>
                        <SelectInput
                            label={'전공'}
                            id={'productName'}
                            error={errors.productName}
                            placeholder="*현재 전공하고 있는 분야를 선택해주세요."
                            selectOptions={major_options}
                            register={register}
                            registerOptions={{
                                required: '상품명을 입력하세요.',
                            }}
                        />
                    </S.Box>
                    <S.Box>
                        <SelectInput
                            label={'희망 직무'}
                            id={'productName'}
                            error={errors.productName}
                            placeholder="*희망하시는 직무를 선택해주세요."
                            selectOptions={job_options}
                            register={register}
                            registerOptions={{
                                required: '상품명을 입력하세요.',
                            }}
                        />
                    </S.Box>
                </S.BoxContainer>

                <S.ButtonBox>
                    <S.BlueButton
                        isDelete={true}
                        onClick={() => handleModalDeleteClick()}
                    >
                        취소
                    </S.BlueButton>
                    <S.BlueButton onClick={() => handleModalClick('/')}>
                        완료
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default SignUpModal;
