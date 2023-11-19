import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let new_departmentbudgets = [];
    switch (action.type) {
        case 'SET_BUDGET':
            return {
                ...state,
                // sets the company budget to the payload sent with the action
                companyBudget: action.payload
            }
            
            case 'DELETE_DEPARTMENT':
                const updateDepartmentBudgets = state.departmentBudgets.filter(department => department.name !== action.payload.name);
                return {
                    ...state,
                    departmentBudgets: updateDepartmentBudgets,
                }

            case 'CHG_CURRENCY':
                action.type = "DONE";
                state.Location = action.payload;
                return {
                    ...state
                }
                
            default:
                return state;
        }

}


const initialState = {
    CompanyBudget: 0,
    departmentBudgets: [
        { id: 1, name: 'Marketing', budget: 200 },
        { id: 2, name: 'Finance', budget: 100 },
        { id: 3, name: 'Sales', budget: 50 },
        { id: 3, name: 'Human Resources', budget: 50 },
        { id: 3, name: 'Sales', budget: 50 },
    ],
    Currency: '£'
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
                CompanyBudget: state.CompanyBudget,
                setBudget,
                departmentBudgets: state.departmentBudgets,
                dispatch,
                Currency: state.Currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};