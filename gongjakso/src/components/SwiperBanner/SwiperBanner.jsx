import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import * as S from './SwiperBanner.Styled';

const SwiperBanner = ({ banner1: BannerComponent }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{
                type: 'fraction',
            }}
            scrollbar={{ draggable: true }}
            // onSwiper={swiper => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <S.Banners>
                    <S.TagP>공작소가 뭐하는 곳이냐구요?</S.TagP>
                </S.Banners>
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponent />
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponent />
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponent />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperBanner;
