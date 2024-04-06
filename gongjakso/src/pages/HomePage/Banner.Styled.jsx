import styled, { keyframes } from 'styled-components';

export const infiniteAnimation1 = keyframes`
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(-100%);
    }
    50.1% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`;

export const infiniteAnimation2 = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-200%);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 20em;
`;

export const SlideContainer = styled.div`
    overflow: hidden; //overflow 방지
    width: 100%;
`;

export const SlideWrapper = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
    &.original {
        animation: 60s linear infinite normal none running ${infiniteAnimation1};
    }
    &.clone {
        animation: 60s linear infinite ${infiniteAnimation2};
    }
    &.stop {
        animation-play-state: paused;
    }
`;

export const ListItem = styled.li`
    margin: 0 10px;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;
    transform: scale(1); //원래 크기 1
    &:hover {
        transform: scale(0.98); //마우스 오버 시 살짝 줄어들게
    }
    img {
        max-height: 16em;
        max-width: auto;
    }
`;
