import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import contestData from './data/contestData.js';
import projectData from './data/projectData.js';
import * as S from './Calendar.styled.jsx';

const Calendar = () => {
    let [event] = useState([...contestData, ...projectData]);

    return (
        <S.FullCalendarContainer>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                titleFormat={{
                    year: 'numeric',
                    month: 'numeric',
                }}
                events={event}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next today',
                }}
            />
        </S.FullCalendarContainer>
    );
};

export default Calendar;
