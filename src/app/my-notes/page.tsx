'use client';

import { useAuth, UserButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

function MyNotes() {

  const {userId} = useAuth();

  if (!userId) {
    redirect('/');
  }
  
    return (
      <div>
        <UserButton />
      </div>
    );
}

export default MyNotes