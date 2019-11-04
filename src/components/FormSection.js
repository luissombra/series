import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Layout
} from 'react-native-ui-kitten';

const FormSection = (props) => {
    return (
        <Layout style={[styles.formSection, props.style, { flex: props.flex || 1 }]}>
            {props.children}
        </Layout>
    )
}

const styles = StyleSheet.create({
    formSection: {
      padding: 20,
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center'
    },
});

export default FormSection