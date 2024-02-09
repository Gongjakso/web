import React, { useMemo } from 'react';
import * as S from './MyInfoStyled';
import majorData from '../../utils/majorData.json';
import jobData from '../../utils/jobData.json';

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

    return (
        <S.Div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>나의 정보</S.Title>
            </S.TopBox>
            <S.Formset>
                <S.DetailBox>
                    <S.SubTitle>이름</S.SubTitle>
                    <S.InputField type="text" />
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>전공</S.SubTitle>
                    <S.SelectField>
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
                    <S.SelectField>
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
            </S.Formset>
            <S.Wrapper>
                <S.SetBox>정보 저장하기</S.SetBox>
            </S.Wrapper>
        </S.Div>
    );
};

export default MyInfo;
