import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosAddCircle } from "react-icons/io";
import { FaTimesCircle } from 'react-icons/fa';

const DepartmentBudgets = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const handleDeleteItem = () => {
        const department = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_DEPARTMENT',
            payload: department,
        });
    };

    const handleIncreaseDepartmentBudget = () => {
        const department = {
            name: props.name,
        };

        dispatch({
            type: 'INCREASE_DEPARTMENT_BUDGET_10',
            payload: department,
        });
    }

    const handleDecreaseDepartmentBudget = () => {
        const department = {
            name: props.name,
        };

        dispatch({
            type: 'DECREASE_DEPARTMENT_BUDGET_10',
            payload: department,
        });
    }


    return (
        <tr>  
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.budget)}</td>
        {/* <td>{Currency}{parseInt(props.quantity)*parseInt(props.unitprice)}</td> */}               
         <td><IoIosAddCircle size='2.2em' color="green" onClick={handleIncreaseDepartmentBudget}></IoIosAddCircle></td>
        <td><IoIosAddCircle size='2.2em' color="red" onClick={handleDecreaseDepartmentBudget}></IoIosAddCircle></td>
        <td><FaTimesCircle size='2.2em' color="gray" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default DepartmentBudgets;