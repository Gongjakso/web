import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import * as S from './SwiperBanner.Styled';

const SwiperBanner = banners => {
    const bannerData = banners?.BannerImg;
    const bannerLinks = banners?.BannerLink;
    return (
        <S.SwiperContainer>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                loop={false}
                slidesPerView={1}
                navigation
                pagination={{
                    type: 'fraction',
                }}
                scrollbar={{ draggable: true }}
            >
                {bannerData?.map((img, i) => (
                    <SwiperSlide key={i}>
                        <a
                            href={bannerLinks[i]}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <S.Banners src={img} />
                        </a>{' '}
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.SwiperContainer>
    );
};

export default SwiperBanner;
