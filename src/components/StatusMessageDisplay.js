import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-ui-kitten'


export default class StatusMessageDisplay extends React.Component {
    render(){
        const { statusMessage } = this.props

        mapTypeToColor = {
            success: 'success',
            error: 'danger'
        }

        return (
            statusMessage 
            ? (
                <Text style={[styles.statusMessage, styles[statusMessage.type]]} status={mapTypeToColor[statusMessage.type]}>{ statusMessage.message }</Text>
            )
            : null
        )
    }
}

const styles = StyleSheet.create({
    statusMessage: {
        textAlign: 'center'
    },
    success: {

    },
    error: {

    }
})