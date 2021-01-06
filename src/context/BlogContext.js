import jsonserver from '../api/jsonserver'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'getBlogPosts': return action.payload
        case 'deleteBlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'editBlogPost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
            })
        default: return state
    }
}

const getBlogPost = (dispatch) => {
    return async () => {
        const response = await jsonserver.get('/blogposts')
        dispatch({ type: 'getBlogPosts', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonserver.post('/blogposts', { title, content })
        if (callback) { callback() }
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonserver.delete(`/blogposts/${id}`)
        dispatch({type:'deleteBlogPost',payload:id})
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonserver.put(`/blogposts/${id}`,{title,content})
        dispatch({ type: 'editBlogPost', payload: { id, title, content } });
        callback()
    };
};

export const { Context, Provider } = createDataContext(blogReducer
    , { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost }
    , []);