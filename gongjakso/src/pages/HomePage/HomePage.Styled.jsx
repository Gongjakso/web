import styled from 'styled-components';
import backGroundImage from '../../assets/images/background.png';
import teambuilding1 from '../../assets/images/Teambuilding1.png';
import teambuilding2 from '../../assets/images/Teambuilding2.png';
import teambuilding3 from '../../assets/images/Teambuilding3.png';
import portfolioimg from '../../assets/images/Portfolio.png';

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: 'PreBold';
    text-align: center;
    padding: 5px;
`;

export const Title1 = styled.div`
    color: white;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const Title2 = styled.div`
    color: white;
    padding: 5px;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const Title3 = styled.div`
    color: black;
    font-family: 'PreBold';
    padding: 2px;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const Subtitle2 = styled.div`
    color: white;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 20px;
`;

export const Subtitle3 = styled.div`
    color: ${({ theme }) => theme.Main1};
    align-items: center;
    font-weight: bold;
    padding: 1px;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Detail1 = styled.p`
    font-family: 'PreRegualr';
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 2px;
    color: white;
`;

export const Detail2 = styled.p`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 15px;
    color: white;
`;

export const Detail3 = styled.p`
    color: black;
    padding: 15px;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
`;

export const Button = styled.p`
    display: flex;
    margin-top: 10px;
    flex-direction: row;
`;

export const Button1 = styled.button`
    background-color: black;
    border: none;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 10px;
    color: white;
    width: 17em;
    height: 3.5em;
    margin: 10px;
    cursor: pointer;
`;
export const Button2 = styled.button`
    background-color: white;
    border: none;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 10px;
    color: black;
    font-weight: bold;
    width: 17em;
    height: 3.5em;
    margin: 10px;
    cursor: pointer;
`;

export const Button3 = styled.button`
    background-color: ${({ theme }) => theme.Main1};
    border: none;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 10px;
    color: white;
    width: 300px;
    height: 65px;
    padding: 20px;
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
    background-color: rgba(255, 255, 255, 0.47);
    border-radius: 100px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    padding: 25px;
    width: 370px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
    margin: 7px 10px;
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
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.Main1};
`;

export const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    margin: 30px 0;
    padding: 10px;
    border: 1px solid white;
    border-radius: 40px;
    width: 920px;
    height: 400px;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.m};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
`;

export const ImageBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 75%;
    flex-direction: row;
`;
export const HomeContent2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: black;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 50%;
    padding: 10px;
    justify-content: space-around;
    margin: 10px 0;
`;

export const HomeContent3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: white;
`;

export const WhiteBox = styled.div`
    width: 400px;
    background-color: white;
    margin-top: 20px;
    height: 320px;
    border-radius: 30px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
`;

export const TeamBuildingImg1 = styled.div`
    width: 180px;
    background: url(${teambuilding1});
    height: 180px;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TeamBuildingImg2 = styled.div`
    width: 180px;
    background: url(${teambuilding2});
    height: 180px;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TeamBuildingImg3 = styled.div`
    width: 180px;
    background: url(${teambuilding3});
    height: 180px;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TeamImage = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    margin: 20px 0;
`;

export const PortFolioimg = styled.div`
    background: url(${portfolioimg});
    width: 350px;
    padding: 60px 0;
    height: auto;
    display: flex;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
