import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const DrawerComp = () => {
  const router = useRouter();
  const mobileTab = [
    {
      tabName: "Home",
      Path: "/",
      id: 1,
    },
    {
      tabName: "Create Blog",
      Path: "/new-blog/1",
      id: 2,
    },

    {
      tabName: "Connect Wallet",
      Path: "/",
      id: 3,
    },
  ];

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {mobileTab.map((item, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText onClick={() => router.push(`${item?.Path}`)}>
                  {item?.tabName}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
