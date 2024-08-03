'use client';

import ContentArea from '@/components/ContentArea';
import Loader from "@/components/Loader";
import SideBar from '@/components/Sidebar';
import { useSession } from "@clerk/nextjs";
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useGlobalContext } from '@/context';

function MyNotes() {
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
        <div className="flex flex-row">
          <SideBar />
          <ContentArea />
        </div>
        {isLoading ? <Loader /> : null}
      </>
    );
}

export default MyNotes