"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function RootPage() {
  const [isHovering, setIsHovering] = useState({
    signIn: false,
    signUp: false
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Welcome to <span className="text-blue-600">CloudinarySaaS</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your complete solution for cloud-based image and video management
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <SignInButton
            fallbackRedirectUrl={"/home"}>
            <button 
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              onMouseEnter={() => setIsHovering({...isHovering, signIn: true})}
              onMouseLeave={() => setIsHovering({...isHovering, signIn: false})}
            >
              Sign In
              {isHovering.signIn && (
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              )}
            </button>
          </SignInButton>

          <SignUpButton
            fallbackRedirectUrl={"/home"}>
            <button
              className="flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-medium rounded-lg px-8 py-3 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              onMouseEnter={() => setIsHovering({...isHovering, signUp: true})}
              onMouseLeave={() => setIsHovering({...isHovering, signUp: false})}
            >
              Sign Up
              {isHovering.signUp && (
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              )}
            </button>
          </SignUpButton>
        </div>
      </div>

      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl p-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Image Management</h3>
            <p className="text-gray-600">Optimize, transform, and deliver images efficiently</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Video Processing</h3>
            <p className="text-gray-600">Stream and manipulate videos with ease</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Secure Storage</h3>
            <p className="text-gray-600">Your media assets are securely stored in the cloud</p>
          </div>
        </div>
      </div>
    </div>
  );
}