import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import * as S from './Calendar.styled.jsx';
import { getCalendar } from '../../service/calendar_service.js';

const Calendar = () => {
    const [event, setEvent] = useState([]);
    const [scrapPost, setScrapPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCalendar('105', '2024', '2'); // 수정 사항!!!
                console.log(res);

                const eventTitles = res?.data.scrapPosts.map(post => ({
                    title: post.title,
                    color: post.postType ? '#e789ff32' : '#00a2ff32',
                    textColor: post.postType ? '#e789ff' : '#00a3ff',
                    date: post.endDate.split('T')[0],
                }));
                setScrapPost(res?.data.scrapPosts);

                setEvent(prevEvents => [...prevEvents, ...eventTitles]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
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
