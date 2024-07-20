import { Dispatch, ReactNode, SetStateAction } from "react";

export interface SidebarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icon: ReactNode;
}

export type Theme = "light" | "dark";
export interface DarkModeType {
  id: number;
  type: Theme;
  isSelected: boolean;
  icon: ReactNode;
}
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
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  };
  openNoteContentObject: {
    openNoteContent: boolean;
    setOpenNoteContent: Dispatch<SetStateAction<boolean>>;
  };
  isMobileObject: {
    isMobile: boolean;
    setIsMobile: Dispatch<SetStateAction<boolean>>;
  };
  isLoadingObject: {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
  };
}