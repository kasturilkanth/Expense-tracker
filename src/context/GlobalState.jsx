//global state storage
import {useReducer,createContext} from "react";
import AppReducers from "./AppReducers";

const initialState=({
    transactions:[]
})
//create store
export const GlobalContext=createContext(initialState);

//provider component:component who wish to access the global store
// consumer component:the comonent which is accessing the global state shld be wrapped inside the consumer

//provider component
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducers,initialState);
    //action creator
    function deleteTransaction(id){
           dispatch({
               type:"DELETE_TRANSACTION",
               payload:id
           })
    }
    function addTransaction(id){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:id
        })
 }
 return(
     <GlobalContext.Provider value={{transactions:state.transactions,addTransaction,deleteTransaction}}>
         {children}</GlobalContext.Provider>
 )





}