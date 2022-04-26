
import './App.css';
import Header from "./components/Header.jsx"
import {Balance} from "./components/Balance"
import {IncomeExpenses} from "./components/IncomeExpenses"
import {TransactionList} from "./components/TransactionList"
import {AddTransactions}  from "./components/AddTransactions"
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div classname="container">
       <Balance/>
       <IncomeExpenses/>
       <TransactionList/>
       <AddTransactions/>
     </div>
    </GlobalProvider>
  );
}

export default App;
