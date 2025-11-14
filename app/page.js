import React from 'react'
import { auth } from '@/auth'
import { SignOut } from '@/components/signout-button';

export default async function page() {

  const session = await auth();
  return (
    <div>page - {JSON.stringify(session)}

      <SignOut />
    </div>
  )
}
