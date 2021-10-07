import React from "react";
import { menuData } from "../../data/data";
import { ButtonMenuItme } from "./ButtonMenuItme";
import { NavbarMenuMobil } from "./NavbarMenuMobil";

const menudata = menuData;


export const NavbarMenu = () => {
  return (
    <>
      <div>
        <div className="nav-desktop">
          {menudata.map((values, index) => (
            <ButtonMenuItme key={index} {...values} />
          ))}
        </div>
        <NavbarMenuMobil/>
      </div>
    </>
  );
};
