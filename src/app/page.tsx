import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m- max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
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

function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <button
        className={`max-sm:w-full bg-theme p-[8px] px-6 text-sm text-white rounded-md hover:bg-white hover:text-theme hover:border hover:border-theme transition duration-200`}
      >
        Sign In
      </button>
      <button
        className={`text-sm border border-theme text-theme hover:bg-theme hover:text-white p-[8px] px-6 rounded-md transition duration-200`}
      >
        Sign Up
      </button>
    </div>
  );
}
