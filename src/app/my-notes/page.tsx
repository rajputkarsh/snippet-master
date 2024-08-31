"use client";

import ContentArea from "@/components/ContentArea";
import Loader from "@/components/Loader";
import SideBar from "@/components/Sidebar";
import { useSession } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import TagsWindow from "@/components/TagsWindow";
import AddTag from "@/components/AddTag";

function MyNotes() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const { isLoaded, isSignedIn } = useSession();
  const {
    isLoadingObject: { isLoading },
    secondarySidebarMenuObject: { secondarySidebarMenu },
    openNewTagsWindowObject: { openNewTagsWindow },
  } = useGlobalContext();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      redirect("/");
    }
  }, [isLoaded, isSignedIn]);

  const selectedSecondarySidebarMenuItem = secondarySidebarMenu.find(
    (menuItem) => menuItem.isSelected
  );
  const istagsOptionSelected =
    (selectedSecondarySidebarMenuItem?.name || "").trim().toLowerCase() ===
    "tags";

  return (
    <>
      <div
        className={`flex flex-row ${
          isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"
        }`}
      >
        <SideBar />
        <ContentArea />
      </div>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: isDarkModeEnabled ? "#1E293B" : "white",
            color: isDarkModeEnabled ? "white" : "black",
          },
        }}
      />
      {istagsOptionSelected && (
        <TagsWindow />
      )}
      {
        openNewTagsWindow && (
          <AddTag />
        )
      }
      {isLoading ? <Loader /> : null}
    </>
  );
}

export default MyNotes;
