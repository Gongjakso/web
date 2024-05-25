import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import * as S from './Calendar.styled.jsx';
import { getCalendar } from '../../service/calendar_service.js';
import useCustomNavigate from '../../hooks/useNavigate.js';

const Calendar = () => {
    const [event, setEvent] = useState([]);
    const navigate = useCustomNavigate();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const [currentYear, setCurrentYear] = useState(year);
    const [currentMonth, setCurrentMonth] = useState(month);

    useEffect(() => {
        getCalendar(currentYear, currentMonth).then(response => {
            const scrapPosts = response?.data.scrapPosts || [];
            const eventTitles = scrapPosts.map(post => ({
                postId: post.postId,
                title: post.title,
                postType: post.postType,
                color: post.postType ? '#e789ff32' : '#00a2ff32',
                textColor: post.postType ? '#e789ff' : '#00a3ff',
                date: post.finishDate.split('T')[0],
            }));
            setEvent(eventTitles);
        });
    }, [currentMonth, currentYear]);

    const handleEventClick = info => {
        const postId = info.event._def.extendedProps.postId;
        const postType = info.event._def.extendedProps.postType
            ? 'project'
            : 'contest';
        console.log('Clicked event:', postId, postType);
        navigate(`/${postType}/${postId}`);
        // 여기에 클릭된 이벤트에 대한 추가적인 처리 로직을 추가할 수 있습니다.
    };

    return (
        <S.FullCalendarContainer>
            <FullCalendar
                initialView="dayGridMonth"
                plugins={[dayGridPlugin]}
                titleFormat={function (date) {
                    const year = date.date.year;
                    const month = date.date.month + 1;
                    return year + '.' + month;
                }}
                events={event}
                eventClick={handleEventClick}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next',
                }}
                datesSet={arg => {
                    setCurrentYear(arg.start.getFullYear());
                    setCurrentMonth(
                        arg.start.getMonth() + 2 === 13
                            ? 1
                            : arg.start.getMonth() + 2,
                    );
                }}
            />
        </S.FullCalendarContainer>
    );
};

export default Calendar;
