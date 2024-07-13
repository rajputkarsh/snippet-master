import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-theme p-[6px] rounded-md`}>
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }}></DataObjectIcon>
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-theme`}>Snippet</span>
        <span className={`text-slate-600`}>Master</span>
      </div>
    </div>
  );
}
