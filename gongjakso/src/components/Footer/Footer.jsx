import React from 'react';
import * as S from './Footer.Styled';
import footerLogoImage from '../../assets/images/footerlogo.png';

const Footer = () => {
    return (
        <div
            style={{
                borderTop: '1px solid #aaa',
                width: '60%',
                textAlign: 'center',
                margin: '0 auto',
            }}
        >
            <S.FooterContainer>
                <img
                    src={footerLogoImage}
                    alt="footer logo"
                    style={{ width: '170px', height: 'auto' }}
                />
                <S.FooterInfoBox>
                    <S.FooterInfo> Contact: gongjack@naver.com </S.FooterInfo>
                    <S.FooterInfo> All copyright by 2023 공작소 </S.FooterInfo>
                </S.FooterInfoBox>
                <S.FooterButtonBox>
                    <S.FooterButton> 문의하기 </S.FooterButton>
                    <S.FooterButton> 이용약관 </S.FooterButton>
                    <S.FooterButton> 개인정보처리방침 </S.FooterButton>
                    <S.FooterButton> 서비스소개 </S.FooterButton>
                </S.FooterButtonBox>
            </S.FooterContainer>
        </div>
    );
};

export default Footer;
