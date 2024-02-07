import styled from 'styled-components';
import backGroundImage from '../../assets/images/background.png';
import teambuilding1 from '../../assets/images/Teambuilding1.png';
import teambuilding2 from '../../assets/images/Teambuilding2.png';
import teambuilding3 from '../../assets/images/Teambuilding3.png';
import portfolioimg from '../../assets/images/Portfolio.png';

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xxlg};
    font-family: 'PreBold';
    text-align: center;
    padding: 13px;
    font-weight: bold;
`;

export const Title1 = styled.div`
    color: white;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.xxlg};
`;

export const Title2 = styled.div`
    color: white;
    padding: 10px;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.xxlg};
`;

export const Title3 = styled.div`
    color: black;
    padding: 10px;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.xxlg};
`;

export const Subtitle2 = styled.div`
    color: white;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.ll};
    padding: 20px;
`;

export const Subtitle3 = styled.div`
    color: ${({ theme }) => theme.Main1};
    align-items: center;
    font-weight: bold;
    padding: 10px;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Detail1 = styled.p`
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 3px;
    color: white;
`;

export const Detail2 = styled.p`
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 20px;
    color: white;
`;

export const Detail3 = styled.p`
    color: black;
    padding: 20px;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Button = styled.p`
    display: flex;
    margin-top: 50px;
    flex-direction: row;
`;

export const Button1 = styled.button`
    background-color: black;
    border: none;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.ll};
    border-radius: 15px;
    color: white;
    width: 420px;
    height: 90px;
    margin: 10px;
    padding: 20px;
    cursor: pointer;
`;
export const Button2 = styled.button`
    background-color: white;
    border: none;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.ll};
    border-radius: 15px;
    color: black;
    font-weight: bold;
    width: 420px;
    height: 90px;
    margin: 10px;
    padding: 20px;
    cursor: pointer;
`;

export const Button3 = styled.button`
    background-color:${({ theme }) => theme.Main1};
    border: none;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.ll};
    border-radius: 10px;
    color: white;
    width: 420px;
    height: 90px;
    margin: 10px;
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
    weight: 100%;
    padding: 200px 0;
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
    padding: 40px;
    width: 630px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.ll};
    text-align: center;
    margin: 20px;
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
    weight: 100%;
    height: 100vh;
    flex-direction: column;
    background-color:${({ theme }) => theme.Main1};
`;

export const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    margin: 50px;
    border: 2px solid white;
    border-radius: 50px;
    width: 1400px;
    height: 600px;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.ll};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
`;

export const ImageBox = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
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
    background-color: black;
`;
export const Container = styled.div`
    display: flex;
    gap: 84px;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px;
`;

export const HomeContent3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    weight: 100%;
    height: 100vh;
    background-color: white;
`;

export const WhiteBox = styled.div`
    background-color: white;
    width: 600px;
    height: 450px;
    margin: 20px;
    border-radius: 50px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    object-fit: contain;
`;

export const TeamBuildingImg1 = styled.div`
    width: 300px;
    background: url(${teambuilding1});
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TeamBuildingImg2 = styled.div`
    width: 300px;
    background: url(${teambuilding2});
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TeamBuildingImg3 = styled.div`
    width: 300px;
    background: url(${teambuilding3});
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TeamImage = styled.div`
    padding: 2px;
`;

export const PortFolioimg = styled.div`
    background: url(${portfolioimg});
    width: 550px;
    height: auto;
    display: flex;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
