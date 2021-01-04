import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
    const {state} = useContext(Context)

    return <View style={styles.view}>
        <Text style={styles.titleText}>Edit screen</Text>
    </View>
}

const styles = StyleSheet.create({
    view: {
        margin: 16
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default EditScreen