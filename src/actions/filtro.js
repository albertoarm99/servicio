import { types } from "../types/types";

export const filtroCambio = (filtro) => ({
    type: types.filtroSelect,
    payload: filtro
})