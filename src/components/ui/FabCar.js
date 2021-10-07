import { Badge, Fab, IconButton } from "@material-ui/core";
import React from "react";

export const FabCar = () => {
  return (
    <Fab color="" aria-label="add">
        <Badge badgeContent={0} color="secondary">
          <i class="fas fa-shopping-cart"></i>
        </Badge>
    </Fab>
  );
};
