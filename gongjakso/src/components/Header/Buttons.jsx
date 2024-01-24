import React from 'react';
import * as S from './Buttons.styled';
import useCustomNavigate from '../../hooks/useNavigate';
import myPageImage from '../../assets/images/My_page.svg';

const handleMouseEnter = (name, setHover) => {
    setHover(prev => ({
        ...prev,
        [name]: true,
    }));
};

const handleMouseLeave = (name, setHover) => {
    setHover(prev => ({
        ...prev,
        [name]: false,
    }));
};

const handleActive = (name, setActive) => {
    setActive(name);
};

const iconNames = {
    contest: '공모전 공고',
    project: '프로젝트 공고',
    teambuild: '팀빌딩',
    calendar: '캘린더',
    profile: 'MY',
};
const GenericIconButton = ({ type, hover, setHover, active, setActive }) => {
    const handleNavigate = useCustomNavigate();
    const iconName = iconNames[type];

    return (
        <S.IconButton
            type="button"
            name={type}
            $active={active === type}
            onMouseEnter={event =>
                handleMouseEnter(event.currentTarget.name, setHover)
            }
            onMouseLeave={event =>
                handleMouseLeave(event.currentTarget.name, setHover)
            }
            onClick={event => {
                handleActive(event.currentTarget.name, setActive);
                handleNavigate(`/${type}`);
            }}
        >
            {type === 'profile' ? (
                <S.IconNameSpan $hover={hover[type]} $active={active === type}>
                    <S.ProfileIcon src={myPageImage} />
                    {iconName}
                </S.IconNameSpan>
            ) : (
                <S.IconNameSpan $hover={hover[type]} $active={active === type}>
                    {iconName}
                </S.IconNameSpan>
            )}
        </S.IconButton>
    );
};

export const ContestBtn = props => (
    <GenericIconButton type="contest" {...props} />
);
export const ProjectBtn = props => (
    <GenericIconButton type="project" {...props} />
);
export const TeambuildBtn = props => (
    <GenericIconButton type="teambuild" {...props} />
);
export const CalendarBtn = props => (
    <GenericIconButton type="calendar" {...props} />
);
export const ProfileBtn = props => (
    <GenericIconButton type="profile" {...props} />
);
