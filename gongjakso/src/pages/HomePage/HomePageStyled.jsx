import styled from 'styled-components';
import backGroundImage from '../../assets/images/background.png';

export const Title = styled.p`
    font-size: 25px;
    text-align: center;
    padding: 5px;
    font-weight: bold;
`;

export const Title1 = styled.div`
    color: white;
    font-size: 25px;
    font-weight: bold;
    margintop: 150px;
`;

export const Title2 = styled.div`
    color: white;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
`;

export const Title3 = styled.div`
    color: black;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
`;

export const Subtitle2 = styled.div`
    color: white;
    margin-top: 180px;
`;

export const Subtitle3 = styled.div`
    color: #0150f1;
    align-items: center;
    font-weight: bold;
    padding: 10px;
    font-size: 20px;
`;

export const Detail1 = styled.p`
    font-size: 14px;
    padding: 3px;
    color: white;
`;

export const Detail2 = styled.p`
    font-size: 14px;
    padding: 10px;
    color: white;
`;

export const Detail3 = styled.p`
    color: black;
    padding: 10px;
    font-size: 14px;
`;

export const Button = styled.p`
    display: flex;
    margin-top: 50px;
    flex-direction: row;
`;

export const Button1 = styled.button`
    background-color: black;
    border: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    margin-bottom: 50px;
    width: 300px;
    padding: 18px;
    cursor: pointer;
`;
export const Button2 = styled.button`
    background-color: white;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    width: 300px;
    margin-bottom: 50px;
    padding: 18px;
    cursor: pointer;
`;

export const Button3 = styled.button`
    background-color: #0150f1;
    border: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    margin-top: 50px;
    margin-right: 20px;
    margin-bottom: 100px;
    width: 300px;
    padding: 18px;
    cursor: pointer;
`;

export const HomeContent = styled.div`
    display: flex;
    background-image: linear-gradient(
            to left,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.1)
        ),
        linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
        ),
        url(${backGroundImage});
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Box = styled.div`
    color: black;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    padding: 18px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    text-align: center;
    margin: 10px;
`;
export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const HomeContent1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    background-color: #0150f1;
`;

export const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    padding: 50px;
    margin-top: 20px;
    margin-bottom: 40px;
    border: 1px solid white;
    border-radius: 30px;
    height: 300px;
    font-size: 15px;
    padding: 40px;
    text-align: center;
    color: white;
`;

export const ImageBox = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
    text-align: center;
    flex-direction: row;
`;
export const HomeContent2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    weight: 100%;
    height: 100vh;
    background-color: #000000;
`;
export const Container = styled.div`
    display: flex;
    flex-direciton: row;
    padding: 10px;
`;

export const HomeContent3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    weight: 100%;
    height: 100vh;
    background-color: #ffffff;
`;

export const WhiteBox = styled.div`
    background-color: #ffffff;
    width: 350px;
    height: 280px;
    margin: 20px;
    margin-bottom: 150px;
    border-radius: 20px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
