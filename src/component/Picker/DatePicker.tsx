import React, { useState } from 'react'
import { Button, View } from 'react-native'
import DatePicker from 'react-native-date-picker'



export default (props) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


  return (
    <View style={{marginTop:20}}>
      <Button title={{date} ? JSON.stringify(new Date ((date).setHours(24))).slice(1,11) : "🗓   기간 선택"} onPress={() => setOpen(true)} color={{date} ? '#518099' : 'ligthgrey'} />
      <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        androidVariant='nativeAndroid'
        
      />
    </View>
  )
}
