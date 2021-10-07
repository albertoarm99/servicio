import { Button, Chip } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtroCambio } from '../../../actions/filtro';
import '../../../index.css'

export const ButtonMenuFood = ({tipo}) => {

    const tipos = useSelector(state => state.filtro.fil)

    const dispatch = useDispatch();

    return (


        <Chip label={tipo}
            onClick={ ()=> dispatch(filtroCambio(tipo))}
            className="cnt"
            variant={(tipos === tipo)? "outlined" : "default"}
        />

        // <Button
        //     variant="outlined"
        //     onClick={ ()=> dispatch(filtroCambio(props.tipo))}
        //     className="cnt"
        // >
        //     {props.tipo}
        // </Button>
    )
}
