import { useUser } from "@clerk/nextjs"
import Loader from "../Loader";

function UserProfile() {

  const { user } = useUser();
  const imageUrl = user?.imageUrl;

  return (
    <div className="flex gap-3 items-center">
      {
        !user ? (
          <Loader />
        ) : (
          <img src={imageUrl} alt={`${user?.firstName} ${user?.lastName}`} className="w-9 h-9 rounded-full mb-[5px]" />
        )
      }

      <div className="flex flex-col text-sm">
        <span className="font-semibold">{user?.firstName} {user?.lastName}</span>
        <span className="text-slate-500 text-[11px]">{user?.emailAddresses?.[0]?.emailAddress}</span>
      </div>
    </div>
  )
}

export default UserProfile;
