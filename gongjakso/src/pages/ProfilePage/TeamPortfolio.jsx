import React from 'react'
import myPagePortfolioCheck from '../../assets/images/myPagePortfolioCheck.svg';

const TeamPortfolio = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>나의 포트폴리오</h1>
            <br></br>
            <h2>다양한 포트폴리오 양식을 구매하고,<br></br>선배들의 조언까지!</h2>
            <br></br>
            <h2 style={{color: '#0054FF'}}>포트폴리오 탭<br></br>Coming Soon</h2>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #B7B7B7', width: '30%', margin: 'auto'}}>
                <input type="email" placeholder="*포트폴리오 탭을 가장 먼저 만나보고 싶다면 메일 주소를 남겨주세요!" style={{border: 'none', outline: 'none', backgroundColor: 'transparent', width: '70%'}} />
                <img src={myPagePortfolioCheck} alt="Check" style={{marginLeft: 'auto', cursor: 'pointer', position: 'relative', top: '60px'}} />
            </div>
        </div>
    )
}

export default TeamPortfolio;
