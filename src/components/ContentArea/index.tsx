import { useGlobalContext } from "@/context";
import TopBar from "../Topbar";
import { isDarkMode } from "@/lib/utils";
import SwiperSelection from "../SwiperSelection";
import AllNotes from "../AllNotes";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
    openNoteContentObject: { openNoteContent },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);  
  return (
    <div
      className={`w-full flex flex-col gap-4 p-5 ${
        isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
      }`}
    >
      <div
        className={`flex flex-col gap-6 ${
          openNoteContent ? "w-[50%]" : "w-full"
        }`}
      >
        <TopBar />
        <SwiperSelection />
      </div>
      <AllNotes />
    </div>
  );
}

export default ContentArea;
