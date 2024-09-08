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
  StyleOutlined,
} from "@mui/icons-material";
import {
  DarkModeType,
  GlobalContextType,
  SidebarMenu,
  SingleNoteType,
  SingleTagType,
} from "@/interfaces/context";
import { useUser } from "@clerk/nextjs";

const ContextProvider = createContext<GlobalContextType>({
  sidebarMenuObject: {
    sidebarMenu: [],
    setSidebarMenu: () => {},
  },
  secondarySidebarMenuObject: {
    secondarySidebarMenu: [],
    setSecondarySidebarMenu: () => {},
  },
  openNewTagsWindowObject: {
    openNewTagsWindow: false,
    setOpenNewTagsWindow: () => {},
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
  allTagsObject: {
    allTags: [],
    setAllTags: () => {},
  },
  selectedNoteObject: {
    selectedNote: null,
    setSelectedNote: () => {},
  },
  selectedTagsObject: {
    selectedTags: [],
    setSelectedTags: () => {},
  },
  isNewNoteObject: {
    isNewNote: false,
    setIsNewNote: () => {},
  },
  tagEditModeObject: {
    tagEditMode: null,
    setTagEditMode: () => {},
  },
  clerkUserIdObject: {
    clerkUserId: null,
    setClerkUserId: () => {},
  },
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {

  const user = useUser();

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
  ]);

  const [secondarySidebarMenu, setSecondarySidebarMenu] = useState<
    Array<SidebarMenu>
  >([
    {
      id: 4,
      name: "Tags",
      isSelected: false,
      icon: <StyleOutlined sx={{ fontSize: 18 }} />,
    },
    {
      id: 5,
      name: "Logout",
      isSelected: false,
      icon: <Logout sx={{ fontSize: 18 }} />,
    },
  ]);

  const [openNewTagsWindow, setOpenNewTagsWindow] = useState<boolean>(false);

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allNotes, setAllNotes] = useState<Array<SingleNoteType>>([]);
  const [selectedNote, setSelectedNote] = useState<SingleNoteType | null>(null);
  const [isNewNote, setIsNewNote] = useState<boolean>(false);
  const [allTags, setAllTags] = useState<Array<SingleTagType>>([]);
  const [selectedTags, setSelectedTags] = useState<Array<SingleTagType>>([]);
  const [tagEditMode, setTagEditMode] = useState<string | null>(null);
  const [clerkUserId, setClerkUserId] = useState<string | null>(null);

  const handleResize = () => {
    setIsMobile((_) => window.innerWidth <= 640);
  };

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

  const updateAllTags = () => {
    setAllTags(() => tags);
  };

  const updateAllNotes = () => {
    const notes: Array<SingleNoteType> = [
      {
        id: "1",
        title: "hello world",
        isFavorite: false,
        tags: [],
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
        isDeleted: false,
      },
      {
        id: "2",
        title: "Greeting",
        isFavorite: false,
        tags: [],
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
        isDeleted: false,
      },
      {
        id: "3",
        title: "Print Name",
        isFavorite: false,
        tags: [],
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
        isDeleted: false,
      },
    ];

    setAllNotes((_) => notes);
  };

  
  useEffect(() => {
    if (user.user?.id && user.user?.id !== clerkUserId) {
      setClerkUserId(() => user.user?.id);
    }
  }, [user.user?.id]);

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
        secondarySidebarMenuObject: {
          secondarySidebarMenu,
          setSecondarySidebarMenu,
        },
        openNewTagsWindowObject: {
          openNewTagsWindow,
          setOpenNewTagsWindow,
        },
        darkModeObject: { darkMode, setDarkMode },
        openSidebarObject: { openSidebar, setOpenSidebar },
        openNoteContentObject: { openNoteContent, setOpenNoteContent },
        isMobileObject: { isMobile, setIsMobile },
        isLoadingObject: { isLoading, setIsLoading },
        allNotesObject: { allNotes, setAllNotes },
        allTagsObject: { allTags, setAllTags },
        selectedNoteObject: { selectedNote, setSelectedNote },
        selectedTagsObject: { selectedTags, setSelectedTags },
        isNewNoteObject: { isNewNote, setIsNewNote },
        tagEditModeObject: { tagEditMode, setTagEditMode },
        clerkUserIdObject: { clerkUserId, setClerkUserId },
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
