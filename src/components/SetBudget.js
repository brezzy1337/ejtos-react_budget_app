import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SetBudget = () => {
    const { departmentBudgets, Currency, CompanyBudget } = useContext(AppContext);
    
    const remainingBudget = departmentBudgets.reduce((total, department) => {
        return (total += (CompanyBudget - department.budget));
    }, 0);

    const spentBudget = departmentBudgets.reduce((total, department) => {
        return (total += (department.budget));
    }, 0);

    return (
    <>
        <div className='alert alert-primary'>
            <span>Budget: {Currency}{CompanyBudget}</span>
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