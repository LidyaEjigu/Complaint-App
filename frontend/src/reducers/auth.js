const auth=(state=[],action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('studentAuth',JSON.stringify({...action?.payload}))
        //    return {...state,post:action?.payload}
           return [{...state,post:action.payload}]
        case 'FETCH_AUTH':
            return {...state,post:action?.payload}
        case 'LOGOUT':
            localStorage.clear()
            return {...state,post:null}
        default:
            return state;
    }
}
export default auth