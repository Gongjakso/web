import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import myPageImage from '../../assets/images/My_page.svg';
import * as S from './Header.Styled';
import backGroundImage from '../../assets/images/background.png';

const Header = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/'; // 메인 페이지 여부 확인
    const [headerStyle, setHeaderStyle] = useState({});

    useEffect(() => {
        const newHeaderStyle = isMainPage
            ? {
                  backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.01)), linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.37)), url(${backGroundImage})` /* 그라데이션 스타일 */,
              }
            : { backgroundColor: '#FFFFFF' }; // 나머지 페이지에서의 스타일

        setHeaderStyle(newHeaderStyle);
    }, [isMainPage, location.pathname]);

    return (
        <S.HeaderBase style={headerStyle}>
            <Link
                exact="true"
                style={{
                    textDecoration: 'none',
                    color: '#000',
                    marginLeft: 350,
                }}
                to="/"
            >
                <img
                    style={{
                        width: '100px',
                        height: 'auto',
                        marginTop: '10px',
                    }}
                    src={logoImage}
                    alt="logo"
                />
            </Link>
            <S.ItemList>
                <Link
                    style={{
                        marginLeft: 120,
                        fontSize: 15,
                        color: '#000000',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textDecoration: 'none',
                    }}
                    to="/contest"
                >
                    {' '}
                    공모전 공고{' '}
                </Link>

                <Link
                    style={{
                        marginLeft: 70,
                        fontSize: 15,
                        color: '#000000',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                    to="/project"
                >
                    {' '}
                    프로젝트 공고{' '}
                </Link>

                <Link
                    style={{
                        marginLeft: 70,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#000000',
                        textDecoration: 'none',
                    }}
                    to="/teambuilding"
                >
                    {' '}
                    팀빌딩{' '}
                </Link>

                <Link
                    style={{
                        marginLeft: 70,
                        fontSize: 15,
                        color: '#000000',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                    to="/calender"
                >
                    {' '}
                    캘린더{' '}
                </Link>

                <Link
                    style={{
                        marginLeft: 300,
                        fontWeight: 700,
                        alignItems: 'center',
                        display: 'flex',
                        fontSize: 15,
                        color: '#000000',
                        textDecoration: 'none',
                    }}
                    to="/mypage"
                >
                    {' '}
                    <img
                        style={{
                            width: '30px',
                            height: 'auto',
                            marginRight: '10px',
                        }}
                        src={myPageImage}
                        alt="myPageLogo"
                    />{' '}
                    MY{' '}
                </Link>
            </S.ItemList>
        </S.HeaderBase>
    );
};

export default Header;
