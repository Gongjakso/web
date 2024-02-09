import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import * as S from './Header.Styled';

// import backGroundImage from '../../assets/images/background.png';
import {
    CalendarBtn,
    ContestBtn,
    ProfileBtn,
    ProjectBtn,
    TeambuildBtn,
} from './Buttons';

const Header = () => {
    const location = useLocation();
    // const isMainPage = location.pathname === '/'; // 메인 페이지 여부 확인
    const [hover, setHover] = useState({
        contest: false,
        project: false,
        teambuild: false,
        calendar: false,
        profile: false,
    });

    const activeTab = path => {
        if (path.includes('/contest')) return 'contest';
        if (path.includes('/project')) return 'project';
        if (path.includes('/teambuild')) return 'teambuild';
        if (path.includes('/calendar')) return 'calendar';
        if (path.includes('/profile')) return 'profile';
        return '';
    };

    const [active, setActive] = useState(activeTab(location.pathname));

    useEffect(() => {
        setActive(activeTab(location.pathname));
    }, [location]);

    return (
        <S.Header>
            <S.HeaderBase>
                <S.logo>
                    <Link exact="true" to="/">
                        <img src={logoImage} alt="logo" />
                    </Link>
                </S.logo>
                <S.ItemList>
                    <li>
                        <ContestBtn
                            hover={hover}
                            setHover={setHover}
                            active={active}
                            setActive={setActive}
                        />
                    </li>
                    <li>
                        <ProjectBtn
                            hover={hover}
                            setHover={setHover}
                            active={active}
                            setActive={setActive}
                        />
                    </li>
                    <li>
                        <TeambuildBtn
                            hover={hover}
                            setHover={setHover}
                            active={active}
                            setActive={setActive}
                        />
                    </li>
                    <li>
                        <CalendarBtn
                            hover={hover}
                            setHover={setHover}
                            active={active}
                            setActive={setActive}
                        />
                    </li>
                    <S.ProfileArea>
                        <ProfileBtn
                            hover={hover}
                            setHover={setHover}
                            active={active}
                            setActive={setActive}
                        />
                    </S.ProfileArea>
                </S.ItemList>
            </S.HeaderBase>
        </S.Header>
    );
};

export default Header;
