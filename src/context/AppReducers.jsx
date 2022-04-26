//these are the departments
function AppReducers(state,action){
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload.id)
            }
            case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
            default:
                return state;
    }
}
export default AppReducers;