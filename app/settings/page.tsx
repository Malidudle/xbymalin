import NotLoggedIn from '@/components/NotLoggedInUI/NotLoggedIn'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'

const Settings = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return <NotLoggedIn />
  }

  return (
    <div>Settings</div>
  )
}

export default Settings