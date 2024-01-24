import styled from 'styled-components';

export const IconButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    gap: 5px;
    color: ${({ theme, $hover, $active }) =>
        $active ? '#00A3FF' : $hover ? '#00A3FF' : theme.main};
`;

export const IconNameSpan = styled.span`
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme, $hover, $active }) =>
        $active ? theme.main : $hover ? theme.main : theme.mainFont};
`;
export const ProfileIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 10px;
`;
