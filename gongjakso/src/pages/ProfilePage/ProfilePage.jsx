import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import nextIcon from '../../assets/images/myPageNext.svg';
import myPagePortfolio from '../../assets/images/myPagePortfolio.svg';
import myPageProfile from '../../assets/images/myPageProfile.svg';


let DetailBox = styled.div`
    position: relative;
    top: 75px;
    padding-right: 30px;
    line-height:5px;
    text-align: right
`;

let TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end
`;

let TopDetail = styled.div`
    padding: 10px 200px;
    padding-top: 150px
`;

let GlobalDetail = styled.div`
    padding: 10px 200px;
    display: flex;
    alignItems: center
`;


const ProfilePage = () => {
    return (
        <div>
            <TopBox>
            <DetailBox>
                <h3>최수빈</h3>
                <h5>공학/소프트웨어학</h5>
            </DetailBox>
            <img src={myPageProfile} alt="myPageProfile" style={{width: '150px', marginRight: '10px', transform: 'translateY(50%)'}} />
                <Link to="/teamPortfolio">
                    <img src={myPagePortfolio} alt="myPagePortfolio" style={{width: '150px', transform: 'translateY(150%)'}} />
                </Link>
            </TopBox>
            <TopDetail>
                <h3>내가 모집 중인 팀</h3>
            </TopDetail>

            <GlobalDetail>
                <h3>내가 지원한 팀</h3>
                <Link to="/teamSupport" style={{margin:"17px"}}>
                    <img src={nextIcon} alt="myPageNext" width="50px" height="22px" />
                </Link>
            </GlobalDetail>

            <GlobalDetail>
                <h3>내가 참여한 공모전/프로젝트</h3>
                <Link to="/teamPart" style={{margin:"17px"}}>
                    <img src={nextIcon} alt="myPageNext" width="50px" height="22px" />
                </Link>

            </GlobalDetail>
        </div>
    )
}

export default ProfilePage;
