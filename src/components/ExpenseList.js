import React from 'react'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({
    expenses,
    handleDelete,
    handleEdit,
    clearAllItems
}) => {
    return (
        <div>
            <ul className="list">
                {expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />
                })}
            </ul>
            {expenses.length > 0 && <button onClick={clearAllItems} className="btn">
                clear expenses
                <MdDelete className="btn delete-btn"></MdDelete>
                </button>}
        </div>
    )
}

export default ExpenseList
