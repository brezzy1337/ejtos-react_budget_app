import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import SetBudget from './components/SetBudget';
import DepartmentBudgetList from './components/DepartmentBudgetList';
import ItemSelected from './components/ItemSelected';
import Currency from './components/Currency';


const App = () => {
    return (
        <AppProvider>
            <div>Hello Word</div>
            <div className='container'>
                <h1 className='mt-3'>Shopping App</h1>
                <div className='row mt-3'> 
                    <div className='col-sm'>
                        <SetBudget />
                    </div>
                   <div className='col-sm'>
                        <Currency/>
                    </div>
                </div>
                <h3 className='mt-3'>Shopping Cart</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <DepartmentBudgetList/>
                    </div>
                </div>
                <h3 className='mt-3'>Add Items</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ItemSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;