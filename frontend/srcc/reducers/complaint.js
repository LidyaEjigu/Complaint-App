const complaints=(state=[],action)=>{
    switch (action.type) {
        case "FETCH":
            return action?.payload
        case "CREATE":
            return [{...state,complaint:action?.payload}]
        case "UPDATE":
            return state.map(complaint=>complaint._id === action.payload._id ? action.payload :state)
        case "DELETE":
            return state.filter(complaint=>complaint._id !== action.payload)
        default:
            return state;
    }
}
export default complaints