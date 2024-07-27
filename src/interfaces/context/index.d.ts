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

export interface SingleNoteType {
  id: string;
  title: string;
  isFavorite: boolean;
  tags: string[];
  description: string;
  code: string;
  language: string;
  createdOn: string;
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
  allNotesObject: {
    allNotes: Array<SingleNoteType>;
    setAllNotes: Dispatch<SetStateAction<Array<SingleNoteType>>>;
  };
  selectedNoteObject: {
    selectedNote: SingleNoteType | null;
    setSelectedNote: Dispatch<SetStateAction<SingleNoteType | null>>;
  };
  isNewNoteObject: {
    isNewNote: boolean;
    setIsNewNote: Dispatch<SetStateAction<boolean>>;
  };
}