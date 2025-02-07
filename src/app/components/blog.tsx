import Image from "next/image";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

export default function Blog() {
  return (
    <div className="min-h-[580px] py-12 px-4 sm:px-8 lg:px-16">
      {/* Blog Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">
          <Link href="/About">Our Blogs</Link>
        </h1>
        <p className="text-sm text-[#9F9F9F] font-light">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image src="/Rectangle 13.png" alt="Blog Image" width={230} height={200} className="w-full" />
          <div className="p-4">
            <p className="text-sm text-center mb-4">Going all-in with millennial design</p>
            <div className="flex justify-center mb-4">
              <Link href="/About" className="border-b border-black pb-1 text-sm font-semibold">
                Read More
              </Link>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <MdOutlineWatchLater size={18} className="mr-2" />
              <span>5 min</span>
              <CiCalendar size={18} className="mx-2" />
              <span>12th Oct 2022</span>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image src="/Rectangle 14.png" alt="Blog Image" width={230} height={200} className="w-full" />
          <div className="p-4">
            <p className="text-sm text-center mb-4">Going all-in with millennial design</p>
            <div className="flex justify-center mb-4">
              <Link href="/About" className="border-b border-black pb-1 text-sm font-semibold">
                Read More
              </Link>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <MdOutlineWatchLater size={18} className="mr-2" />
              <span>5 min</span>
              <CiCalendar size={18} className="mx-2" />
              <span>12th Oct 2022</span>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image src="/Rectangle 15.png" alt="Blog Image" width={230} height={200} className="w-full" />
          <div className="p-4">
            <p className="text-sm text-center mb-4">Going all-in with millennial design</p>
            <div className="flex justify-center mb-4">
              <Link href="/About" className="border-b border-black pb-1 text-sm font-semibold">
                Read More
              </Link>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <MdOutlineWatchLater size={18} className="mr-2" />
              <span>5 min</span>
              <CiCalendar size={18} className="mx-2" />
              <span>12th Oct 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link href="/About" className="border-b border-black pb-1 text-sm font-semibold">
          View All Posts
        </Link>
      </div>
    </div>
  );
}