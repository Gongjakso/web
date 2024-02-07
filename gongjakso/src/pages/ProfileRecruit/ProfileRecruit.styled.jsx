import styled from 'styled-components';

export const TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xlg};
    text-align: center;
    font-weight: bold;
    position: relative;
    top: 20px;
`;

export const GlobalBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BlueBox = styled.div`
    width: 55%;
    margin: 70px;
    border: 2px solid ${({ theme }) => theme.box1};
    border-radius: 15px;
    display: flex;
    flex-direction: row;
`;

export const InsideBox = styled.div`
    width: ${props => props.w};
    border: none;
    padding: 30px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
`;

export const Border = styled(InsideBox)`
    border-right: 2px solid ${({ theme }) => theme.box1};
    display: flex;
    flex-direction: column;
`;

export const DetailGlobal = styled.div`
    display: flex;
    flex-direction: ${props => props.opt1};
    width: 100%;
    padding: 15px;
    justify-content: ${props => props.opt2};
`;

export const InsideTitle = styled.div`
    width: ${props => props.w};
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const InsideDetail = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 3px;
    font-weight: normal;
`;

export const GreyBtn = styled.button`
    width: 30%;
    background: ${({ theme }) => theme.Grey};
    text-align: center;
    padding: 15px;
    font-weight: bold;
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.md};
    &:hover {
        background: black;
        color: ${({ theme }) => theme.mainFont2};
    }
`;

export const SubTitle = styled.div`
    width: 55%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    text-align: left;
`;

export const MainTable = styled.table`
    width: 55%;
    margin-top: 30px;
    margin-bottom: 300px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-align: center;
    border-radius: 10px;
    border-collapse: collapse;
    border-radius: 10px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #aaaaaa;
`;

export const StyledTh = styled.th`
    padding: 10px;
    border-bottom: 1px solid #aaaaaa;

    &:nth-child(odd) {
        width: 25%;
    }
    &:nth-child(2) {
        border: 1px solid #aaaaaa;
    }
`;

export const StyledTd = styled.td`
    border-bottom: 0.5px solid #cfcdcd;
    padding: 30px;
    position: relative;
    height: 100px;
`;

export const TableBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const User = styled(TableBox)`
    position: absolute;
    top: 30px;
    left: 0px;
    img {
        width: 15%;
        margin-right: 10px;
    }
`;

export const ShowBtn = styled.button`
    width: 25%;
    position: absolute;
    top: 30px;
    right: 10px;
    padding: 10px;
    color: #a09e9e;
    background: transparent;
    text-align: right;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const StateBtn = styled.div`
    width: 60%;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.md};
    background: ${props =>
        props.isOpen ? ({ theme }) => theme.LimeGreen : ''};
    border-radius: 20px;
`;
