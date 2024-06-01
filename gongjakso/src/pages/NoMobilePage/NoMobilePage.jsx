import React from 'react';
import * as S from './NoMobilePage.Styled';

const NoMobilePage = () => {
    const text = 'Coming Soon';

    return (
        <>
            <S.NoMobileContainer>
                <S.MobileContent>
                    <S.NoMobileIcon />
                    <S.ContentDiv>
                        <S.subTitleP>
                            모바일 버전은 준비중에 있습니다.
                        </S.subTitleP>
                        <S.subTitleP>먼저 PC에서 만나보세요!</S.subTitleP>
                    </S.ContentDiv>
                    <S.CircleGroup />
                    <S.MainTitle>
                        {text.split('').map((char, index) => (
                            <S.Span key={index} style={{ '--i': index + 1 }}>
                                {char}
                            </S.Span>
                        ))}
                    </S.MainTitle>
                </S.MobileContent>
            </S.NoMobileContainer>
        </>
    );
};

export default NoMobilePage;
