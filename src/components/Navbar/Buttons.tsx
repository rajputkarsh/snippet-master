import { SIGN_IN, SIGN_UP } from "@/constants/navbar";

export default function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <button
        className={`max-sm:w-full bg-theme p-[8px] px-6 text-sm text-white rounded-md hover:bg-white hover:text-theme hover:border hover:border-theme transition duration-200`}
      >
        {SIGN_IN}
      </button>
      <button
        className={`text-sm border border-theme text-theme hover:bg-theme hover:text-white p-[8px] px-6 rounded-md transition duration-200`}
      >
        {SIGN_UP}
      </button>
    </div>
  );
}