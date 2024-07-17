"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import {
  BorderAll,
  FavoriteBorder,
  DeleteOutlineOutlined,
  Logout,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import {
  DarkModeType,
  GlobalContextType,
  SidebarMenu,
} from "@/interfaces/context";

const ContextProvider = createContext<GlobalContextType>({
  sidebarMenuObject: {
    sidebarMenu: [],
    setSidebarMenu: () => {},
  },
  darkModeObject: {
    darkMode: [],
    setDarkMode: () => {},
  },
  openSidebarObject: {
    openSidebar: [],
    setOpenSidebar: () => {},
  },
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarMenu, setSidebarMenu] = useState<Array<SidebarMenu>>([
    {
      id: 1,
      name: "All Snippets",
      isSelected: true,
      icon: <BorderAll sx={{ fontSize: 18 }} />,
    },
    {
      id: 2,
      name: "Favorites",
      isSelected: false,
      icon: <FavoriteBorder sx={{ fontSize: 18 }} />,
    },
    {
      id: 3,
      name: "Trash",
      isSelected: false,
      icon: <DeleteOutlineOutlined sx={{ fontSize: 18 }} />,
    },
    {
      id: 4,
      name: "Logout",
      isSelected: false,
      icon: <Logout sx={{ fontSize: 18 }} />,
    },
  ]);

  const [darkMode, setDarkMode] = useState<Array<DarkModeType>>([
    {
      id: 1,
      icon: <LightMode sx={{ fontSize: 18 }} />,
      type: "light",
      isSelected: true,
    },
    {
      id: 2,
      icon: <DarkMode sx={{ fontSize: 18 }} />,
      type: "dark",
      isSelected: false,
    },
  ]);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <ContextProvider.Provider
      value={{
        sidebarMenuObject: { sidebarMenu, setSidebarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSidebarObject: { openSidebar, setOpenSidebar },
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }

  return context;
};
