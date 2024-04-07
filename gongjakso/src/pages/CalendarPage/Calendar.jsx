import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import * as S from './Calendar.styled.jsx';
import { getCalendar } from '../../service/calendar_service.js';

const Calendar = () => {
    const [event, setEvent] = useState([]);
    const [currentYear, setCurrentYear] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(0);

    // fetchData 함수 정의
    const fetchData = async (year, month) => {
        try {
            const res = await getCalendar('105', year, month);
            const scrapPosts = res?.data.scrapPosts || [];

            const eventTitles = scrapPosts.map(post => ({
                title: post.title,
                color: post.postType ? '#e789ff32' : '#00a2ff32',
                textColor: post.postType ? '#e789ff' : '#00a3ff',
                date: post.endDate.split('T')[0],
            }));

            setEvent(eventTitles);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        setCurrentYear(year);
        setCurrentMonth(month);
        fetchData(year.toString(), month.toString()); // fetchData 호출
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
                datesSet={arg => {
                    setCurrentYear(arg.start.getFullYear());
                    setCurrentMonth(arg.start.getMonth() + 2);
                    fetchData(
                        arg.start.getFullYear(),
                        arg.start.getMonth() + 2,
                    );
                }}
            />
        </S.FullCalendarContainer>
    );
};

export default Calendar;
