import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
// import { Images } from '../../images';
// import PropTypes from 'prop-types'

const Icons = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
`


export default function IconButton({type, onPressOut}){
    return(
        <TouchableOpacity onPressOut={onPressOut}>
            <Icons source={type}/>
        </TouchableOpacity>
    )
}

