import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    width: 50%;
    padding: 10px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const FooterInfoBox = styled.div`
    display: flex;
    width: 500px;
    position: absolute;
    padding: 5px;
    flex-direction: column;
`;

export const FooterInfo = styled.div`
    font-size: 10px;
    color: #aaa;
    padding: 3px;
    margin-left: 150px;
`;

export const FooterButtonBox = styled.div`
    display: flex;
    position: absolute;
    padding: 20px;
    flex-direction: row;
    margin-left: 450px;
`;

export const FooterButton = styled.button`
    font-size: 15px;
    font-weight: bold;
    letter-spacing: -2px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    padding: 20px;
    border: none;
    background: transparent;
`;
