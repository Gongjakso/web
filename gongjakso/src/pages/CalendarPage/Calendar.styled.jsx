import styled from 'styled-components';

export const FullCalendarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .fc .fc-col-header-cell-cushion {
        display: inline-block;
        padding: 10px 15px;
        font-size: ${({ theme }) => theme.fontSize.md};
        font-family: 'PreRegular';
        display: flex;
        text-align: left;
        text-transform: uppercase;
        color: #aaaaaa;
    }

    .fc {
        width: 60%;
        height: 100%;
        margin-top: 130px;
        margin-bottom: 100px;
    }

    .fc .fc-toolbar.fc-header-toolbar {
        margin-bottom: 100px;
        margin-left: 60px;
        height: 80px;
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSize.lg};
        letter-spacing: 2px;
    }

    .fc .fc-button-primary {
        background: transparent;
        color: black;
        border: none;
    }

    .fc .fc-button-primary:hover {
        background: transparent;
        color: black;
        border: none;
    }

    .fc .fc-daygrid-day.fc-day-today {
        background-color: #aaaaaa31;
        color: red;
    }

    .fc .fc-daygrid-day-frame {
        padding: 8px 3px;
    }

    .fc .fc-daygrid-day-top {
        flex-direction: row;
        margin-bottom: 3px;
        margin-top: -3px;
        font-family: 'PreRegular';
        font-size: ${({ theme }) => theme.fontSize.md};
    }

    .fc-event {
        padding: 2px 3px;
        margin-bottom: 3px;
        border-radius: 5px;
        font-family: 'PreRegular';
        font-size: ${({ theme }) => theme.fontSize.md};
        border: none;
    }

    .fc .fc-toolbar.fc-header-toolbar .fc-prev-button {
        position: relative;
        left: 360px;
    }

    .fc .fc-toolbar.fc-header-toolbar .fc-next-button {
        position: relative;
        right: 365px;
        top: 2px;
    }

    .fc .fc-toolbar.fc-header-toolbar .fc-today-button {
        padding: 8px;
        border-radius: 10px;
        position: relative;
        top: 100px;
        background-color: #aaaaaa59;
        color: rgb(106, 106, 106);
        font-size: ${({ theme }) => theme.fontSize.lg};
        border: 2px solid #aaaaaa;
    }

    .fc .fc-daygrid-day {
        border: 1px solid #aaaaaa59;
        color: #3e3e3e;
    }
`;

// 공모전 배경색: #00a2ff32 & 글자색: #00a3ff
// 프로젝트 배경색: #e789ff32 & 글자색: #e789ff
