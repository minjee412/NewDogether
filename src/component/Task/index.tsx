import React from 'react' 
import styled from '@emotion/native'
import IconButton from '../IconButton/IconButton'
import { Images } from '../../images'
import { Text, View } from 'react-native'


const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
`

const Contents = styled(Text)`
    flex: 1;
    font-size: 24px;
    color: ${({completed}) => (completed ? 'gray' : 'black')};
    text-decoration: ${({completed}) =>
    completed ? 'line-through' : 'none'};
`


export default function Task({text}){
    
    return(
        <Container>
            <IconButton type={Images.Uncompleted} />
            <Contents>{text}</Contents>
            <IconButton type={Images.Update} />
            <IconButton type={Images.Delete} />
        </Container>
    )
}