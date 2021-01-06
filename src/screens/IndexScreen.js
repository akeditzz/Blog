import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost, getBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPost()
        const listener = navigation.addListener('didFocus',() => {
            getBlogPost()
        })

        return () =>{
            listener.remove()
        }  
    },[])

    return <View style={styles.mainView}>
        <FlatList
            data={state}
            keyExtractor={blog => `${blog.id}`}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('showScreen', { id: item.id })}>
                    <View style={styles.listView}>
                        <Text style={styles.text} >{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }}
        />
    </View>
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('createScreen')}>
                <Feather style={styles.createIcon} name="plus" />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16
    },
    listView: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        margin: 8,
        padding: 8,
        borderRadius: 8,
        justifyContent: 'space-between'
    },
    mainView: {
        marginTop: 8,
        marginBottom: 40
    },
    icon: {
        fontSize: 20,
        color: 'red'
    },
    createIcon: {
        fontSize: 30,
        color: 'black'
    }
})

export default IndexScreen