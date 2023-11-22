'use client'

import React from 'react'
import { useState } from 'react'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const { isLoaded, signIn } = useSignIn()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        if (!isLoaded) {
            return;
        }

        try {
            await signIn.create({
                
            })
        
        } catch (error) {

        }
    };

  return (
     <div className="w-full flex justify-center mx-8 my-6">
            <div className='border p-5 rounded' style={{ width: '500px' }}>
                <h1 className="text-2xl mb-4">Login</h1>
              
                <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
                        <div>
                            <label
                                htmlFor='email'
                                className='block mb-2 text-sm font-medium text-gray-900'
                            >
                                Email Address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                                placeholder='name@company.com'
                                required={true}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='password'
                                className='block mb-2 text-sm font-medium text-gray-900'
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                                required={true}
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                        >
                            Login
                        </button>
                    </form>
            </div>
        </div>
  )
}

export default LoginPage
