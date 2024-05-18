import styled from 'styled-components';

export const Banners = styled.img`
    background-size: cover;
    width: 100%;
    display: flex;
`;

export const SwiperContainer = styled.div`
    height: 100%;
    width: 100%;

    .swiper {
        height: 370px;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 20px;
    }
    .swiper-button-prev,
    .swiper-button-next {
        font-size: 20px;
        top: 97%;
        z-index: 9999;
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

    .swiper-button-prev {
        left: 43%;
    }
    .swiper-button-next {
        right: 43%;
    }
    .swiper-pagination-fraction {
        font-size: 20px;
        font-weight: bold;
    }
`;
