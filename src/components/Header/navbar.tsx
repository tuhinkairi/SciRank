"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import menuData from './menuData'
import ButtonsRounded from '../Others/ButtonsRounded'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  return (
    <header className='grid grid-cols-3 items-center justify-between max-w-8xl mx-auto py-4'>
      <Image className='h
      -auto' src="/Images/Company/icon.png" alt="Logo" width={254} height={120} />
      <nav className='flex items-center justify-center gap-10'>
        {menuData.map((item) => (
          <Link className='text-lg hover:text-secondary font-medium capitalize' key={item.id} href={item.path} target={item.newTab ? "_blank" : "_self"}>
            {item.title}
          </Link>
        ))}
      </nav>
      {/* btns */}
      <div className='justify-self-end flex items-center gap-4'>
        <ButtonsRounded invert={true} onClick={()=>router.push("/signup")} >Sign Up</ButtonsRounded>
        <ButtonsRounded onClick={()=>router.push("/signin")} >Login</ButtonsRounded>
      </div>

    </header>
  )
} 
