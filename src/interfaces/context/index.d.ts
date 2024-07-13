import { Dispatch, ReactNode, SetStateAction } from "react";

export interface GlobalContextType {
  sidebarMenuObject: {
    sidebarMenu: Array<SidebarMenu>;
    setSidebarMenu: Dispatch<SetStateAction<Array<SidebarMenu>>>;
  };
}

export interface SidebarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icon: ReactNode;
}
