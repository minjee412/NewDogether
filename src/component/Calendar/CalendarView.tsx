import React from 'react'
import { Calendar, CalendarList } from 'react-native-calendars'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export default function CalendarView({navigation}){
    
    const user = auth().currentUser;
    const aaa = {};
    const [ detailV, setDetailV ] = React.useState([])

    React.useEffect(() => {
        const doc = firestore()
            .collection("Users")
            .doc(user.email)
            .collection("Todo")
            // .orderBy("data", "asc")
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    aaa.push(doc.data())
                });
                setDetailV(aaa.reverse())             
                //reverse 쓰는 이유 찾아놓기
            })
    }, [])

    console.log("가나다", firestore().collection("Users").doc("").collection("Todo").get())
    // console.log("props: ", props.item.title)
    // console.log("aaa", route.params)


    // const aaaaaaaaa = {
    //     "2021-11-17" : {
    //         marked: true,
    //     },
    //     "2021-11-19" : {
    //         marked: true,
    //     },
    //     "2021-11-20" : {
    //         marked: true,
    //     },
    // }




    return(
        <Calendar
            markedDates={detailV}
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

// const WrapperCalendar = styled(Calendar)`
//     margin-top: 50px;

// `