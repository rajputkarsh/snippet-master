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
}

export interface SidebarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icon: ReactNode;
}

export interface DarkModeType {
  id: number;
  isSelected: boolean;
  icon: ReactNode;
}