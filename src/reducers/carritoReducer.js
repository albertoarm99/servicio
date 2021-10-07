import { types } from "../types/types";

const initialState = {
    pedidos: []
}

export const carritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.carritoAgregar:
            return {
                ...state,
                pedidos:[...state.pedidos, action.payload]
            }
            // let ped = state.pedidos.find(p => p.id === action.payload.id)
            // if( ped ){
            //     ped.counter = ped.counter + action.payload.counter
            //     return{
            //         ...state,
            //         pedidos: state.pedidos.map(
            //             p => p.id === action.payload.id
            //             ? ped
            //             : p
            //         )
            //     }
            // }else{
            //     return{
            //         ...state,
            //         pedidos: [...state.pedidos, action.payload]
            //     }
            // }
        case types.carritoEliminar:
             console.log(state.pedidos);

            return{
                ...state,
                pedidos: state.pedidos.filter( pedido => pedido.id !== action.payload)
            }

        default:
            return state;
    }
}