import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['500', '400', '300', '200', '600'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <div className={poppins.className}>
      {/* Footer Container */}
      <div className="bg-white py-10 text-[14px]">
        <div className="container mx-auto px-4">
          {/* Grid Layout for Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Address Section */}
            <div className="mb-8 sm:mb-0 mt-14">
              <p className="text-[#9F9F9F] text-sm w-full sm:w-[285px]">
                400 University Drive Suite 200 Coral 
                Gables, <br />
                FL 33134 USA
              </p>
            </div>

            {/* Links Section */}
            <div className="ml-0 sm:ml-16">
              <h3 className="text-[#9F9F9F] text-sm mb-4">Links</h3>
              <ul className="space-y-7">
                <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                <li><Link href="/Shop" className="hover:text-gray-600">Shop</Link></li>
                <li><Link href="/About" className="hover:text-gray-600">About</Link></li>
                <li><Link href="/Contact" className="hover:text-gray-600">Contact</Link></li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="ml-0 sm:-ml-10">
              <h3 className="text-[#9F9F9F] text-sm mb-4">Help</h3>
              <ul className="space-y-7">
                <li><a href="#" className="hover:text-gray-600">Payment Options</a></li>
                <li><a href="#" className="hover:text-gray-600">Return</a></li>
                <li><a href="#" className="hover:text-gray-600">Privacy Policies</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="ml-0 sm:-ml-20">
              <h3 className="text-[#9F9F9F] text-sm mb-4">Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  id="Email"
                  placeholder="Enter Your Email Address"
                  className="w-full sm:w-48 border-b-[1.8px] border-black focus:outline-none text-sm"
                />
                <button className="text-sm border-b-[1.8px] border-black hover:text-gray-600">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-300" />

          {/* Copyright Section */}
          <div className="text-left text-sm">
            <p>2022 Meubel House. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
