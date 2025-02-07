'use client'

import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { Poppins } from 'next/font/google'
import Main from "../components/Main";


const poppins = Poppins({
    weight: ['500','400', '300','200','600'],
    
    subsets: ['latin'],
  })
export default function Account(){
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')


    return(
      
            <div className={poppins.className}>
            <Header/>
            <div>
      <Image src={"/Rectangle 1.png"} alt="" height={316} width={1020}/>
      <div className="relative bottom-44 left-[450px]">
      <Image src={"/bhai.png"} alt="" height={70} width={70}/>
      <h1 className="text-[42px] font-medium -ml-[90px] mt-[-20px]">My Account</h1>
      <div>
        <ul className="flex gap-2  ml-[-30px] mt-[-5px] text-[14px]">
        <li className="font-medium"><Link href="/">Home</Link></li>
        <IoIosArrowForward size={16} className="mt-1"/>
        <li className="font-light"><Link href="/Account">My account</Link></li>
        </ul>
      </div>
      </div>
      </div>
     

      <div className="flex mb-20">
        

        <div className="pl-28 -mt-20">
          <h1 className="w-[100px] h-[65px] font-semibold text-2xl">Log In</h1>
          <form className="">
              <div className="w-[424px] h-[110px]">
       <label htmlFor="name or email" className=" text-sm font-medium text-black w-[224px] h-[24px] relative bottom-[10px]">Username or email address</label>
              <input
                 id="name or email"
                 type="text"
                 required
                //  placeholder="Abc"
                 className="mt-1 block w-[300px] h-[50px] border rounded-md px-3 py-2 text-gray-900"
                />
              </div>
              <div className="w-[424px] h-[110px]">
              <label htmlFor="password" className=" text-sm font-medium text-black relative bottom-[10px]">Password</label>
              <input
                 id="password"
                 type="text"
                 required
                //  placeholder="Abc"
                 className="mt-1 block w-[300px] h-[50px] border rounded-md px-3 py-2 text-gray-900"
                />
              </div>
              <div>
                <input type="checkbox" name="Remember me" id="Remember me" required
                className="w-[25px] h-[20px]"/>
                <label htmlFor="Remember me" className="w-[120px] h-[20px] ml-5 text-[14px] ">Remember me</label>
              </div>
              <div className="mt-7">
             <button className="w-[160px] h-[50px] border-black border rounded-lg">Log in</button>
             <button className="w-[150px] h-[24px] text-[14px] ml-3">Lost Your Password?</button>
              </div>
          </form>
        </div>

        <div className=" -mt-20">
          <h1 className="w-[100px] h-[65px] font-semibold text-2xl">Register</h1>
          <form className="">
              <div className="w-[424px] h-[100px]">
              <label htmlFor="name or email" className=" text-sm font-medium text-black relative bottom-[10px] ">Email address</label>
              <input
                 id="name or email"
                 type="text"
                 required
                //  placeholder="Abc"
                 className="mt-1 block w-[300px] h-[50px] border rounded-md px-3 py-2 text-gray-900"
                />
              </div>
              <div className="">
              <p className="w-[360px] h-[48px] text-[12px]">A link to set a new password will be sent to your email address.</p>
              <p className="w-[350px] h-[117.3px] text-[12px]">Your personal data aused to support your experience throughout this website, to manage and access and to your account, and for other purposes described in our <b>privacy policy.</b> </p>
              </div>
              <div className="mt-[7px]">
             <button className="w-[160px] h-[50px] border-black border rounded-lg">Register</button>
             
              </div>
          </form>
        </div>
      

      </div>
      <Main/>
      </div>
     
       
    )
}