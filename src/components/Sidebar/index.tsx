import Logo from "../Logo";
import Languages from "./Languages";
import QuickLinks from "./QuickLinks";

function SideBar() {
  return (
    <div className="w-[20%] p-5 flex flex-col gap-2 h-screen pt-7 border-r">
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  )
}

export default SideBar;
