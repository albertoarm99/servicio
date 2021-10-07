import { Grid } from '@material-ui/core';
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { CardMenuItem } from '../../components/cards/CardMenuItem'

import { getComidaCategoria } from '../../components/selectors/getComidaCategoria';
import { ButtonMenuFood } from '../../components/ui/buttons/ButtonMenuFood'
import { dataMenu, tiposMenuData } from '../../data/data';
import '../../index.css';

export const MenuScreen = () => {

    const tipo = useSelector(state => state.filtro.fil)

    const comida = useMemo(() => getComidaCategoria(tipo), [tipo])
    
    return (
        <>
            <div className="menu-platillos">
                <div className="menu-platillos-buttons">
                    {
                        tiposMenuData.map((value,index)=>(
                            <ButtonMenuFood key={index} {...value}/>
                        ))
                    }
                </div>
            </div>

            <div>
                <Grid>
                    <div className="cont-menu-p">
                        <Grid  className="cont-menu-p-fondo" justifyContent="center" container >
                            {
                                comida.map( d => (
                                    <CardMenuItem
                                        key={d.id}
                                        {...d} />
                                ))
                            }
                        </Grid>
                    </div>
                </Grid>
            </div>
        </>
    )
}
