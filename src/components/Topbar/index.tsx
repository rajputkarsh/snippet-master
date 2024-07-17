import { useGlobalContext } from "@/context";
import DarkMode from "./DarkMode"
import SearchBar from "./SearchBar"
import UserProfile from "./UserProfile"
import { isDarkMode } from "@/lib/utils";
import SidebarMenuIcon from "./SidebarMenuIcon";

function TopBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div
      className={`rounded-lg flex justify-between items-center p-3 ${
        isDarkModeEnabled ? "bg-slate-800" : "bg-white"
      }`}
    >
      <UserProfile />
      <SearchBar />
      <div className="flex gap-4 items-center">
        <DarkMode />
        <SidebarMenuIcon />
      </div>
    </div>
  );
}

export default TopBar