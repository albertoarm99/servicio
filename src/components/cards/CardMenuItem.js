import { Button, Card, CardContent, Fab, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { carritoAgregar } from "../../actions/carrito";
import { useCounter } from "../../hooks/useCounter";
import "../../index.css";

export const CardMenuItem = ({id,nombre,desc,precio,img}) => {

  const dispatch = useDispatch();
  const { counter, increment, decrement } = useCounter();

  const agregar = () => {
    increment();
  };

  const quitar = () => {
    decrement();
  };

  return (
    <Card className="card-menu-contenedor">

      <div className="card-cont-img">
        <img className="card-menu-img" src={img} alt="comida1" />
      </div>

      <div className="card-menu-contenedor-info">

          <CardContent className="card-menu-contenido cont-info">
            <Typography
              component="h5"
              align="center"
              variant="h5"
              className="card-menu-title"
            >
              {nombre}
            </Typography>
            <hr className="no-visible" />
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              className="card-menu-contenido"
            >
              {desc}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textPrimary"
              className="card-menu-contenido"
            >
              Precio: ${precio}
            </Typography>
          </CardContent>

          <div className="card-menu-contenedor-buttons">
            <Tooltip title="Quitar" aria-label="add" onClick={quitar}>
              <Fab color="secondary" size="small">
                <i className="fas fa-minus"></i>
              </Fab>
            </Tooltip>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              className="card-menu-counter"
            >
              {counter}
            </Typography>
            <Tooltip title="Agregar" aria-label="add" onClick={agregar}>
              <Fab color="secondary" size="small">
                <i className="fas fa-plus"></i>
              </Fab>
            </Tooltip>
          </div>

          <Button
            variant="contained"
            className="card-menu-contenedor-buttons-agregar"
            onClick={()=> dispatch(carritoAgregar( {id , nombre, counter, precio} ))}>
            Agregar orden
          </Button>

      </div>
    </Card>
  );
};
