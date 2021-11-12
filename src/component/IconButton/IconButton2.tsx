import * as React from "react"
import styled from "@emotion/native"
import {Image, TouchableOpacity} from "react-native"
import {Images} from "../../images"

const Icons = styled(Image)`
    width: 20px;
    height: 20px;
`

const IconButton2 = ({type}) => {
    // , onPressout
    
    return(
        // <TouchableOpacity onPressOut={onPressout}>
            <Icons source={type}/>
        // </TouchableOpacity>
    );
}

export default IconButton2;