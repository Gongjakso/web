import React from 'react';
import * as S from './NoContents.styled';

const NoContents = props => {
    const { mainTxt, subTxt, link, btnLabel } = props;
    return (
        <S.NoContentsContainer>
            <S.Nopost />
            <p>
                <span>{mainTxt}</span>
                <span>{subTxt}</span>
            </p>
        </S.NoContentsContainer>
    );
};

export default NoContents;
