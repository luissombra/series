import React from 'react'
import { StyleSheet } from 'react-native'
import defaultStyle from '../styles/default'

import {
    Layout,
    Text,
    Spinner 
} from 'react-native-ui-kitten'

export default class LoadingIndicator extends React.Component {
    constructor(props){
        super(props)
    }



    render(){
        const { isLoading, caption } = this.props

        return (
            isLoading 
                ? (
                    <Layout style={[defaultStyle.centered, defaultStyle.row]}>
                        <Spinner />
                        <Text style={ styles.caption }>{ caption }</Text>
                    </Layout>
                )
                : null
        )
       
    }
}

const styles = StyleSheet.create({
    caption: {
        marginLeft: 10
    }
})