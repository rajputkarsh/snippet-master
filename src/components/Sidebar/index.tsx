import { useGlobalContext } from "@/context";
import Logo from "../Logo";
import Languages from "./Languages";
import QuickLinks from "./QuickLinks";
import { isDarkMode } from "@/lib/utils";

function SideBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div
      className={`max-md:hidden pr-10 p-6 flex flex-col gap-2 h-screen pt-7 ${
        isDarkModeEnabled ? "bg-slate-800" : "bg-white"
      }`}
    >
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );
}

export default SideBar;
