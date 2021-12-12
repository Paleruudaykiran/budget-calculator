import './App.css';
import ExpenseForum from './components/ExpenseForum';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import React,{useState} from 'react'
const initialExpenses = [
  {
    id : 1,charge:"rent",amount:1600
  },
  {
    id :2,charge:"car payment",amount:1300
  },
  {
    id :3,charge:"credit",amount:1200
  }
]
function App() {
  // state values 
  // all expenses,add expense
  const [expenses,setExpenses] = useState(initialExpenses)
  // single expense
  const [charge,setCharge] = useState('')
  // single amount
  const [amount,setAmount] = useState('')
  // single alert
  const [alert,setAlert] = useState({show:false})
  // edit item
  const [edit,setEdit] = useState(false)
  // id
  const [id,setId] = useState(0)
  // functionality
  const handleCharge = e => {
    console.log("handleCharge : " + e.target + " " + e.target.value)
    setCharge(e.target.value)
  }
  const handleAmount = e => {
    console.log("handleAmount : " + e.target + " " + e.target.value)
    setAmount(e.target.value)
  }
  const handleAlert = (text) => {
    setAlert({show : true,info:text})
    setTimeout(() => {setAlert({show : false})},3000)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount > 0) {
      if(edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item,charge,amount}: item
        })
        setExpenses(tempExpenses)
        setId(0) 
        setEdit(false)
        handleAlert("Item edited")
      }
      else {
        const singleExpense = {id:expenses.length,charge,amount}
        setExpenses([...expenses,singleExpense])
        handleAlert("item added")
      }
      setCharge("")
      setAmount("")
    }else {
      // handle alert called
      handleAlert("charge can not be empty")
    }
  }
  const handleDelete = id => {
    // deleting single items from the list use filter function 
    const newExpenses = expenses.filter((expense) => {
      //console.log(id+ " " + expense.id + " ")
      return expense.id !== id
    })
    //console.log(newExpenses)
    setExpenses(newExpenses)
    handleAlert("Item deleted")
  }
  const handleEdit = id => {
    let expense = expenses.find((item) => item.id=== id)
    let {charge,amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
    console.log(expense)
  }
  const clearAllItems = e => {
    //clear all items means empty the expenses array
    setExpenses([])
    handleAlert("All items deleted")
  
  }
  return (
    <div className="App">
      {alert.show && <Alert info={alert.info} />}
      <h1 className="App-header">Budget Calculator</h1>
      <main>

        <ExpenseForum charge={charge} amount={amount} 
        handleSubmit={handleSubmit} handleAmount={handleAmount} 
        handleCharge={handleCharge}
        edit={edit} />


        <ExpenseList expenses={expenses} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit} clearAllItems={clearAllItems} />


      </main>
      <h1 className="App-footer">
        total spending : <span className="total">
          $ {expenses.reduce((acc,curr)=>{
            return (acc += Number(curr.amount))
          },0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
