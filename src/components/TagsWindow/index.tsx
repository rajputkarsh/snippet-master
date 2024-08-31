import { useGlobalContext } from "@/context";
import Header from "./Header";
import Searchbar from "./Searchbar";
import TagsList from "./TagsList";

interface TagsWindowProps {}

function TagsWindow({}: TagsWindowProps) {
  return (
    <div
      style={{
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        top: "10%",
      }}
      className="fixed border m-20 w-1/2 z-50 p-4 bg-white shadow-md rounded-md"
    >
      <Header />
      <Searchbar />
      <TagsList />
    </div>
  );
}

export default TagsWindow;
