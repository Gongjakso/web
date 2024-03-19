import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';
import { useForm } from 'react-hook-form';

import { putMyInfo } from '../../service/profile_service';
import InfoDrop from '../../components/common/Input/InfoDrop';
import { SelectInput } from '../../components/common/Input/Input';

import { majorData } from '../../utils/majorData.jsx';
import { jobData } from '../../utils/jobData.jsx';

const SignUpModal = ({ closeSignUpModal, name }) => {
    const navigate1 = useNavigate();

    const [selectedStatus, setSelectedStatus] = useState(
        '* 현재 당신의 상태를 선택해주세요.',
    );
    const [selectedMajor, setSelectedMajor] = useState(
        '* 현재 전공하고 있는 분야를 선택해주세요.',
    );
    const [selectedJob, setSelectedJob] = useState(
        '* 희망하시는 직무를 선택해주세요.',
    );

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

    // const groupMajorData = data => {
    //     return data.reduce((groups, item) => {
    //         const group = groups[item.id] || [];
    //         group.push(item.key);
    //         groups[item.id] = group;
    //         return groups;
    //     }, {});
    // };

    // const groupJobData = data => {
    //     return data.reduce((groups, item) => {
    //         const group = groups[item.id] || [];
    //         group.push(item.key);
    //         groups[item.id] = group;
    //         return groups;
    //     }, {});
    // };

    // const groupedMajorData = useMemo(() => groupMajorData(majorData), []);
    // const groupedJobData = useMemo(() => groupJobData(jobData), []);

    const handleModalClick = path => {
        putMyInfo(name, selectedMajor, selectedJob, selectedStatus);
        closeSignUpModal();
        navigate1(path);
    };

    const status_items = status_options.map(item => ({
        label: item,
        onSelect: () => {
            setSelectedStatus(item);
        },
    }));
    const major_items = () => {
        return majorData.map(item => ({
            label: item.class,
            items: item.major.map(major => ({
                label: major,
                onSelect: () => {
                    setSelectedMajor(major);
                },
            })),
        }));
    };
    const job_items = () => {
        return jobData.map(item => ({
            label: item.type,
            items: item.work.map(work => ({
                label: work,
                onSelect: () => {
                    setSelectedJob(work);
                },
            })),
        }));
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

                        {/* <S.SelectField
                            value={selectedStatus}
                            onChange={e => setSelectedStatus(e.target.value)}
                        >
                            <option value="" disabled>
                                {' '}
                                *현재 당신의 상태를 선택해주세요.
                            </option>
                            {status_options.map(status => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </S.SelectField> */}

                        <InfoDrop items={status_items} title={selectedStatus} />
                    </S.Box>
                    <S.Box>
                        <S.SubTitle>전공</S.SubTitle>
                        {/* <S.SelectField
                            value={selectedMajor}
                            onChange={e => setSelectedMajor(e.target.value)}
                        >
                            <option value="" disabled>
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
                        </S.SelectField> */}
                        <InfoDrop items={major_items()} title={selectedMajor} />
                    </S.Box>
                    <S.Box>
                        <S.SubTitle>희망 직무</S.SubTitle>

                        {/* <S.SelectField
                            value={selectedJob}
                            onChange={e => setSelectedJob(e.target.value)}
                        >
                            <option value="" disabled>
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
                        </S.SelectField> */}
                        <InfoDrop items={job_items()} title={selectedJob} />
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
