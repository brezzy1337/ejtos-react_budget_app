import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = () => {
    const { dispatch, departmentBudgets, CompanyBudget} = useContext(AppContext);

    const [name, setName] = useState('');
    const [allocation, setAllocation] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        const item = {            
            name: name,
            budget: parseInt(allocation),
        };

        if(action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
                dispatch({
                    type: 'SET_DEPARTMENT_BUDGET',
                    payload: item,
                });

                const newSpentBudget = departmentBudgets.reduce((total, department) => {
                    return total + department.budget;
                }, 0) + parseInt(allocation);

                if (newSpentBudget > CompanyBudget) {
                    alert(`You have exceeded the company budget by ${newSpentBudget - CompanyBudget}!`);
                    console.log(newSpentBudget);
                }
        }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="Marketing" name="Marketing"> Marketing</option>
                <option value="Finance" name="Finance">Finance</option>
                <option value="Sales" name="Sales">Sales</option>
                <option value="Human Resources" name="Human Resources">Human Resources</option>
                <option value="IT" name="IT">IT</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                  <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>  
                  <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>

                    <input
                        required='required'
                        type='number'
                        id='allocation'
                        value={allocation}
                        style={{size: 10}}
                        onChange={(event) => setAllocation(event.target.value)}>
                        </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Submit
                    </button>
                </div>
                </div>

        </div>
    );
};

export default ItemSelected;