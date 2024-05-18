import React, { useState } from 'react';
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import * as S from './SelectCalendar.Styled';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { ko } from 'date-fns/locale';

const SelectCalendar = ({ onApply }) => {
    const [showDateRangePicker, setShowDateRangePicker] = useState(false);

    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
    });
    const today = new Date();

    const formattedDate = date => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
        const day = date.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };

    const formattedStartDate = formattedDate(dateRange.startDate);
    const formattedEndDate = formattedDate(dateRange.endDate);

    const handleOpenDateRangePicker = () => {
        setShowDateRangePicker(true);
    };

    const handleCloseDateRangePicker = () => {
        setShowDateRangePicker(false);
    };

    const handleDateRangeChange = item => {
        setDateRange(item.selection);
    };
    const handleApply = () => {
        onApply({
            startDate: formattedStartDate,
            endDate: formattedEndDate,
        });
        handleCloseDateRangePicker();
    };

    return (
        <S.Container>
            <S.DateContent>
                <div onClick={handleOpenDateRangePicker}>
                    시작일: {formattedStartDate} ~ 종료일: {formattedEndDate}
                </div>
            </S.DateContent>

            {showDateRangePicker && (
                <S.DateSelect>
                    <DateRange
                        locale={ko}
                        ranges={[dateRange]}
                        onChange={handleDateRangeChange}
                        moveRangeOnFirstSelection={false}
                        minDate={today}
                    />
                    <S.ButtonContent>
                        <S.Button
                            $isDelete
                            onClick={handleCloseDateRangePicker}
                        >
                            취소
                        </S.Button>
                        <S.Button onClick={handleApply}>적용</S.Button>
                    </S.ButtonContent>
                </S.DateSelect>
            )}
        </S.Container>
    );
};

export default SelectCalendar;
