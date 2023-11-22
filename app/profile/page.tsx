import React from 'react'
import { UserProfile } from '@clerk/nextjs'
const ProfilePage = () => {
  return (
    <div className="w-full flex justify-center my-10">
    <UserProfile />
   </div>
  )
}

export default ProfilePage
