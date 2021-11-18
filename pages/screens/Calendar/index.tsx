import React, { useContext, useState } from 'react'
import CalendarView from "../../../src/component/Calendar/CalendarView"
import LogContext from "../../../contexts/LogContext"
import { format } from 'date-fns';

function CalendarScreen({navigation}){
    const {logs}:any = useContext(LogContext);
    const [selecteDate, setSelectedDate] = useState(
        format(new Date(), "yyyy-MM-dd"),
    )

    const markedDates = logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
        acc[formattedDate] = {marked: true};
        return acc;
    }, {});

    return (
        <CalendarView
            markedDates={markedDates}
            selecteDate={selecteDate}
            onSelectDate={setSelectedDate}
        />
    );
};

export default CalendarScreen;