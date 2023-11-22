import React from 'react'
import { auth } from '@clerk/nextjs'
const CheckAuth = () => {
    const { userId } = auth();
  return (
    <>
        
    </>
  )
}

export default CheckAuth
