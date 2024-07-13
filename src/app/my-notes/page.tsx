'use client';

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
      <div>
        <SideBar />
      </div>
    );
}

export default MyNotes