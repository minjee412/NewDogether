import React, {useState} from 'react';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styled from '@emotion/native';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

LocaleConfig.locales['kr'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

function CalendarScreen({navigation}) {
  const [date] = useState(moment().format('YYYY/MM/DD'));
  const user = auth().currentUser;
  const Arr = [];
  const [detailV, setDetailV] = React.useState([]);
  const [dayD, setDayD] = React.useState([]);

  React.useEffect(() => {
    const doc = firestore()
      .collection('Users')
      .doc(user.email)
      .collection('Todo')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          Arr.push(doc.data());
        });
        setDetailV(Arr.reverse());
        setDayD(Arr.reverse());
      });
  }, []);

  // 달력에 점찍는 기록
  const dateArr = [];
  detailV.forEach(el => {
    dateArr.push(el.createdAt.slice(0, 10));
  });

  const markedDates = {};
  dateArr.forEach(date => {
    markedDates[date] = {
      selected: true,
      //   marked: true,
    };
  });
  ////////////////////////////////

  // 클릭하면 해당 일자 보여주는
  const dayArr = [];
  dayD.forEach(el => {
    dayArr.push(el);
  });

  const onDayPress = {};
  dayArr.forEach(day => {
    onDayPress[day] = {
      marked: true,
    };
  });

  console.log('dayArr: ', dayArr);

  ////////////////////////////////

  return (
    <SafeArea>
      <Header>
        <TouchableOpacity onPressOut={() => navigation.pop()}>
          {/* <Button
            source={require('../../../public/images/List/left-arrow.png')}
          /> */}
          <MaterialCommunityIcons
            name="chevron-left"
            style={{fontSize: 28, color: '#ffbe0b'}}
          />
        </TouchableOpacity>
        <HeaderTitle>{date}</HeaderTitle>
        <TouchableOpacity>
          <EmptyButton />
        </TouchableOpacity>
      </Header>
      <Calendar
        markedDates={markedDates}
        // onDayPress={onDayPress}
        theme={{
          calendarBackground: '#111111', // 배경색상
          textSectionTitleColor: '#ffbe0b', // 월화수목금토일
          arrowColor: '#ffbe0b', // 화살표 색상
          dotColor: '#ffbe0b', // 점 색상 marked:
          todayTextColor: '#ffbe0b', // 오늘 날짜 색상
          textDisabledColor: '#666666', // 해당하지 않는 달의 일자
          selectedDayBackgroundColor: '#ffbe0b', // 선택된 일자 배경 색상
          selectedDayTextColor: '#111111', // 선택된 일자 글자 색상
          monthTextColor: '#ffbe0b', // MM월 yyyy
          dayTextColor: '#ffffff', // 일반 달력 글자 색상
          textMonthFontWeight: '800',
          textDayHeaderFontWeight: '800',
        }}
      />
    </SafeArea>
  );
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #0d0d0d;
`;
const Header = styled(View)`
  width: 100%;
  height: 80px;
  padding: 0px 32px;
  background-color: #0d0d0d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* elevation: 4; */
`;
const Button = styled(Image)`
  width: 20px;
  height: 20px;
`;
const EmptyButton = styled(View)`
  width: 28px;
  height: 28px;
`;
const HeaderTitle = styled(Text)`
  width: 160px;
  text-align: center;
  /* font-family: ; */
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

export default CalendarScreen;
