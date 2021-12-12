import React from 'react'
import {MdSend} from 'react-icons/md'
const ExpenseForum = ({
    charge,
    amount,
    handleSubmit,
    handleAmount,
    handleCharge,
    edit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label><br />
                    <input type="text" className="form-control" id="charge" 
                    name="charge" placeholder="e.g. rent" 
                    value={charge}
                    onChange={handleCharge} />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label><br />
                    <input type="number" className="form-control" id="amount" 
                    name="amount" placeholder="100"
                    value={amount} 
                    onChange={handleAmount} />
                </div>
            </div>
            <button type="submit" className="btn">
                {edit ? "Edit" : "Submit" }
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
}

export default ExpenseForum
