import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            return [...state,
            {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }]
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

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'addBlogPost', payload: { title, content } })
        callback()
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'deleteBlogPost', payload: id });
    };
};

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'editBlogPost', payload: { id, title, content } });
        callback()
    };
};

export const { Context, Provider } = createDataContext(blogReducer
    , { addBlogPost, deleteBlogPost, editBlogPost }
    , [{ title: 'Test Title', content: 'Test Content', id: 1 }]);