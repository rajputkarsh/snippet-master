import { useGlobalContext } from "@/context";
import TopBar from "../Topbar";
import { isDarkMode } from "@/lib/utils";
import SwiperSelection from "../SwiperSelection";
import AllNotes from "../AllNotes";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);  
  return (
    <div
      className={`w-full flex flex-col gap-6 p-5 ${
        isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
      }`}
    >
      <TopBar />
      <SwiperSelection />
      <AllNotes />
    </div>
  );
}

export default ContentArea;
