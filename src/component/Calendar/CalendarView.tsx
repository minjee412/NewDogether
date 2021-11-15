import React from 'react'
import { Calendar } from 'react-native-calendars'
import { Text, View } from 'react-native'
import styled from '@emotion/native'

export default function CalendarView({navigation}){
    
    const markedDates = {
        "2021-11-17" : {
            marked: true,
        },
        "2021-11-19" : {
            marked: true,
        },
        "2021-11-20" : {
            marked: true,
        },
    }

    return(
        <Calendar
            markedDates={markedDates}
            theme={{
                selectedDayBackgroundColor: "#ff6347",
                arrowColor: "#ff6347",
                dotColor: "#ff6347",
                todayTextColor: "#ff6347"
            }}
        />
    )
};

// const WrapperCalendar = styled(Calendar)`
//     margin-top: 50px;

// `