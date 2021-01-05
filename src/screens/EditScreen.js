import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context)
    let itemId = navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === itemId)

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(itemId, title, content, () => {
                navigation.pop()
            })
        }} />
}

const styles = StyleSheet.create({
})

export default EditScreen