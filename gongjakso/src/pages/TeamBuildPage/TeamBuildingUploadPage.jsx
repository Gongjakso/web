import React, { useState } from 'react';
import * as S from './TeamBuildingUploadPage.Styled';

const TeamBuildingUploadPage = ({ posts }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        competitionWebsite: '',
        maxMembers: '',
        recruitmentField: '',
        meetingMethod: 'offline',
        meetingLocation: '',
        startDate: '',
        endDate: '',
        inquiryMethod: '',
        openKakaoLink: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // 폼 데이터를 서버로 전송 또는 다른 처리를 수행
        console.log(formData);
    };

    console.log(posts);
    return (
        <>
            {posts === 'contest' && (
                <form onSubmit={handleSubmit}>
                    <label>
                        제목 (필수 입력):
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        설명:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        공모전 홈페이지:
                        <input
                            type="text"
                            name="competitionWebsite"
                            value={formData.competitionWebsite}
                            onChange={handleChange}
                        />
                    </label>

                    {/* 나머지 입력항목들도 유사하게 작성 */}

                    <button type="submit">제출</button>
                </form>
            )}
            {posts === 'project' && <p>프로젝트 팀빌드</p>}
        </>
    );
};

export default TeamBuildingUploadPage;
