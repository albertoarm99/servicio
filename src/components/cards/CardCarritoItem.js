import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import React from "react";
import "../../index.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { carritoEliminar } from "../../actions/carrito";

export const CardCarritoItem = ({ id, counter, img, nombre }) => {

  const dispatch = useDispatch();
  const handleDeleteBUtton = () => {
    Swal.fire({
      title: "¿Esta seguro?",
      text: "Que quiere borrar este pedido",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText:"No",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( carritoEliminar("1"))

        console.log("borrado");
      }
    });
  };

  return (
    <Card className="card-carrito-contenedor">
      <div>
        <CardContent>
          <Typography
            component="h6"
            align="center"
            variant="h6"
            className="card-carrito-title"
          >
            Hamburgesa sencilla
          </Typography>
          <hr />

          <Typography align="center" variant="subtitle1" color="textSecondary">
            4 * $49.99
          </Typography>

          <div className="card-carrito-delete">
            <IconButton aria-label="delete" onClick={handleDeleteBUtton}>
              <i className="fas fa-trash" />
            </IconButton>
          </div>
        </CardContent>
      </div>
      <div className="card-carrito-cont-img">
        <img
          className="card-carrito-img"
          src="https://conceptodefinicion.de/wp-content/uploads/2019/08/Comida-2.jpg"
          alt="comida1"
        />
      </div>
    </Card>
  );
};
