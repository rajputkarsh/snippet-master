import { Dispatch, ReactNode, SetStateAction } from "react";

export interface GlobalContextType {
  sidebarMenuObject: {
    sidebarMenu: Array<SidebarMenu>;
    setSidebarMenu: Dispatch<SetStateAction<Array<SidebarMenu>>>;
  };
  darkModeObject: {
    darkMode: Array<DarkModeType>;
    setDarkMode: Dispatch<SetStateAction<Array<DarkModeType>>>;
  };
  openSidebarObject: {
    openSidebar: openSidebar;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  };
}

export interface SidebarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icon: ReactNode;
}

export type Theme = "light" | "dark"
export interface DarkModeType {
  id: number;
  type: Theme;
  isSelected: boolean;
  icon: ReactNode;
}