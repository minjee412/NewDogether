import React from 'react'
import { Calendar, CalendarList } from 'react-native-calendars'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


export default function CalendarView(){
    
    const user = auth().currentUser;
    const Arr = [];
    const [ detailV, setDetailV ] = React.useState([])

    React.useEffect(() => {
        const doc = firestore()
            .collection("Users")
            .doc(user.email)
            .collection("Todo")
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    Arr.push(doc.data())
                });
                setDetailV(Arr.reverse())             
            })
    }, [])

    // console.log("가나다", firestore().collection("Users").doc("").collection("Todo").get())
    console.log("파이어베이스 데이터", detailV)

    const dateArr = []
    detailV.forEach(el=>{
        dateArr.push(el.createdAt.slice(0,10))
    })
    
    // const abc = dateArr.map((el)=>{
    //     // console.log("el: ",el)
    //     el
    // })

    console.log("날짜Arr: ", dateArr)
    // const markedSelectedDate = {Object.assign({}, detailV),}
    // console.log("props: ", markedSelectedDate)
    const markedDates={
        // abc : {
        //     marked: true,
        // }
        "2021-11-20" : {
            marked: true
        }
    }
    console.log("markedDates: ", markedDates)
    

    // const markedDates = {
    //     ...detailV,
    //     [selecteDate]: {
    //         selected: true,
    //         marked: markedDates[selecteDate]?.markedDates
    //     },
    // };



    return(
        <Calendar
            markedDates={markedDates}
            // onDayPress={(day) => {
            //     onSelectDate(day.dateString);
            // }}
            theme={{
                selectedDayBackgroundColor: "#518099",
                textSectionTitleColor: '#518099',
                arrowColor: "#518099",
                dotColor: "#518099",
                todayTextColor: "#518099",
                textMonthFontWeight: '800',
                textDayHeaderFontWeight: '800',
            }}
        />
    )
};
