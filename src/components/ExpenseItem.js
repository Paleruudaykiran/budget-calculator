import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md'
const ExpenseItem = ({
    expense,
    handleDelete,
    handleEdit
}) => {
    console.log(expense)
    const {id,charge,amount} = expense
    console.log("ExpenseItem called" + expense)
    console.log(id)
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <div >
                <button className="edit-btn" aria-label="edit button"
                onClick={() => handleEdit(id)}>
                    <MdEdit />
                </button>
                <button onClick={()=>handleDelete(id)} className="delete-btn" aria-label="delete button">
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem
