import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let new_budgets = [];
    switch (action.type) {
        case 'CHANGE_BUDGET':
            return {
                ...state,
                budgets: [...state.budgets, action.payload]
            }

        }
}


const intialState = {
    budget: 0,
    departmentBudgets: [
        { id: 1, name: 'Marketing', budget: 200 },
        { id: 2, name: 'Finance', budget: 100 },
        { id: 3, name: 'Sales', budget: 50 },
        { id: 3, name: 'Human Resources', budget: 50 },
        { id: 3, name: 'Sales', budget: 50 },
    ],
    Location: '£'
}