
const announcements=(state=[],action)=>{
    switch (action.type) {
        case "FETCHA":
            return action?.payload
        case "FETCHID":
            localStorage.setItem('announcement',JSON.stringify({state,announcement:action.payload}))
            return action?.payload
        case "CREATEA":
            return [...state,action?.payload]
        case "UPDATEA":
            return state.map(announcement=>announcement._id === action.payload._id ? action.payload :state)
        case "DELETEA":
            return state.filter(announcement=>announcement._id !== action.payload)
        default:
            return state;
    }
}
export default announcements