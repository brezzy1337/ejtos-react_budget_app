import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let new_departmentbudgets = [];
    switch (action.type) {
        case 'SET_BUDGET':
            return {
                ...state,
                // sets the company budget to the payload sent with the action
                companyBudget: action.payload
            };
            default:
                return state;
        }
}


const intialState = {
    companyBudget: 0,
    departmentBudgets: [
        { id: 1, name: 'Marketing', budget: 200 },
        { id: 2, name: 'Finance', budget: 100 },
        { id: 3, name: 'Sales', budget: 50 },
        { id: 3, name: 'Human Resources', budget: 50 },
        { id: 3, name: 'Sales', budget: 50 },
    ],
    currency: '£'
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setBudget = (newBudget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }

    const totalBudgets = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice*item.quantity));
    }, 0);
state.CartValue = totalBudgets;
    return (
        <AppContext.Provider
            value={{
                CompanyBudget: state.companyBudget,
                setBudget,
                DepartmentBudgets: state.departmentBudgets,
                dispatch,
                Currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};