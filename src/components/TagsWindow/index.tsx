import { useEffect, useRef } from "react";
import { useGlobalContext } from "@/context";
import Header from "./Header";
import Searchbar from "./Searchbar";
import TagsList from "./TagsList";

function TagsWindow() {
  const {
    secondarySidebarMenuObject: {
      secondarySidebarMenu,
      setSecondarySidebarMenu,
    },
    openSidebarObject: { setOpenSidebar },
    isMobileObject: { isMobile },
  } = useGlobalContext();

  const tagsWindowRef = useRef<HTMLDivElement | null>(null);

  const isAddTagDialogOpened = (): boolean => {
    return !!document.getElementById("tagDialog");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      tagsWindowRef.current &&
      !tagsWindowRef.current.contains(event.target as Node) &&
      !isAddTagDialogOpened()
    ) {
      const updatedMenu = secondarySidebarMenu.map((item) => {
        return { ...item, isSelected: false };
      });

      setSecondarySidebarMenu(() => updatedMenu);
      setOpenSidebar(() => false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={tagsWindowRef}
      style={{
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        top: "10%",
      }}
      className={`fixed border m-20 z-20 p-4 bg-white shadow-md rounded-md ${
        isMobile ? "w-5/6" : "w-1/2"
      }`}
    >
      <Header />
      <Searchbar />
      <TagsList />
    </div>
  );
}

export default TagsWindow;
