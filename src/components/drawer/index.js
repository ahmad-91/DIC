import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;


export default function AppDrawer() {
  const [openDrawer,setOpenDrawer]=useState(false);
  return (

    <React.Fragment>

      <Drawer open={openDrawer} onClose={
        ()=>setOpenDrawer(false)
      }>
        <List>
          <ListItemButton>
            <ListItemText>الرئيسة</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>عند دروازة</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>مجموعتنا</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>المركز الاعلامي</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>تواصل معنا</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
      <IconButton>
        <MenuIcon  onClick={
          ()=> setOpenDrawer(!openDrawer)
         } />
      </IconButton>
    </React.Fragment>
  );
}
