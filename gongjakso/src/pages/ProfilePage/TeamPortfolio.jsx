import React from 'react';
import styled from 'styled-components';

let BottomBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #b7b7b7;
    width: 30%;
    margin: auto;
`;

//이메일 작성 후 확인 버튼
let CheckBox = styled.button`
    width: 100px;
    cursor: pointer;
    position: relative;
    top: 40px;
    border: 1px solid #b7b7b7;
    background-color: transparent;
    color: black;
    border-radius: 7px;
`;

const TeamPortfolio = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>나의 포트폴리오</h1>
            <br></br>
            <h2>
                다양한 포트폴리오 양식을 구매하고,<br></br>선배들의 조언까지!
            </h2>
            <br></br>
            <h2 style={{ color: '#0054FF' }}>
                포트폴리오 탭<br></br>Coming Soon
            </h2>
            <br></br>
            <BottomBox>
                <input
                    type="email"
                    placeholder="*포트폴리오 탭을 가장 먼저 만나보고 싶다면 메일 주소를 남겨주세요!"
                    style={{
                        border: 'none',
                        outline: 'none',
                        backgroundColor: 'transparent',
                        width: '100%',
                    }}
                />
                <CheckBox>확인</CheckBox>
            </BottomBox>
        </div>
    );
};

export default TeamPortfolio;
