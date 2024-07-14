"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { BorderAll, FavoriteBorder, DeleteOutlineOutlined, Logout } from "@mui/icons-material";
import { GlobalContextType, SidebarMenu } from "@/interfaces/context";

const ContextProvider = createContext<GlobalContextType>({
  sidebarMenuObject: {
    sidebarMenu: [],
    setSidebarMenu: () => {}
  }
});

export default function GlobalContextProvider({children}: {children: ReactNode}) {
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

  return (
    <ContextProvider.Provider value={{sidebarMenuObject: {sidebarMenu, setSidebarMenu}}}>
      {children}
    </ContextProvider.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(ContextProvider);

  if(!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }

  return context;
}