import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SetBudget = () => {
    const { departmentBudgets, Currency, CompanyBudget, dispatch } = useContext(AppContext);

    const changeBudget = (val) => {
        dispatch({
            type:"SET_BUDGET",
            payload: val,
        }, console.log(CompanyBudget));    
    }


    const spentBudget = departmentBudgets.reduce((total, department) => {
        return (total += (department.budget));
    }, 0);

    const remainingBudget = CompanyBudget - spentBudget; 


    return (
    <>
        <div className='alert alert-primary'>
            Budget: {Currency}
            <input 
                name="Budget"
                id="Budget"
                type="number" 
                onChange={(e) => changeBudget(e.target.value)} 
            />
        </div>
        <div className='alert alert-primary'>
            <span>Remaining: {Currency}{remainingBudget}</span>
        </div>
        <div className='alert alert-primary'>
            <span>Spent so far: {Currency}{spentBudget}</span>
        </div>
    </>
    );
};

export default SetBudget;