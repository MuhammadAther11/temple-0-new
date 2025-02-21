import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { Poppins } from 'next/font/google';
import Main from "../components/Main";

const poppins = Poppins({
  weight: ['500', '400', '300', '200', '600'],
  subsets: ['latin'],
});

export default function Account() {
  return (
    <div className={poppins.className}>
      <Header />
      <div className="relative">
        {/* Responsive Image */}
        <div className="w-full h-auto">
          <Image
            src="/Rectangle 1.png"
            alt="Background"
            layout="responsive"
            width={1020}
            height={316}
          />
        </div>

        {/* Profile Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="w-16 h-16 mx-auto">
            <Image src="/bhai.png" alt="Profile" width={70} height={70} />
          </div>
          <h1 className="text-4xl md:text-4xl font-medium">My Account</h1>
          <div className="flex justify-center items-center mt-2">
            <ul className="flex gap-2 text-sm md:text-base">
              <li className="font-medium">
                <Link href="/">Home</Link>
              </li>
              <IoIosArrowForward size={16} className="mt-1" />
              <li className="font-light">
                <Link href="/Account">My Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Login and Register Section */}
      <div className="container mx-auto px-20 py-10 flex flex-col md:flex-row gap-8 ">
        {/* Login Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-6">Log In</h1>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Username or email address
              </label>
              <input
                id="email"
                type="text"
                required
                className="p-3 w-[300px] border-2 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className=" w-[300px] p-3 border-2 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="w-[160px] px-6 py-3 border border-black rounded-lg">
                Log in
              </button>
              <button className="-ml-80 sm:ml-0 text-sm text-blue-600">
                Lost Your Password?
              </button>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="w-full md:w-1/2 px-14">
          <h1 className="text-2xl font-semibold mb-6">Register</h1>
          <form>
            <div className="mb-6">
              <label htmlFor="register-email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                id="register-email"
                type="email"
                required
                 className="w-[300px] p-3 border-2 rounded-lg"
              />
            </div>
            <div className="mb-6 w-[340px] h-[122px]">
              <p className="text-xs text-gray-600 mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-xs text-gray-600">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>Privacy Policy.</b> 
              </p>
            </div>
            <button className="w-[150px] px-6 py-3 border border-black rounded-lg">
              Register
            </button>
          </form>
        </div>
      </div>

      <Main />
    </div>
  );
}