import { Close, StyleOutlined } from "@mui/icons-material";

interface TagsWindowProps {
  handleClose: () => void;
}

function TagsWindow({ handleClose }: TagsWindowProps) {
  return (
    <div
      style={{
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        top: "30%",
        transform: "translateY(50%)",
      }}
      className="fixed border m-20 w-1/2 z-50 p-4 bg-white shadow-md rounded-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <StyleOutlined />
        </div>
        <div onClick={() => handleClose()}>
          <Close
            sx={{ fontSize: 16 }}
            className="text-slate-400 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default TagsWindow;
