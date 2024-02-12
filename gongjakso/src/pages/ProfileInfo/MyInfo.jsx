import React, { useMemo, useState, useEffect } from 'react';
import * as S from './MyInfoStyled';
import majorData from '../../utils/majorData.json';
import jobData from '../../utils/jobData.json';
import axios from 'axios';
import { putMyInfo } from '../../service/profile_service';

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

const MyInfo = () => {
    const groupedMajorData = useMemo(() => groupMajorData(majorData), []);
    const groupedJobData = useMemo(() => groupJobData(jobData), []);
    const accessToken = localStorage.getItem('accessToken');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [major, setMajor] = useState('');
    const [job, setJob] = useState('');
    const [userInfo, setUserInfo] = useState(null);

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

    const handleProfileClick = () => {
        putMyInfo(myInfoData).then(res => console.log(res.data));
    };

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
                    <S.SubTitle>전공</S.SubTitle>
                    <S.SelectField
                        value={major}
                        onChange={e => setMajor(e.target.value)}
                    >
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
                </S.DetailBox>

                <S.DetailBox>
                    <S.SubTitle>희망 직무</S.SubTitle>
                    <S.SelectField
                        value={job}
                        onChange={e => setJob(e.target.value)}
                    >
                        {Object.entries(groupedJobData).map(([group, jobs]) => (
                            <optgroup key={group} label={group}>
                                {jobs.map(job => (
                                    <option key={job} value={job}>
                                        {job}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </S.SelectField>
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
            </S.Formset>
            <S.Wrapper>
                <S.SetBox onClick={handleProfileClick}>정보 저장하기</S.SetBox>
            </S.Wrapper>
        </S.Div>
    );
};

export default MyInfo;
