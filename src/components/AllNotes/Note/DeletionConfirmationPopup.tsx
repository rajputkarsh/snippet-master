import { Dispatch, SetStateAction } from "react";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";

interface DeletionConfirmationPopupProps {
  handleAction: () => void;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

function DeletionConfirmationPopup({
  handleAction,
  handleClose,
}: DeletionConfirmationPopupProps) {

  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div
      className={`transition duration-200 z-50 shadow-md rounded-md w-[310px] md:w-[450px] fixed py-8 pt-10 p-3 ${
        isDarkModeEnabled ? "bg-slate-900" : "bg-white"
      }`}
      style={{
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        top: "30%",
        transform: "translateY(-50%)",
      }}
    >
      <p className="font-bold text-xl text-center">Are you sure ?</p>
      <p className="text-center text-[13px] px-8">
        Are you sure you want to delete this snippet. This action cannot be
        undone.
      </p>
      <div className="flex gap-2 mt-5">
        <button
          onClick={() => handleClose(false)}
          className={`${
            isDarkModeEnabled ? "border-slate-700" : ""
          } border text-[12px] w-full px-10 p-3 rounded-md`}
        >
          Cancel
        </button>
        <button
          onClick={() => handleAction()}
          className=" text-white bg-theme text-[12px] w-full px-10 p-3 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeletionConfirmationPopup;
