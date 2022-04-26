import React,{useContext,useState} from 'react';
import {GlobalContext} from "../context/GlobalState"



export const AddTransactions=()=>{
const[text,setText]=useState('')
const[amount,setAmount]=useState(0)

const {addTransaction}=useContext(GlobalContext)

const onSubmit=(e)=>{
   e.preventDefault()
   const newTransaction={
       id:Math.floor(Math.random()*1000000),
       text,
       amount:+amount
   }
   addTransaction(newTransaction)
}
 return(
        <>
        <h3>Add New Transactions</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
                <input type="text" placeholder="enter text..." value={text}
                onChange={(e)=>setText(e.target.value)}/>
                
            </div>
            <div  className="form-control">
            <label>Amount<br/>(negative-expense,positive-income)</label>
                <input type="number" placeholder="enter the amount...." value={amount}
                onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
        </>
    )
}