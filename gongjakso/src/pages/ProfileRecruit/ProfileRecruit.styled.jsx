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
    width: 100%;
    min-width: 1000px;
    max-width: 1200px;
    margin: 70px;
    border: 2px solid ${({ theme }) => theme.box1};
    border-radius: 15px;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    width: 100%;
    min-width: 1000px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InsideBox = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    border: none;
    padding: 30px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    justify-content: space-between;
`;

export const Border = styled(InsideBox)`
    width: 50%;
    border-right: 2px solid ${({ theme }) => theme.box1};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`;

export const DetailGlobal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    justify-content: center;
`;

export const ButtonSet = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 15px;
    gap: 20px;
`;

export const InsideTitle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: ${({ title, theme }) =>
        title ? theme.fontSize.l : theme.fontSize.lg};
    font-family: ${({ title, theme }) => (title ? 'TheJamsilRegular' : '')};
`;

export const InsideTitleFront = styled(InsideTitle)`
    display: block;
    width: 370px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TagNUM = styled.p`
    margin: 0 25px;
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
    padding: 15px 15px;
    font-weight: bold;
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.md};
    &:hover {
        background: black;
        color: ${({ theme }) => theme.mainFont2};
    }
`;

export const SubTitle = styled.div`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    text-align: left;
`;

export const MainTable = styled.table`
    width: 100%;
    margin-top: 30px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-align: center;
`;

export const TagP = styled.p`
    width: 30%;
    height: 60px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
        props.isleft
            ? 'border-right: 0.5px solid #aaaaaa'
            : 'border-left: 0.5px solid #aaaaaa'}
`;

export const StyledTh = styled.th`
    min-height: 60px;
    border: 1px solid #aaaaaa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px 15px 0 0;
`;

export const StyledTd = styled.td`
    min-height: 60px;
    border-bottom: 1px solid #aaaaaa;
    border-left: 1px solid #aaaaaa;
    border-right: 1px solid #aaaaaa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TableBox = styled.div`
    width: 30%;
    height: 100%;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const User = styled(TableBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 15%;
        margin-right: 10px;
    }
`;

export const ShowBtn = styled.button`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 35%;
    color: ${props => props.theme.subFont};
    background: transparent;
    text-align: right;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

export const StateBtn = styled.div`
    width: 40%;
    padding: 10px;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.md};
    background: ${props => props.bg};
    border-radius: 20px;
`;
