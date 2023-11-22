import React from 'react'
import { SignIn } from '@clerk/nextjs'
const SignInPage = () => {
  return (
    <>
      <div className="w-full flex justify-center my-10">
      <SignIn />
      </div>
    </>
  )
}

export default SignInPage
