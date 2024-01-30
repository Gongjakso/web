import styled from 'styled-components';

export const FullCalendarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    :root {
        --fc-border-color: #aaaaaa;
        --fc-daygrid-event-dot-width: 5px;
        --fc-border-radius: 20px;
    }

    .fc .fc-col-header-cell-cushion {
        display: inline-block;
        padding: 5px 15px;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        text-align: left;
        text-transform: uppercase;
        color: #aaaaaa;
    }

    .fc {
        width: 60%;
        margin-top: 20px;
        margin-bottom: 100px;
    }

    .fc .fc-toolbar.fc-header-toolbar {
        margin-top: 40px;
        margin-bottom: 80px;
        margin-left: 60px;
        background-color: none;
        height: 50px;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 1px;
        color: black;
        border-radius: 20px 20px 0px 0px;
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
        background-color: #aaaaaa39;
        color: red;
    }

    .fc .fc-daygrid-day-frame {
        padding: 5px;
    }

    .fc .fc-daygrid-day-top {
        flex-direction: row;
        margin-bottom: 3px;
        margin-top: -3px;
        font-size: 12px;
        font-weight: 550;
    }

    .fc-event {
        padding: 1px 3px;
        margin-bottom: 2px;
        border-radius: 4px;
        font-weight: 550;
        font-size: 12px;
        border: none;
    }

    .fc .fc-toolbar.fc-header-toolbar .fc-prev-button {
        position: relative;
        left: 300px;
    }

    .fc .fc-toolbar.fc-header-toolbar .fc-next-button {
        position: relative;
        right: 300px;
        top: 2px;
    }

    .fc .fc-toolbar.fc-header-toolbar .fc-today-button {
        padding: 8px;
        border-radius: 17px;
        position: relative;
        top: 72px;
        background-color: #aaaaaa59;
        color: rgb(62, 57, 57);
        border: 2px solid #aaaaaa;
        font-weight: 500;
    }

    .fc .fc-daygrid-day {
        border: 1px solid #aaaaaa59;
    }

    .hide {
        display: none;
    }
`;
