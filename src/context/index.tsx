"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
    openSidebar: true,
    setOpenSidebar: () => {},
  },
  openNoteContentObject: {
    openNoteContent: false,
    setOpenNoteContent: () => {},
  },
  isMobileObject: {
    isMobile: false,
    setIsMobile: () => {},
  },
  isLoadingObject: {
    isLoading: false,
    setIsLoading: () => {},
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
  const [openNoteContent, setOpenNoteContent] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile((_) =>window.innerWidth <= 640);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        sidebarMenuObject: { sidebarMenu, setSidebarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSidebarObject: { openSidebar, setOpenSidebar },
        openNoteContentObject: { openNoteContent, setOpenNoteContent },
        isMobileObject: { isMobile, setIsMobile },
        isLoadingObject: { isLoading, setIsLoading },
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
