import React from 'react'
import { Calendar, CalendarList } from 'react-native-calendars'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


export default function CalendarView({navigation, selecteDate, onSelectDate}:any){
    
    const user = auth().currentUser;
    const aaa = [];
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
                setDetailV(aaa)             
                //reverse 쓰는 이유 찾아놓기
            })
    }, [])

    // console.log("가나다", firestore().collection("Users").doc("").collection("Todo").get())

    // console.log("파이어베이스 데이터", detailV)
    const dateArr:string[] = []
    detailV.forEach(el=>{
        dateArr.push(el.createdAt.slice(0,10))
    })
    console.log("dateArr: ",dateArr)
    
    const a = dateArr.map((el:string)=>{
            return {el : {
                marked:true
            }
        }
    })

    console.log("dateArr: ", dateArr)
    // const markedSelectedDate = {Object.assign({}, detailV),}
    // console.log("props: ", markedSelectedDate)
    const markedDates={
        dateArr : {
            marked: true
        }
    }
    

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
