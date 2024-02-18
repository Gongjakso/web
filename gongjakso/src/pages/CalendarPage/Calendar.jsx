import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import contestData from './data/contestData.js';
import projectData from './data/projectData.js';
import * as S from './Calendar.styled.jsx';
import { getCalendar } from '../../service/calendar_service.js';

const Calendar = () => {
    let [event] = useState([...contestData, ...projectData]);

    useEffect(() => {
        // ID 수정!!!!
        // 데이터 : 2월 / 3월
        getCalendar('105', '2024', '2').then(res => {
            console.log(res);
        });
    }, []);

    return (
        <S.FullCalendarContainer>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                titleFormat={function (date) {
                    const year = date.date.year;
                    const month = date.date.month + 1;
                    return year + '.' + month;
                }}
                events={event}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next',
                }}
            />
        </S.FullCalendarContainer>
    );
};

export default Calendar;
