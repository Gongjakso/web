import React, { useMemo, useState, useEffect } from 'react';
import * as S from './MyInfoStyled';
import majorData from '../../utils/majorData.json';
import jobData from '../../utils/jobData.json';
import { putMyInfo } from '../../service/profile_service';
import { getMyInfo } from '../../service/profile_service';
import { useLocation, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [myData, setMyData] = useState(null);

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [major, setMajor] = useState('');
    const [job, setJob] = useState('');
    useEffect(() => {
        getMyInfo().then(res => {
            setMyData(res.data);
        });
    }, []);

    useEffect(() => {
        if (myData) {
            setName(myData.name);
            setStatus(myData.status);
            setMajor(myData.major);
            setJob(myData.job);
        }
    }, [myData]);

    const status_options = [
        '대학 재학 중',
        '대학 휴학 중',
        '취업 준비 중',
        '기타',
    ];

    const handleSaveClick = e => {
        e.preventDefault();

        putMyInfo(name, major, job, status)
            .then(() => {
                navigate('/profile');
            })
            .catch(error => {
                console.error(error);
            });
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
