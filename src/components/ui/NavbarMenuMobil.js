import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuData } from "../../data/data";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      height: 100,
      justifyContent: 'flex-start',
    },
  }));


export const NavbarMenuMobil = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setOpen(open);
    };
  
    const handleOpen =()=>{
      setOpen(true);
    }

    const listMenuItem = () => (

        <div
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List component="nav" aria-label="main mailbox folders">
                {menuData.map((values,index)=>(
                  <NavLink exact to={values.path} className="nav-item" activeClassName="nav-item-active"  key ={index}>
                    <ListItem button className="nav-list-item">
                          <ListItemIcon>
                              <i className={`fa fa-${values.logo}`}/>
                          </ListItemIcon>
                          <ListItemText primary={values.titulo} />
                      </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
        )
        
  return (
    <>
      <div>
        <div className="nav-movil">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpen}
          >
            <i className="fa fa-bars" />
          </IconButton>
        </div>
      </div>

      <div>
        <Drawer
          className={`${classes.drawer} nav-movil`}
          variant="temporary"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={toggleDrawer(false)}
        >
          <div className={classes.drawerHeader}>
            <IconButton
                onClick= {toggleDrawer(false)}
            >
              <i className="fas fa-times" />
            </IconButton>
          </div>
          <Divider />
            {
                listMenuItem()
            }
          <Divider />
        </Drawer>
      </div>
    </>
  );
};
