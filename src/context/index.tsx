"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  SingleNoteType,
  SingleTagType,
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
  allNotesObject: {
    allNotes: [],
    setAllNotes: () => {},
  },
  selectedNoteObject: {
    selectedNote: null,
    setSelectedNote: () => {},
  },
  isNewNoteObject: {
    isNewNote: false,
    setIsNewNote: () => {},
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
  const [allNotes, setAllNotes] = useState<Array<SingleNoteType>>([]);
  const [selectedNote, setSelectedNote] = useState<SingleNoteType | null>(null);
  const [isNewNote, setIsNewNote] = useState<boolean>(false);
  const [allTags, setAllTags] = useState<Array<SingleTagType>>([]);
  const [selectedTags, setSelectedTags] = useState<Array<SingleTagType>>([]);

  const handleResize = () => {
    setIsMobile((_) => window.innerWidth <= 640);
  };

  const updateAllTags = () => {
    const tags = [
      {
        id: crypto.randomUUID(),
        name: "Tag 1",
      },
      {
        id: crypto.randomUUID(),
        name: "Tag 2",
      },
      {
        id: crypto.randomUUID(),
        name: "Tag 3",
      },
      {
        id: crypto.randomUUID(),
        name: "Tag 4",
      },
      {
        id: crypto.randomUUID(),
        name: "Tag 5",
      },
      {
        id: crypto.randomUUID(),
        name: "Tag 6",
      },
      {
        id: crypto.randomUUID(),
        name: "Tag 7",
      },
      {
        id: crypto.randomUUID(),
        name: "Tag 8",
      },
    ];

    setAllTags(() => tags);
  };

  const updateAllNotes = () => {
    const notes: Array<SingleNoteType> = [
      {
        id: "1",
        title: "hello world",
        isFavorite: false,
        tags: [
          { id: crypto.randomUUID(), name: "javascript" },
          { id: crypto.randomUUID(), name: "reactjs" },
        ],
        description: "My first Component",
        code: `
            import React from 'react';
            import './App.css';
            
            function App() {
                return (
                    <h1> Hello World! </h1>
                );
            }
            
            export default App;
          `,
        language: "javascript",
        createdOn: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Greeting",
        isFavorite: false,
        tags: [
          { id: crypto.randomUUID(), name: "typescript" },
          { id: crypto.randomUUID(), name: "reactjs" },
        ],
        description: "Greeting Component",
        code: `
            import React from 'react';
            import './App.css';
            
            function Greeting() {
                return (
                    <h1> Hello There </h1>
                );
            }
            
            export default Greeting;
          `,
        language: "typescript",
        createdOn: new Date().toISOString(),
      },
      {
        id: "3",
        title: "Print Name",
        isFavorite: false,
        tags: [
          { id: crypto.randomUUID(), name: "javascript" },
          { id: crypto.randomUUID(), name: "reactjs" },
        ],
        description: "Show User's Name",
        code: `
            import React from 'react';
            import './App.css';
            
            function ShowName({ name }) {
                return (
                    <h1> Hello {name} </h1>
                );
            }
            
            export default ShowName;
          `,
        language: "typescript",
        createdOn: new Date().toISOString(),
      },
    ];

    setAllNotes((_) => notes);
  };

  useEffect(() => {
    updateAllTags();
    updateAllNotes();
  }, []);

  useEffect(() => {
    setSelectedTags(() => selectedNote?.tags || []);
  }, [selectedNote]);

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
        allNotesObject: { allNotes, setAllNotes },
        selectedNoteObject: { selectedNote, setSelectedNote },
        isNewNoteObject: { isNewNote, setIsNewNote },
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
