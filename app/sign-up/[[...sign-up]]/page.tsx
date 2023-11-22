import React from 'react'
import { SignUp } from '@clerk/nextjs'
const SignUpPage = () => {
  return (
    <div className="w-full flex justify-center my-10">
      <SignUp />
    </div>
  )
}

export default SignUpPage
