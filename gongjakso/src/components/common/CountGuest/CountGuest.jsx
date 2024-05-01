import React, { useEffect, useState } from 'react';
import * as S from './CountGuest.Styled';

const CountGuest = ({ isProject, onApply }) => {
    const [isToggleBox, setIsToggleBox] = useState(false);
    const [roles, setRoles] = useState({
        PLAN: 0,
        DESIGN: 0,
        ...(isProject && { FE: 0, BE: 0 }),
        ETC: 0,
    });
    const handleToggleBoxOpen = () => {
        setIsToggleBox(!isToggleBox);
    };
    const handleToggleBoxClose = () => {
        setIsToggleBox(false);
    };

    const handleApply = () => {
        onApply({
            category,
        });
        handleToggleBoxClose(true);
    };

    const handleQuantityChange = (role, increment) => {
        setRoles(prevRoles => ({
            ...prevRoles,
            [role]: increment
                ? prevRoles[role] + 1
                : Math.max(0, prevRoles[role] - 1),
        }));
    };

    const category = {
        categories: Object.entries(roles)
            .filter(([_, size]) => size !== 0) // Filter out categories with size 0
            .map(([categoryType, size]) => ({ categoryType, size })),
    };

    const getRoleText = role => {
        switch (role) {
            case 'PLAN':
                return '기획/아이디어';
            case 'DESIGN':
                return '디자이너';
            case 'ETC':
                return '기타';
            case 'FE':
                return '프론트엔드';
            case 'BE':
                return '백엔드';
            default:
                return role;
        }
    };

    return (
        <S.Container>
            <S.SearchBox>
                <S.Span onClick={handleToggleBoxOpen}>
                    {Object.entries(roles).some(
                        ([role, quantity]) => quantity > 0,
                    )
                        ? Object.entries(roles)
                              .filter(([_, quantity]) => quantity > 0)
                              .map(([role, quantity]) => `${role}: ${quantity}`)
                              .join(', ')
                        : '공모전에 필요한 역할을 선택해주세요!'}
                </S.Span>
            </S.SearchBox>

            <S.SelectQty $isDisplay={isToggleBox}>
                {Object.entries(roles).map(([role, quantity]) => (
                    <S.SelectAdultNum key={role}>
                        <S.Title>{getRoleText(role)}</S.Title>
                        <S.CountBtn>
                            <S.Button
                                onClick={() =>
                                    handleQuantityChange(role, false)
                                }
                            >
                                -
                            </S.Button>
                            {quantity}
                            <S.Button
                                onClick={() => handleQuantityChange(role, true)}
                            >
                                +
                            </S.Button>
                        </S.CountBtn>
                    </S.SelectAdultNum>
                ))}
                <S.CountBtn>
                    <S.ApplyBtn $isApply={true} onClick={handleToggleBoxClose}>
                        취소
                    </S.ApplyBtn>
                    <S.ApplyBtn $isApply={false} onClick={handleApply}>
                        적용
                    </S.ApplyBtn>
                </S.CountBtn>
            </S.SelectQty>
        </S.Container>
    );
};

export default CountGuest;
