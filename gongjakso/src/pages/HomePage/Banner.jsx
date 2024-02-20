import react, { useEffect, useState } from 'react';
import * as S from './Banner.Styled';
import { getMainBanner } from '../../service/banner_service';

const Banner = () => {
    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        getMainBanner().then(res => {
            setSlides(res?.data);
        });
    }, []);

    return (
        <S.Wrapper>
            <S.SlideContainer>
                <S.SlideWrapper onMouseEnter={onStop} onMouseLeave={onRun}>
                    <S.Slide
                        className={`slide original ${animate ? '' : 'stop'}`}
                    >
                        {slides?.map((img, i) => (
                            <S.ListItem key={i}>
                                <img src={img?.imageUrl} alt="" />
                            </S.ListItem>
                        ))}
                    </S.Slide>
                    <S.Slide className={`slide clone ${animate ? '' : 'stop'}`}>
                        {slides?.map((img, i) => (
                            <S.ListItem key={i}>
                                <img src={img?.imageUrl} alt="" />
                            </S.ListItem>
                        ))}
                    </S.Slide>
                </S.SlideWrapper>
            </S.SlideContainer>
        </S.Wrapper>
    );
};

export default Banner;
