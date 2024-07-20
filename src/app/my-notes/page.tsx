'use client';

import ContentArea from '@/components/ContentArea';
import Loader from "@/components/Loader";
import SideBar from '@/components/Sidebar';
import { useAuth } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useGlobalContext } from '@/context';

function MyNotes() {
  const { userId } = useAuth();
  const {
    isLoadingObject: { isLoading },
  } = useGlobalContext();  

  useEffect(() => {
    setTimeout(() => {
      if (!userId) {
        redirect("/");
      }
    })
  }, [userId]);
  
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