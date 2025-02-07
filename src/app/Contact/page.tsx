import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { Poppins } from 'next/font/google'
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
// import Form from 'next/form'
import Main from "../components/Main";

const poppins = Poppins({
    weight: ['500','400', '300','200','600'],
    
    subsets: ['latin'],
  })
export default function Contact(){
 return(
    <div className={poppins.className}>
      <Header />
      <div>
      <Image src={"/Rectangle 1.png"} alt="" height={316} width={1020}/>
      <div className="relative bottom-44 left-[450px]">
      <Image src={"/bhai.png"} alt="" height={70} width={70}/>
      <h1 className="text-[42px] font-medium -ml-10 mt-[-20px]">Contact</h1>
      <div>
        <ul className="flex gap-2  ml-[-18px] mt-[-5px] text-[14px]">
        <li className="font-medium"><Link href="/">Home</Link></li>
        <IoIosArrowForward size={16} className="mt-1"/>
        <li className="font-light"><Link href="/Contact">Contact</Link></li>
        </ul>
      </div>
      </div>
      </div>

      <div>

        <h1 className="font-semibold text-center text-[35px] -mt-12 mb-2">Get In Touch With Us</h1>
        <p  className="font-normal text-[#9F9F9F] mx-[200px] text-center ">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

        <div className="flex mt-20 gap-36">
        <div className="ml-8 mt-4">
          <div>
            <span className="flex gap-6 ml-10 font-medium text-[20px]">
          <MdLocationOn size={20}/><h1 className="mt-[-4px]"> Address </h1></span>
          <p className="ml-[85px] mb-8 font-normal text-[14px] mt-1">236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
          </div>

          <div>
            <span className="flex gap-5 ml-10 font-medium text-[20px]">
          <FaPhoneAlt size={18}/><h1 className="mt-[-7px] ml-1"> Phone </h1></span>
          <p className="ml-[85px] mb-8 font-normal text-[14px] mt-1">Mobile: +(84) 546-6789 <br />
          Hotline: +(84) 456-6789</p>
          </div>

          <div>
            <span className="flex gap-5 ml-10 font-medium text-[20px]">
          <MdAccessTimeFilled size={20}/><h1 className="mt-[-4px]  ml-1">Working Time </h1></span>
          <p className="ml-[85px] font-normal text-[14px] mt-1">Monday-Friday: 9:00 - <br /> 22:00 <br />
          Saturday-Sunday: 9:00 - <br /> 21:00</p>
          </div>
        </div>

        <div>
          <div className="w-[531px] h-[650px]">
        <form className="space-y-4">
              <div className="w-[530px] h-[110px]">
              <label htmlFor="name" className=" text-sm font-medium text-black relative bottom-[10px] ">Your Name</label>
              <input
                 id="name"
                 type="text"
                 placeholder="Abc"
                 className="mt-1 block w-[500px] h-[60px] border rounded-md px-3 py-2 text-gray-900"
                />
              </div>

              <div className="w-[530px] h-[110px]">
                <label htmlFor="email" className="block text-sm font-medium text-black relative bottom-[10px]">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="abc@email.com"
                  className="mt-1 block w-[500px] h-[60px] border rounded-md px-3 py-2 text-gray-800"
                />
              </div>

              <div className="w-[528px] h-[110px]">
                <label htmlFor="subject" className="block text-sm font-medium text-black relative bottom-[10px]">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Optional"
                  className="mt-1 block w-[500px] h-[60px] border rounded-md px-3 py-2 text-gray-800"
                />
              </div>

              <div className="w-[528px] h-[150px]">
                <label htmlFor="message" className="block text-sm font-medium text-black relative bottom-[10px]">Message</label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about!"
                  rows={4}
                  className="mt-1 block w-[500px] h-[100px] border rounded-md px-3 py-2 text-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-[237px] h-[48px] border-black border  text-black font-normal rounded-xl hover:bg-gray-300 "
              >
                Submit
              </button>
            </form>


        </div>
        </div>

        </div>
      </div>

      <Main/>

      </div>

 )
}