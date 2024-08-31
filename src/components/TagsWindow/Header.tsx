import { useGlobalContext } from "@/context";
import { Close, StyleOutlined } from "@mui/icons-material";

function Header() {
  const {
    secondarySidebarMenuObject: {
      secondarySidebarMenu,
      setSecondarySidebarMenu,
    },
  } = useGlobalContext();

  const handleClose = () => {
    const updatedMenu = secondarySidebarMenu.map((item) => {
      return { ...item, isSelected: false };
    });

    setSecondarySidebarMenu(() => updatedMenu);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <StyleOutlined />
        <span className="text-md font-bold">Tags</span>
      </div>
      <div onClick={() => handleClose()}>
        <Close
          sx={{ fontSize: 16 }}
          className="text-slate-400 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
