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
  } = useGlobalContext();
  
  const tagsWindowRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tagsWindowRef.current &&
        !tagsWindowRef.current.contains(event.target as Node)
      ) {
    const updatedMenu = secondarySidebarMenu.map((item) => {
      return { ...item, isSelected: false };
    });

    setSecondarySidebarMenu(() => updatedMenu);
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
      className="fixed border m-20 w-1/2 z-10 p-4 bg-white shadow-md rounded-md"
    >
      <Header />
      <Searchbar />
      <TagsList />
    </div>
  );
}

export default TagsWindow;
