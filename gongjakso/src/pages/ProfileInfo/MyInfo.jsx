import React, { useMemo, useState, useEffect } from 'react';
import * as S from './MyInfoStyled';
import majorData from '../../utils/majorData.json';
import jobData from '../../utils/jobData.json';
import { putMyInfo } from '../../service/profile_service';
import { getMyInfo } from '../../service/profile_service';
import { Link, useNavigate } from 'react-router-dom';

const groupData = data => {
    return data.reduce((groups, item) => {
        const group = groups[item.id] || [];
        group.push(item);
        groups[item.id] = group;
        return groups;
    }, {});
};

const MyInfo = () => {
    const groupedMajorData = useMemo(() => groupData(majorData), []);
    const groupedJobData = useMemo(() => groupData(jobData), []);
    const accessToken = localStorage.getItem('accessToken');
    const savedInfo = localStorage.getItem('myInfoData')
        ? JSON.parse(localStorage.getItem('myInfoData'))
        : {};

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [major, setMajor] = useState('');
    const [job, setJob] = useState('');
    const navigate = useNavigate();

    const status_options = [
        '대학 재학 중',
        '대학 휴학 중',
        '취업 준비 중',
        '기타',
    ];
    const myInfoData = {
        name: name,
        status: status,
        major: major,
        job: job,
    };

    // MyInfo 컴포넌트에서 '정보 저장하기' 버튼 클릭 이벤트 처리
    const handleSaveClick = e => {
        // 링크 클릭 이벤트의 기본 동작을 막음
        e.preventDefault();

        putMyInfo(myInfoData, accessToken)
            .then(() => {
                return getMyInfo(accessToken);
            })
            .then(res => {
                setName(res.name);
                setStatus(res.status);
                setMajor(res.major);
                setJob(res.job);

                localStorage.setItem('myInfoData', JSON.stringify(myInfoData));

                navigate('/profile');
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        const savedInfo = localStorage.getItem('myInfoData');

        if (savedInfo) {
            const parsedInfo = JSON.parse(savedInfo);
            setName(parsedInfo.name);
            setStatus(parsedInfo.status);
            setMajor(parsedInfo.major);
            setJob(parsedInfo.job);
        }
    }, []);

    return (
        <S.Div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>나의 정보</S.Title>
            </S.TopBox>
            <S.Formset>
                <S.DetailBox>
                    <S.SubTitle>이름</S.SubTitle>
                    <S.InputField
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>현재 상태</S.SubTitle>
                    <S.SelectField
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        {status_options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </S.SelectField>
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>전공</S.SubTitle>
                    <S.SelectField
                        value={major}
                        onChange={e => setMajor(e.target.value)}
                    >
                        {Object.entries(groupedMajorData).map(
                            ([group, majors]) => (
                                <optgroup key={group} label={group}>
                                    {majors.map(majorItem => (
                                        <option
                                            key={majorItem.key}
                                            value={`${majorItem.id}/${majorItem.key}`}
                                        >
                                            {majorItem.key}
                                        </option>
                                    ))}
                                </optgroup>
                            ),
                        )}
                    </S.SelectField>
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>희망 직무</S.SubTitle>
                    <S.SelectField
                        value={job}
                        onChange={e => setJob(e.target.value)}
                    >
                        {Object.entries(groupedJobData).map(([group, jobs]) => (
                            <optgroup key={group} label={group}>
                                {jobs.map(jobItem => (
                                    <option
                                        key={jobItem.key}
                                        value={`${jobItem.id}/${jobItem.key}`}
                                    >
                                        {jobItem.key}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </S.SelectField>
                </S.DetailBox>
            </S.Formset>
            <S.Wrapper>
                <S.SetBox onClick={handleSaveClick}>정보 저장하기</S.SetBox>
            </S.Wrapper>
        </S.Div>
    );
};

export default MyInfo;
