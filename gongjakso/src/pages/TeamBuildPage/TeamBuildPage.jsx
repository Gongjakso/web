import React, { useState } from 'react';
import * as S from './TeamBuildPage.Styled';
import TeamBuildingUploadPage from './TeamBuildingUploadPage';

const TeamBuildPage = () => {
    const [currentContent, setCurrentContent] = useState('default'); // default 값을 설정
    const [buttonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = content => {
        setButtonClicked(content);
        setCurrentContent(content);
    };

    console.log(buttonClicked);
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
                            className={
                                buttonClicked === 'contest'
                                    ? 'contest active'
                                    : 'contest'
                            }
                            $isClick={buttonClicked}
                            onClick={() => handleButtonClick('contest')}
                        >
                            공모전 팀 만들기
                        </S.Button>
                        <S.Button
                            type="button"
                            className={
                                buttonClicked === 'project'
                                    ? 'project active'
                                    : 'project'
                            }
                            $isClick={buttonClicked}
                            onClick={() => handleButtonClick('project')}
                        >
                            프로젝트 팀 만들기
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
                        <S.Text
                            $isMain="main"
                            style={{
                                marginBottom: '100px',
                                fontFamily: 'PreMedium',
                            }}
                        >
                            팀빌딩 카테고리를 선택해주세요!
                        </S.Text>
                    </S.ImageContent>
                )}
            </S.Container>
        </>
    );
};

export default TeamBuildPage;
