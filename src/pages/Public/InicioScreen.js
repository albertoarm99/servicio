import React from "react";
import { CardInicioItem } from "../../components/cards/CardInicioItem";
import { Grid, Typography } from "@material-ui/core";
import "../../index.css";
import { dataInicio } from "../../data/data";

export const InicioScreen = () => {
  return (
    <div>
      <header className="ini-img">
        <div className="ini-img-contenedor-text">
            <div className="ini-img-text">Café</div>
            <div className="ini-img-text">&</div>
            <div className="ini-img-text">Restaurante</div>
        </div>
      </header>

      <div className="ini-cont">
          <div >
            <Typography variant="h3" align="center" className="ini-cont-text">
                Los mejores Platillos a tu mesa
            </Typography>
          </div>
          <div className=" ini-cont-card">
            <Grid className="ini-cont-card" justifyContent="center" container spacing={3}>
              {
                dataInicio.map((values,index)=>(
                  <Grid item key={index}>
                    <CardInicioItem {...values} />
                  </Grid>
                ))
              }
            </Grid>
          </div>
      </div>

    </div>
  );
};
