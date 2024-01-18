import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import contestData from './data/contestData';
import projectData from './data/projectData';
import './Calendar.css';

const Calendar = () => {
    let [event] = useState([...contestData, ...projectData]);

    return (
        <div className="App">
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
        </div>
    );
};

export default Calendar;
