import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../../assets/images/Arrow.svg';
import My_page_big from '../../assets/images/My_page_big.svg';

let TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

let DetailBox = styled.div`
    position: relative;
    transform: translateY(150%);
    padding-right: 30px;
    line-height: 25px;
    text-align: right;
`;

//나의 포트폴리오 파란색 박스
let PortfolioBox = styled.button`
    width: 150px;
    height: 40px;
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    transform: translateY(150%);
    border-radius: 25px;
    margin-left: 30px;
`;
let TopDetail = styled.div`
    padding: 10px 200px;
    padding-top: 150px;
`;

let GlobalDetail = styled.div`
    padding: 10px 200px;
    display: flex;
    align-items: center;
`;

const ProfilePage = () => {
    return (
        <div>
            <TopBox>
                <DetailBox>
                    <h3>최수빈</h3>
                    <h5>공학/소프트웨어학</h5>
                </DetailBox>
                <img
                    src={My_page_big}
                    alt="My_page_big"
                    style={{
                        width: '150px',
                        marginRight: '10px',
                        transform: 'translateY(50%)',
                    }}
                />
                <Link to="/teamPortfolio">
                    <PortfolioBox>나의 포트폴리오</PortfolioBox>
                </Link>
            </TopBox>
            <TopDetail>
                <h3>내가 모집 중인 팀</h3>
            </TopDetail>

            <GlobalDetail>
                <h3>내가 지원한 팀</h3>
                <Link to="/teamSupport">
                    <img
                        src={Arrow}
                        alt="myPageNext"
                        width="50px"
                        height="22px"
                    />
                </Link>
            </GlobalDetail>

            <GlobalDetail>
                <h3>내가 참여한 공모전/프로젝트</h3>
                <Link to="/teamPart">
                    <img
                        src={Arrow}
                        alt="myPageNext"
                        width="50px"
                        height="22px"
                    />
                </Link>
            </GlobalDetail>
        </div>
    );
};

export default ProfilePage;
