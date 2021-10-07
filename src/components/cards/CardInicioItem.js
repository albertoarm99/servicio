import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../../index.css"

export const CardInicioItem = (props) => {
  return (
    <Card className="card-inicio-contenedor">
      <img className="card-inicio-img" src={`./assets/inicio/${props.img}.jpg`} alt="carr1"/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="center">
            {props.desc}
        </Typography>
      </CardContent>
    </Card>
  )
};
