import { useGlobalContext } from "@/context";
import TopBar from "../Topbar";
import { isDarkMode } from "@/lib/utils";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);  
  return (
    <div
      className={`w-full p-5 ${
        isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
      }`}
    >
      <TopBar />
    </div>
  );
}

export default ContentArea;
