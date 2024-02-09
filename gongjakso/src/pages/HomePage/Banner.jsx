import react, { useEffect, useState } from 'react';
import * as S from './Banner.Styled';

const Banner = () => {
    const slides = [
        { color: '#3292ff', target: '#' },
        { color: '#53b7f1', target: '#' },
        { color: '#7cd0ff', target: '#' },
        { color: '#a1d8f8', target: '#' },
        { color: '#c3e9ff', target: '#' },
    ];

    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

    return (
        <S.Wrapper>
            <S.SlideContainer>
                <S.SlideWrapper onMouseEnter={onStop} onMouseLeave={onRun}>
                    <S.Slide
                        className={`slide original ${animate ? '' : 'stop'}`}
                    >
                        {slides.map((s, i) => (
                            <S.ListItem key={i}>
                                <S.Item className="item" color={s.color} />
                            </S.ListItem>
                        ))}
                    </S.Slide>
                    <S.Slide className={`slide clone ${animate ? '' : 'stop'}`}>
                        {slides.map((s, i) => (
                            <S.ListItem key={i}>
                                <S.Item className="item" color={s.color} />
                            </S.ListItem>
                        ))}
                    </S.Slide>
                </S.SlideWrapper>
            </S.SlideContainer>
        </S.Wrapper>
    );
};

export default Banner;
