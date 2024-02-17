import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';
import { useForm } from 'react-hook-form';
import majorData from '../../utils/majorData.json'; // 전공 데이터 import
import jobData from '../../utils/jobData.json'; // 직무 데이터 import
import { putMyInfo } from '../../service/auth_service';

const SignUpModal = ({ closeSignUpModal, name }) => {
    const navigate1 = useNavigate();

    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const [selectedJob, setSelectedJob] = useState('');

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

    const groupMajorData = data => {
        return data.reduce((groups, item) => {
            const group = groups[item.id] || [];
            group.push(item.key);
            groups[item.id] = group;
            return groups;
        }, {});
    };

    const groupJobData = data => {
        return data.reduce((groups, item) => {
            const group = groups[item.id] || [];
            group.push(item.key);
            groups[item.id] = group;
            return groups;
        }, {});
    };

    const groupedMajorData = useMemo(() => groupMajorData(majorData), []);
    const groupedJobData = useMemo(() => groupJobData(jobData), []);

    console.log(name, selectedMajor, selectedJob, selectedStatus);

    const handleModalClick = path => {
        putMyInfo(name, selectedMajor, selectedJob, selectedStatus).then(
            res => {
                console.log(res.data);
            },
        );
        closeSignUpModal();
        navigate1(path);
    };

    return (
        <S.ModalBg>
            <S.Container>
                <S.Title>안녕하세요, 공작소에 오신 것을 환영합니다.</S.Title>
                <S.Title>
                    3가지만 입력하면 맞춤형 활동을 시작할 수 있습니다!
                </S.Title>
                <S.BoxContainer>
                    <S.Box>
                        <S.SubTitle>현재 상태</S.SubTitle>
                        <S.SelectField
                            value={selectedStatus}
                            onChange={e => setSelectedStatus(e.target.value)}
                        >
                            <option value="" disabled selected>
                                {' '}
                                *현재 당신의 상태를 선택해주세요.
                            </option>
                            {status_options.map(status => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </S.SelectField>
                    </S.Box>
                    <S.Box>
                        <S.SubTitle>전공</S.SubTitle>
                        <S.SelectField
                            value={selectedMajor}
                            onChange={e => setSelectedMajor(e.target.value)}
                        >
                            <option value="" disabled selected>
                                {' '}
                                *현재 전공하고 있는 분야를 선택해주세요.
                            </option>
                            {Object.entries(groupedMajorData).map(
                                ([group, majors]) => (
                                    <optgroup key={group} label={group}>
                                        {majors.map(major => (
                                            <option key={major} value={major}>
                                                {major}
                                            </option>
                                        ))}
                                    </optgroup>
                                ),
                            )}
                        </S.SelectField>
                    </S.Box>
                    <S.Box>
                        <S.SubTitle>희망 직무</S.SubTitle>
                        <S.SelectField
                            value={selectedJob}
                            onChange={e => setSelectedJob(e.target.value)}
                        >
                            <option value="" disabled selected>
                                {' '}
                                *희망하시는 직무를 선택해주세요.
                            </option>
                            {Object.entries(groupedJobData).map(
                                ([group, jobs]) => (
                                    <optgroup key={group} label={group}>
                                        {jobs.map(job => (
                                            <option key={job} value={job}>
                                                {job}
                                            </option>
                                        ))}
                                    </optgroup>
                                ),
                            )}
                        </S.SelectField>
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
