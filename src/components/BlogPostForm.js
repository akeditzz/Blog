import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return <View style={styles.view}>
        <Text style={styles.titleText}>Enter Title:</Text>
        <TextInput style={styles.textInput}
            placeholder='Start typing title'
            onChangeText={(text) => setTitle(text)}
            value={title} />
        <Text style={styles.titleText}>Enter content:</Text>
        <TextInput style={styles.textInput}
            placeholder='Start typing content'
            onChangeText={(text) => setContent(text)}
            value={content} />
        <Button
            title='Save Blog Post'
            onPress={() => {
                onSubmit(title, content)
            }} />
    </View>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
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
        marginBottom: 4
    },
    textInput: {
        fontSize: 16,
        color: 'black',
        padding: 8,
        backgroundColor: 'lightgrey',
        borderRadius: 4,
        marginBottom: 16
    }
})

export default BlogPostForm