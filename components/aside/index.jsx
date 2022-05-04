import { useContext } from "react";
import { useRouter } from "next/router";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { itemsList } from "../../data/navdata";
import { NavCtx } from "../../store/context/nav-ctx";

import classes from "./index.module.scss";

const Aside = () => {
  const router = useRouter();
  const navLinks = itemsList(router);
  return (
    <div className={classes.container}>
      <List className={classes.ul}>
        {navLinks.map((item) => {
          const { text, icon, onClick, path } = item;
          return (
            <ListItem
              button
              key={text}
              onClick={onClick}
              className={`${classes.li} ${
                router.asPath !== path ? classes.active : ""
              }`}
            >
              {icon && (
                <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
              )}
              <ListItemText primary={text} className={classes.link} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Aside;
