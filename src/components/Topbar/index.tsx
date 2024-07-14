import DarkMode from "./DarkMode"
import SearchBar from "./SearchBar"
import UserProfile from "./UserProfile"

function TopBar() {
  return (
    <div className="rounded-lg flex justify-between items-center bg-white p-3">
      <UserProfile />
      <SearchBar />
      <DarkMode />
    </div>
  )
}

export default TopBar