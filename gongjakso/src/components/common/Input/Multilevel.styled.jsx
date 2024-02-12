import styled from 'styled-components';

export const Title = styled.div`
    margin-left: 150px;
`;

export const Dropdown = styled.div`
    .Dropdown_dropdown__wiOTC
        .Dropdown_button__eEW4z.Dropdown_button-secondary__9Sb1O {
        width: 250px;
        height: 70px;
        border-radius: 10px;
        border: 2px solid #c4c4c4;
        background: white;
        font-size: ${({ theme }) => theme.fontSize.lg};
        padding: 20px;
    }
    .Item_item__Hs3Bb {
        font-size: ${({ theme }) => theme.fontSize.lg};
    }

    .Dropdown_dropdown__wiOTC .Dropdown_menu__sSjtr {
        width: 130px;
        left: 0;
        border: 1px solid #c4c4c4;
    }
    .Submenu_submenu__hrJ88 {
        position: absolute;
        left: 100%;
    }
`;
