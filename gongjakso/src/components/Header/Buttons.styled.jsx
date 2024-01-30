import styled from 'styled-components';

export const IconButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    gap: 5px;
    color: ${({ theme, $active, $type }) => {
        if ($active) {
            if ($type === 'project') {
                return theme.Pink;
            } else if ($type === 'contest') {
                return theme.Main2;
            }
            return theme.main;
        }
    }};
`;

export const IconNameSpan = styled.span`
    font-weight: ${({ $hover, $active }) =>
        $active ? '700' : $hover ? '700' : '100'};

    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme, $hover, $active }) =>
        $active ? theme.main : $hover ? theme.main : theme.mainFont};
`;
export const ProfileIcon = styled.img`
    width: 25px;
    height: 25x;
    margin: 0 10px;
`;
