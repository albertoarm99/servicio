import { dataMenu } from "../../data/data"

export const getComidaCategoria = ( categoria ) => {

    if (categoria === "todos") {
        return dataMenu;
    } else {
        return dataMenu.filter( menu => menu.tipo === categoria);
    }
}

