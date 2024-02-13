import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import * as S from './SwiperBanner.Styled';

const SwiperBanner = banners => {
    const bannerData = banners.BannerImg;
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
        >
            {bannerData.map((img, i) => (
                <SwiperSlide key={i}>
                    <S.Banners src={img} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperBanner;
