import styled from 'styled-components';

export const Dropdown = styled.div`
    .rnd > button {
        border: 1.5px solid #c4c4c4;
        text-align: left;
        padding: 18px 20px;
        width: 220px;
        font-size: ${({ theme, isPost }) =>
            isPost ? '1.15rem' : theme.fontSize.md};
        color: ${props => (props.isPost ? 'gray' : 'black')};
        border-radius: 10px;
    }
    .rnd__root-menu.rnd__menu {
        width: 220px !important;
        z-index: 9999;
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        font-size: ${({ theme, isPost }) =>
            isPost ? '1.15rem' : theme.fontSize.md};
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
    .rnd__option--with-menu:hover > .rnd__submenu {
        display: block;
        color: black;
    }
    .rnd__option:not(.rnd__option--disabled):hover {
        background-color: black;
        color: white;
        transition: background-color 0.2s ease;
        border-radius: 4px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
