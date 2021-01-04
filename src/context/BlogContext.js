import React,{useReducer} from 'react'

const BlogContext = React.createContext()

const blogReducer = (state,action) =>{
    switch(action.type){
        case 'addBlogPost':
            return [...state,{title:`Blog post #${state.length+1}`}];
            default: return state
    }
}

export const BlogProvider = ({children}) =>{

const [blogPost,dispatch] = useReducer(blogReducer,[])

const addBlogPost = ()=>{
    dispatch({type:'addBlogPost'})
}

    return <BlogContext.Provider value={{data:blogPost,addBlogPost}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext