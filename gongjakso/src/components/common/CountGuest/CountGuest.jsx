import React, { useState } from 'react';
import * as S from './CountGuest.Styled';

const CountGuest = ({ roles, onQuantityChange }) => {
    const [isToggleBox, setIsToggleBox] = useState();
    const handleToggleBox = () => {
        setIsToggleBox(!isToggleBox);
    };

    return (
        <>
            <S.SearchBox>
                <S.Span onClick={handleToggleBox}>
                    공모전에 필요한 역할을 선택해주세요!
                </S.Span>
                <S.SelectQty $isDisplay={isToggleBox}>
                    {Object.entries(roles).map(([role, quantity]) => (
                        <S.SelectAdultNum key={role}>
                            <S.Title>{role}</S.Title>
                            <S.CountBtn>
                                <S.Button
                                    onClick={() =>
                                        onQuantityChange(role, false)
                                    }
                                >
                                    -
                                </S.Button>
                                {quantity}
                                <S.Button
                                    onClick={() => onQuantityChange(role, true)}
                                >
                                    +
                                </S.Button>
                            </S.CountBtn>
                        </S.SelectAdultNum>
                    ))}
                </S.SelectQty>
            </S.SearchBox>
        </>
    );
};

export default CountGuest;
