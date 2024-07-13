import { QUICK_LINKS_TITLE } from "@/constants/sidebar";
import { BorderAll, FavoriteBorder, DeleteOutlineOutlined } from "@mui/icons-material";

function SidebarLinks() {
  return (
    <>
      <li className="flex gap-1 items-center bg-purple-600 border border-sm border-purple-600 text-white p-[7px] px-2 rounded-md w-[60%] hover:bg-white hover:text-purple-600 transition duration-200">
        <BorderAll sx={{fontSize: 18}} />
        <span>All Snippets</span>
      </li>
      <li className="flex gap-1 items-center bg-purple-600 border border-sm border-purple-600 text-white p-[7px] px-2 rounded-md w-[60%] hover:bg-white hover:text-purple-600 transition duration-200">
        <FavoriteBorder sx={{fontSize: 18}} />
        <span>Favorites</span>
      </li>
      <li className="flex gap-1 items-center bg-purple-600 border border-sm border-purple-600 text-white p-[7px] px-2 rounded-md w-[60%] hover:bg-white hover:text-purple-600 transition duration-200">
        <DeleteOutlineOutlined sx={{fontSize: 18}} />
        <span>Trash</span>
      </li>
    </>
  );
}

export default function QuickLinks() {
  return (
    <div className="mt-20 text-sm">
      <div className="font-bold text-slate-400">{QUICK_LINKS_TITLE}</div>
      <ul className="text-slate-400 mt-4 flex flex-col gap-2">
        <SidebarLinks />
      </ul>
    </div>
  );
};

