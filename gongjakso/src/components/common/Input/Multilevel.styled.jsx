import styled from 'styled-components';

export const Dropdown = styled.div`
    .rnd > button {
        border: 1.5px solid #c4c4c4;
        text-align: left;
        padding: 18px 20px;
        width: 250px;
        font-size: ${props => props.theme.fontSize.lg};
        color: black;
        border-radius: 10px;
    }
    .rnd__root-menu.rnd__menu {
        width: 250px !important;
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        font-size: ${props => props.theme.fontSize.md};
        padding-left: 20px;
    }

    .rnd
        .rnd__root-menu.rnd__menu
        .rnd__option.rnd__option--with-menu
        .rnd__menu.rnd__submenu.rnd__submenu--opened {
        max-height: 300px;
        overflow-y: scroll;
        width: 200px !important;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
