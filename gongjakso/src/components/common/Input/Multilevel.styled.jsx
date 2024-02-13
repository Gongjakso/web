import styled from 'styled-components';

export const Title = styled.div`
    margin-left: 150px;
`;

export const Dropdown = styled.div`
    .rnd > button {
        border: 2px solid #c4c4c4;
        text-align: left;
        padding: 20px;
        width: 250px;
        font-size: ${props => props.theme.fontSize.lg};
        color: #8c8c8c;
        border-radius: 10px;
    }
    .rnd__root-menu.rnd__menu {
        width: 250px !important;
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        font-size: ${props => props.theme.fontSize.lg};
        padding: 5px;
    }
`;
