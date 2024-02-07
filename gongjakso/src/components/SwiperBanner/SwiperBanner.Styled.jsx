import styled from 'styled-components';
import bannerImage from '../../assets/images/banner.svg';

export const Banners = styled.div`
    background-image: url(${bannerImage});
    background-size: cover;
    width: 100%;
    height: 440px;
    display: flex;
    padding: 80px;
`;

export const TagP = styled.p`
    font-size: 2rem;
    font-weight: 1000;
    color: white;
`;
