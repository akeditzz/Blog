import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    let itemId = navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === itemId)

    return <View style={styles.view}>
        <Text style={styles.titleText}>{blogPost.title}</Text>
        <Text style={styles.contentText}>{blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('editScreen')}>
                <MaterialCommunityIcons name="pencil" style={styles.editIcon} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        margin: 16
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom:16
    },
    editIcon: {
        fontSize: 30,
        color: 'black'
    },
    contentText: {
        fontSize: 16,
        color: 'black',
        marginBottom:16
    }
})

export default ShowScreen