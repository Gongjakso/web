import React, { useEffect, useState } from 'react';

const ScrollHandler = () => {
    const [page, setPage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (document.documentElement.classList.contains('is-animated'))
                return;

            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = document.querySelectorAll('.home-section');
            const newPage = Array.from(sections).findIndex(section => {
                const rect = section.getBoundingClientRect();
                return rect.top >= 0 && rect.top < windowHeight + 50; // 보정값 추가
            });

            if (newPage === -1 || newPage === page) return;
            setPage(newPage);

            const posTop = sections[newPage].offsetTop;
            document.documentElement.classList.add('is-animated');
            window.scrollTo({
                top: posTop,
                behavior: 'smooth',
            });
            setTimeout(() => {
                document.documentElement.classList.remove('is-animated');
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    return null;
};

export default ScrollHandler;
