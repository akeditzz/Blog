import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);


    return <View style={styles.mainView}>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList
            data={state}
            keyExtractor={blog => blog.title}
            renderItem={({ item }) => {
                return <View style={styles.listView}>
                    <Text style={styles.text} >{item.title}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>  
                        <Feather style={styles.icon} name="trash" />
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>
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
    }
})

export default IndexScreen