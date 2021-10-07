import { types } from "../types/types";

export const carritoAgregar = (pro) =>({
    type: types.carritoAgregar,
    payload: pro
})

export const carritoEliminar = (id) => ({
    type: types.carritoEliminar,
    payload: id
})