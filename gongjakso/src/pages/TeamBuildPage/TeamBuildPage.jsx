import React, { useState } from 'react';
import * as S from './TeamBuildPage.Styled';
import TeamBuildingUploadPage from './TeamBuildingUploadPage';

const TeamBuildPage = () => {
    const [currentContent, setCurrentContent] = useState('default'); // default 값을 설정
    const handleButtonClick = content => {
        setCurrentContent(content);
    };
    return (
        <>
            <S.Container>
                <S.TitleContent>
                    <S.Text>
                        3분만에 공모전/프로젝트 팀을 꾸릴 수 있어요!
                    </S.Text>
                    <S.ButtonSet>
                        <S.Button
                            type="button"
                            onClick={() => handleButtonClick('contest')}
                        >
                            <S.Text>공모전 팀 만들기</S.Text>
                        </S.Button>
                        <S.Button
                            type="button"
                            onClick={() => handleButtonClick('project')}
                        >
                            <S.Text>프로젝트 팀 만들기</S.Text>
                        </S.Button>
                    </S.ButtonSet>
                </S.TitleContent>
                {currentContent === 'contest' && (
                    <S.BuildDiv>
                        <TeamBuildingUploadPage posts={currentContent} />
                    </S.BuildDiv>
                )}
                {currentContent === 'project' && (
                    <S.BuildDiv>
                        <TeamBuildingUploadPage posts={currentContent} />
                    </S.BuildDiv>
                )}
                {currentContent === 'default' && (
                    <S.ImageContent>
                        <S.ImageDiv />
                        <S.Text $isMain="main">
                            팀빌딩 카테고리를 설정해주세요
                        </S.Text>
                    </S.ImageContent>
                )}
            </S.Container>
        </>
    );
};

export default TeamBuildPage;
