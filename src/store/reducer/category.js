const initialState = [];


function bascet(state= initialState, action) { 
    if(action.type === "all"){
        action.payload.map(arr=>{
           return state.push(arr)
        })
        return state
    } 
    return state
 }

 export default bascet