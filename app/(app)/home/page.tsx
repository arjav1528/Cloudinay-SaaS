import { SignOutButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <h1>Welcome to the Home Page</h1>
    <p>This is where you can find the latest updates and features.</p>
    <SignOutButton />
    </>
  )
}

export default HomePage