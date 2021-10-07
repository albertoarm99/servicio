import { combineReducers } from "redux";
import { carritoReducer } from "./carritoReducer";
import { filtroReducer } from "./filtroReducer";

export const rootReducer = combineReducers({
    filtro: filtroReducer,
    carrito: carritoReducer,
})