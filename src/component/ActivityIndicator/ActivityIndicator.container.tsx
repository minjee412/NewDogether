import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from "react-native"

export default function ActivityIndicatorPage () {

    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator />
            <ActivityIndicator size="large"/>
            <ActivityIndicator size="small" color="#0000ff"/>
            <ActivityIndicator size="large" color="#00ff00"/>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContentL : "center"
    },
    horizontal  : {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})