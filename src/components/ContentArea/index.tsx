import { useGlobalContext } from "@/context";
import TopBar from "../Topbar";
import { isDarkMode } from "@/lib/utils";
import SwiperSelection from "../SwiperSelection";

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
    </div>
  );
}

export default ContentArea;
