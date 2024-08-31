import { useGlobalContext } from "@/context"
import { isDarkMode } from "@/lib/utils";

function AddTag() {

  const {
    darkModeObject: { darkMode }
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div>AddTag</div>
  )
}

export default AddTag