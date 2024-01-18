import styled from "styled-components";
import backGroundImage from '../../assets/images/background.png';

export const Button = styled.p`
    display: flex;
    margin-top: 50px;
    flex-direction: row;
`
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
`
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
    
`

export const Button3 = styled.button`
    background-color: #0150F1;
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
`

export const HomeContent = styled.div`
    display: flex;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)), linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${backGroundImage});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Box = styled.div`
    color: black;
    background-color: rgba(255,255,255,0.6);
    border-radius: 30px;
    border: 2px solid rgba(255,255,255,0.8);
    padding: 18px;
    width: 400px;
    display: flex;
    letter-spacing: -1px;
    align-items: center;
    justify-content: center;
    height: 30px;
    text-align: center;
    margin: 10px;
`
export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const HomeContent1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    background-color: #0150F1;
`

export const Wrapper = styled.div`
    background-color: rgba(255,255,255,0.4);
    padding: 40px;
    margin-top: 20px;
    margin-bottom: 40px;
    border: 1px solid white;
    border-radius: 30px;
    height: 300px;
    font-size: 15px;
    text-align: center;
    letter-spacing: -1px;
    color: white;
`
export const ImageBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
    text-align: center;
    flex-direction: row;
`
export const HomeContent2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    weight: 100%;
    height: 100vh;
    background-color: #000000;
`
export const Container = styled.div`
    display: flex;
    flex-direciton: row;
`

export const HomeContent3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    weight: 100%;
    height: 100vh;
    background-color: #FFFFFF;
`
export const WhiteBox = styled.div`
    background-color: #FFFFFF;
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