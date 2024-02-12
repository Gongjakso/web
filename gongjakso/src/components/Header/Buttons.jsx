import React, { useState, useEffect } from 'react';
import * as S from './Buttons.styled';
import useCustomNavigate from '../../hooks/useNavigate';
import myPageImage from '../../assets/images/My_page.svg';
import Modal1 from '../../features/modal/LoginModal1';
import Modal2 from '../../features/modal/LoginModal2';

const iconNames = {
    contest: '공모전 공고',
    project: '프로젝트 공고',
    teambuild: '팀빌딩',
    calendar: '캘린더',
    profile: 'MY',
};

const GenericIconButton = ({ type, hover, setHover, active, setActive }) => {
    const authenticated = localStorage.getItem('accessToken');
    const handleNavigate = useCustomNavigate();
    const iconName = iconNames[type];
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [path, setPath] = useState();

    const handleProfileClick = () => {
        if (authenticated) {
            handleNavigate(`/${type}`);
        } else {
            setModal1Open(true);
        }
    };
    const handlePostingClick = () => {
        if (authenticated) {
            handleNavigate(`/${type}`);
        } else {
            setModal2Open(true);
        }
    };
    const closeModal1 = () => {
        setModal1Open(false);
    };
    const closeModal2 = () => {
        setModal2Open(false);
    };

    return (
        <>
            <S.IconButton
                type="button"
                name={type}
                $active={active === type}
                $type={active}
                onMouseEnter={() =>
                    setHover(prev => ({ ...prev, [type]: true }))
                }
                onMouseLeave={() =>
                    setHover(prev => ({ ...prev, [type]: false }))
                }
                onClick={() => {
                    setActive(type);
                    if (['profile', 'teambuild', 'calendar'].includes(type)) {
                        console.log('Profile, TeamBuild, Calendar', type);
                        handleProfileClick();
                    } else if (['project', 'contest'].includes(type)) {
                        console.log('Notice', type);
                        setPath(type);
                        handlePostingClick();
                    } else {
                        handleNavigate(`/${type}`);
                    }
                }}
            >
                <S.IconNameSpan $hover={hover[type]} $active={active === type}>
                    {type === 'profile' ? (
                        <>
                            <S.ProfileIcon src={myPageImage} />
                            {iconName}
                        </>
                    ) : (
                        iconName
                    )}
                </S.IconNameSpan>
            </S.IconButton>
            {modal1Open && <Modal1 closeModal1={closeModal1} />}
            {modal2Open && <Modal2 goPath={path} closeModal2={closeModal2} />}
        </>
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
