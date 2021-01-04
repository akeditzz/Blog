import React,{useReducer} from 'react'

export default (reducers,actions,initialState)=>{
const Context = React.createContext()

const Provider = ({childern})=>{
    const[state,dispatch] = useReducer(reducers,initialState)

    const boundActions = {}

    for (let key in actions){
        boundActions[key]=actions[key](dispatch)
    }

    return <Context.Provider value={{state,...boundActions}}>
        {childern}
    </Context.Provider>
}

return {Context,Provider}
}