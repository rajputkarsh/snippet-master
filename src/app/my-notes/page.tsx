'use client';

import ContentArea from '@/components/ContentArea';
import Loader from "@/components/Loader";
import SideBar from '@/components/Sidebar';
import { useSession } from "@clerk/nextjs";
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useGlobalContext } from '@/context';
import { isDarkMode } from '@/lib/utils';

function MyNotes() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  const { isLoaded, isSignedIn } = useSession();
  const {
    isLoadingObject: { isLoading },
  } = useGlobalContext();  

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      redirect("/");
    }
  }, [isLoaded, isSignedIn]);
  
    return (
      <>
        <div className={`flex flex-row ${isDarkModeEnabled ? "bg-slate-700" : "bg-slate-100"}`}>
          <SideBar />
          <ContentArea />
        </div>
        {isLoading ? <Loader /> : null}
      </>
    );
}

export default MyNotes