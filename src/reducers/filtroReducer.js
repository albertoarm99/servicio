import { types } from "../types/types";

const initialState = {
    fil: "todos",
}

export const filtroReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.filtroSelect:
            return{
                ...state,
                fil: action.payload
            }
        default:
            return state;
    }
}