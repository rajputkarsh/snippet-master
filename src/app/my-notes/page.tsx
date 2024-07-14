'use client';

import ContentArea from '@/components/ContentArea';
import SideBar from '@/components/Sidebar';
import { useAuth, UserButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

function MyNotes() {

  const {userId} = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (!userId) {
        redirect("/");
      }
    })
  }, [userId]);
  
    return (
      <div className='flex flex-row'>
        <SideBar />
        <ContentArea />
      </div>
    );
}

export default MyNotes