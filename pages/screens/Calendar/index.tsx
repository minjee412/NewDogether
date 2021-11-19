import React, { useState } from 'react'
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import styled from "@emotion/native"
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native"
import moment from 'moment'


LocaleConfig.locales['kr'] = {
    formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
  };
LocaleConfig.defaultLocale = 'kr';

function CalendarScreen({navigation}){

    console.log("calendar route: ")
    
    const [ date ] = useState(moment().format("YYYY/MM/DD"))
    const user = auth().currentUser;
    const Arr = [];
    const [ detailV, setDetailV ] = React.useState([])
    const [click, setClick] = useState("selected")

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

    const dateArr = []
    detailV.forEach(el=>{
        dateArr.push(el.createdAt.slice(0,10))
    })

    const markedDates={}
    dateArr.forEach((date) => {
        markedDates[date] = {marked: true}
    });
    
    const setClickButton = () => {
        setClick(true)
    }

    // const markedDates = {
    //     ...detailV,
    //     [selecteDate]: {
    //         selected: true,
    //         marked: markedDates[selecteDate]?.markedDates
    //     },
    // };

    return (
        <SafeArea>
            <Header>
                <TouchableOpacity onPressOut={() => navigation.pop()}>
                    <Button
                        source={require("../../../public/images/List/left-arrow.png")}
                    />
                </TouchableOpacity>
                <HeaderTitle>{date}</HeaderTitle>
                <TouchableOpacity>
                    <EmptyButton />
                    {/* <Button source={require("../../../public/images/List/delete.png")}/> */}
                </TouchableOpacity>
            </Header>
            <Calendar
                markedDates={markedDates}
                // onDayPress={(day) => {
                //     onSelectDate(day.dateString);
                // }}
                // #
                theme={{
                    selectedDayBackgroundColor: "#b2cfde",
                    selectedDayTextColor : "#b2cfde",
                    //월화수목금토일
                    textSectionTitleColor: "#518099",
                    arrowColor: "#b2cfde",
                    dotColor: "#b2cfde",
                    todayTextColor: "#b2cfde",
                    textMonthFontWeight: "800",
                    textDayHeaderFontWeight: "800"
                }}
            />
        </SafeArea>
    );
};

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #ffffff;
`
const Header = styled(View)`
    width: 100%;
    height: 80px;
    padding: 0px 32px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    elevation: 4;
`
const Button = styled(Image)`
    width: 20px;
    height: 20px;
`
const EmptyButton = styled(View)`
    width: 20px;
    height: 20px;
`
const HeaderTitle = styled(Text)`
    width: 160px;
    text-align: center;
    /* font-family: ; */
    font-size: 16px;
    font-weight : 700;
    color: #000000;
`

export default CalendarScreen;