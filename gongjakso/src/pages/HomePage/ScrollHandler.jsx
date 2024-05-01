import React, { useEffect, useState } from 'react';
import TopButton from './TopButton';

const ScrollHandler = () => {
    const [page, setPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (isAnimating || !scrollEnabled) return;

            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = document.querySelectorAll('.home-section');
            const newPage = Array.from(sections).findIndex(section => {
                const rect = section.getBoundingClientRect();
                return rect.top >= 0 && rect.top < windowHeight + 50; // 보정값 추가
            });

            if (newPage === -1 || newPage === page) return;
            setPage(newPage);
            setIsAnimating(true);

            const posTop = sections[newPage].offsetTop;
            const startTime = performance.now();
            const duration = 1000;

            const animateScroll = timestamp => {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo(
                    0,
                    currentScroll + (posTop - currentScroll) * progress,
                );
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                } else {
                    setIsAnimating(false);
                }
            };

            requestAnimationFrame(animateScroll);
        };

        const throttledScrollHandler = throttle(handleScroll, 200);

        window.addEventListener('scroll', throttledScrollHandler);

        return () => {
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, [page, isAnimating, scrollEnabled]);

    const handleTopButtonClick = () => {
        setScrollEnabled(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setTimeout(() => {
            setScrollEnabled(true);
        }, 1000);
    };

    return (
        <div>
            {/* TopButton 컴포넌트에 클릭 이벤트 처리 함수를 전달 */}
            <TopButton onClick={handleTopButtonClick} />
        </div>
    );
};

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(
                function () {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                },
                limit - (Date.now() - lastRan),
            );
        }
    };
};

export default ScrollHandler;
