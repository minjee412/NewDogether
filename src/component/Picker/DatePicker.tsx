import React, { useState } from 'react'
import { Button, View } from 'react-native'
import DatePicker from 'react-native-date-picker'



export default  (props) => {
  const [open, setOpen] = useState(false)


  return (
    <View style={{marginTop:20}}>
      <Button title={JSON.stringify(new Date ((props.date).setHours(24))).slice(1,11)} onPress={() => setOpen(true)} color={'#518099'} />
      <DatePicker
        modal
        mode='date'
        open={open}
        date={props.date}
        onConfirm={(date) => {
          setOpen(false)
          props.setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        androidVariant='nativeAndroid'
        
      />
    </View>
  )
}

