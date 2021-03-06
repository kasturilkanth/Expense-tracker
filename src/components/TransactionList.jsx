import {Transaction} from './Transaction';
import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState"



export const TransactionList=()=>{
    const {transactions}=useContext(GlobalContext)
    return(
        <div>
<h3>History</h3>
<ul  className="list">
{transactions.map(transaction=>{
    return <Transaction key={transaction.id} transaction={transaction}/>
})}
</ul>
</div>
    )
}