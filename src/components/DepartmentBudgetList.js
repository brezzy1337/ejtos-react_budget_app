import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const DepartmentBudgetList = () => {
    const { departmentBudgets } = useContext(AppContext);
    
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
            <tbody>
            {departmentBudgets.map((departmentBudget) => (
                <ExpenseItem id={departmentBudget.id} key={departmentBudget.id} name={departmentBudget.name} departmentBudget={departmentBudget.budget} />
            ))}
            </tbody>
        </table>
    );
};

export default DepartmentBudgetList;