import styled from 'styled-components';

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 60px;
    margin-right: 15px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.borderline};
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.subFont};
    padding-left: 15px;
    z-index: 9999;

    .rightDown {
        margin-left: 70px;
        color: ${({ theme }) => theme.mainFont};
        font-size: 25px;
    }
    span {
        display: inline-block;
        width: 220px;
        margin-bottom: 10px;
        font-size: ${({ theme }) => theme.fontSize.md};
        font-family: 'PreMedium';
        font-weight: 100;
        color: ${({ theme }) => theme.borderline};
    }
    &:hover {
        border: 1.5px solid rgba(0, 0, 0, 0.1);
    }
`;

export const Span = styled.div`
    display: inline-block;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.borderline};
    font-family: 'PreMedium';
    font-weight: 100;
`;

export const SelectQty = styled.div`
    position: absolute;
    display: ${props => (props.$isDisplay ? 'flex' : 'none')};
    flex-direction: column;
    text-align: center;
    width: 350px;
    height: auto;
    margin-top: 500px;
    padding: 20px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.borderline};
    border-radius: 4px;
`;

export const SelectAdultTitle = styled.div`
    margin: 0px 0px 30px;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.border};
`;

export const SelectAdultNum = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Title = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.border};
`;

export const CountBtn = styled.div`
    display: flex;
    align-items: center;
`;
export const Button = styled.div`
    background: none;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.mainFont};
    font-size: 20px;
    margin: 0px 10px;
    cursor: pointer;
`;

export const UpdateBtn = styled.div`
    position: relative;
    text-align: center;
    border-radius: 5px;
    color: white;
    background-color: ${({ theme }) => theme.mainFont};
    width: 100px;
    padding: 10px;
    left: 190px;
    font-size: 16px;
    cursor: pointer;
`;
