import { QUICK_LINKS_TITLE } from "@/constants/sidebar";
import { useGlobalContext } from "@/context";
import { SidebarMenu } from "@/interfaces/context";

function SidebarLinks() {
  const {
    sidebarMenuObject: { sidebarMenu, setSidebarMenu },
  } = useGlobalContext();

  const handleClick = (id: number) => {
    const updatedMenu = sidebarMenu.map((item) => {
      if (item.id === id) {
        return {...item, isSelected: true};
      } else {
        return { ...item, isSelected: false };
      }
    });

    setSidebarMenu(updatedMenu);
  };

  return (
    <ul className="text-slate-400 mt-4 flex flex-col gap-2">
      {sidebarMenu.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            handleClick(item.id);
          }}
          className={`cursor-pointer flex gap-1 items-center p-[7px] px-2 rounded-md w-[60%] border border-sm border-purple-600 ${
            item.isSelected
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 hover:bg-purple-600 hover:text-white"
          } transition duration-200`}
        >
          {item.icon}
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function QuickLinks() {
  return (
    <div className="mt-20 text-sm">
      <div className="font-bold text-slate-400">{QUICK_LINKS_TITLE}</div>
        <SidebarLinks />
    </div>
  );
};

