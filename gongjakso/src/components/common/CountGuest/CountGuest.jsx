import React, { useEffect, useState } from 'react';
import * as S from './CountGuest.Styled';

const CountGuest = ({ isProject, maxGuests, onApply }) => {
    const [isToggleBox, setIsToggleBox] = useState(false);
    const [roles, setRoles] = useState({
        PLAN: 0,
        DESIGN: 0,
        ...(isProject && { FE: 0, BE: 0 }),
        ETC: 0,
    });

    const [totalSelectedGuests, setTotalSelectedGuests] = useState(0);

    useEffect(() => {
        // roles 객체가 변경될 때마다 totalSelectedGuests를 업데이트
        const total = Object.values(roles).reduce(
            (acc, count) => acc + count,
            0,
        );
        setTotalSelectedGuests(total);
    }, [roles]);

    const handleToggleBoxOpen = () => {
        setIsToggleBox(!isToggleBox);
    };
    const handleToggleBoxClose = () => {
        setIsToggleBox(false);
    };

    const handleApply = () => {
        onApply({
            category,
            totalSelectedGuests,
        });
        handleToggleBoxClose(true);
    };

    const handleQuantityChange = (role, increment) => {
        if (!increment && roles[role] <= 0) return; // 음수가 되지 않도록 처리

        setRoles(prevRoles => {
            const updatedRoles = {
                ...prevRoles,
                [role]: increment
                    ? prevRoles[role] + 1
                    : Math.max(0, prevRoles[role] - 1),
            };

            // 총 입력한 숫자가 입력한 인원수를 초과하는 경우 비활성화
            const total = Object.values(updatedRoles).reduce(
                (acc, count) => acc + count,
                0,
            );

            // 최대치를 초과하는 경우 증가하지 않도록 처리
            if (increment && total > maxGuests) {
                return prevRoles;
            }

            return updatedRoles;
        });
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
                        : isProject
                          ? '프로젝트에 필요한 역할을 선택해주세요!'
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
                                disabled={roles[role] <= 0}
                            >
                                -
                            </S.Button>
                            {quantity}
                            <S.Button
                                onClick={() => handleQuantityChange(role, true)}
                                disabled={
                                    totalSelectedGuests >= maxGuests ||
                                    quantity >= 10
                                } // 최대치를 초과하거나 개별 역할이 10 이상인 경우 버튼 비활성화
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
