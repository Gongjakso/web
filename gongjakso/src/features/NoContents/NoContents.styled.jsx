import styled from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as NoPost } from '../../assets/images/NoPost.svg';

export const NoContentsContainer = styled.div`
    margin-top: 10px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    span {
        display: block;
        text-align: center;
        font-family: 'PreMedium';
        font-size: ${theme.fontSize.md};
    }

    span:first-child {
        margin-bottom: 10px;
    }
`;
export const Nopost = styled(NoPost)``;
