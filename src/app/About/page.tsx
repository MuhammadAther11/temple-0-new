import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Poppins } from 'next/font/google'
import { FaCalendar } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import Main from "../components/Main";


const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 }
]
const poppins = Poppins({
    weight: ['500','400', '300','200','600'],
    
    subsets: ['latin'],
  })
export default function About(){
 return(
    <div className={poppins.className}>
      <Header />
      <div>
      <Image src={"/Rectangle 1.png"} alt="" height={316} width={1020}/>
      <div className="relative bottom-44 left-[450px]">
      <Image src={"/bhai.png"} alt="" height={70} width={70}/>
      <h1 className="text-[42px] font-medium -ml-3 mt-[-20px]">Blog</h1>
      <div>
        <ul className="flex gap-2  ml-[-18px] mt-[-5px] text-[14px]">
        <li className="font-medium"><Link href="/">Home</Link></li>
        <IoIosArrowForward size={16} className="mt-1"/>
        <li className="font-light"><Link href="/About">Blog</Link></li>
        </ul>
      </div>
      </div>
      </div>

      <div className="flex">
        <div>

        <div className="w-[720px] h-[794px] -mt-20 p-10">
            <Image src={"/Rectangle 68.png"} alt="" height={300} width={617} />
            <div className="w-[350px] h-[24px] flex text-[#9F9F9F] gap-7 mt-3">
                <span className="flex gap-2">
                <FaUser size={20} color="#9F9F9F"/>
                Admin
                </span>
                <span className="flex gap-2">
                <FaCalendar size={20} color="#9F9F9F"/>
                14 Oct 2022
                </span>
                <span className="flex gap-2">
                <FaTag size={20} color="#9F9F9F"/>
                Wood
                </span>
            </div>
            <h1 className="w-[517px] h-[45px] text-[25px] font-medium my-3">Going all-in with millennial design</h1>
            <p className="w-[640px] h-[110px] text-[13px] text-[#9F9F9F] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere licitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi  imperdiet. Libero is faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean.
            </p>
            <div className="h-[34px] mt-4 w-[86px] border-b-[1.8px] border-black ">
          <a href="#"> Read More</a>
          </div>
        </div>
            

        <div className="w-[720px] h-[794px] -mt-20 p-10">
            <Image src={"/Rectangle 68 (1).png"} alt="" height={300} width={617} />
            <div className="w-[350px] h-[24px] flex text-[#9F9F9F] gap-7 mt-3">
                <span className="flex gap-2">
                <FaUser size={20} color="#9F9F9F"/>
                Admin
                </span>
                <span className="flex gap-2">
                <FaCalendar size={20} color="#9F9F9F"/>
                14 Oct 2022
                </span>
                <span className="flex gap-2">
                <FaTag size={20} color="#9F9F9F"/>
                Wood
                </span>
            </div>
            <h1 className="w-[517px] h-[45px] text-[25px] font-medium my-3">Exploring new ways of decorating</h1>
            <p className="w-[640px] h-[110px] text-[13px] text-[#9F9F9F] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere licitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi  imperdiet. Libero is faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean.
            </p>
            <div className="h-[34px] mt-4 w-[86px] border-b-[1.8px] border-black ">
          <a href="#"> Read More</a>
          </div>
        </div>

        <div className="w-[720px] h-[794px] -mt-20 p-10">
            <Image src={"/Rectangle 68 (2).png"} alt="" height={300} width={617} />
            <div className="w-[350px] h-[24px] flex text-[#9F9F9F] gap-7 mt-3">
                <span className="flex gap-2">
                <FaUser size={20} color="#9F9F9F"/>
                Admin
                </span>
                <span className="flex gap-2">
                <FaCalendar size={20} color="#9F9F9F"/>
                14 Oct 2022
                </span>
                <span className="flex gap-2">
                <FaTag size={20} color="#9F9F9F"/>
                Wood
                </span>
            </div>
            <h1 className="w-[617px] h-[45px] text-[25px] font-medium my-3">Handmade pieces that took time to make</h1>
            <p className="w-[640px] h-[110px] text-[13px] text-[#9F9F9F] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere licitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi  imperdiet. Libero is faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean.
            </p>
            <div className="h-[34px] mt-4 w-[86px] border-b-[1.8px] border-black ">
          <a href="#"> Read More</a>
          </div>
        </div>

        </div>

        <div>
        <div className=" space-y-2">
            <div className="-mt-10">
              <input
                type="search"
                // placeholder="Search posts..."
                className=" h-[50px] w-[270px] border-2 rounded-lg text-[#9F9F9F]"
                />
              <a href="#"><CgSearch size={25} className="relative bottom-9 left-56" /></a>
            </div>
              <h2 className=" ml-4 text-[24px] font-medium ">Categories</h2>
              <div className="space-y-2 text-[#9F9F9F] font-normal ">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href='https://wordpress.com/discover?selectedTab=firstposts'
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted" target="_blank"
                  >
                    <span className="text-muted-foreground">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>

          <div>
            <h1 className="text-[24px] font-medium mt-[75px]">Recent Posts</h1>
            <div className="w-[230px] h-[80px] flex text-[14px] mt-9">
           <Image src={"/Rectangle 69.png"} alt="" height={80} width={80}/>
           <span className="w-[119px] h-[60px]  ml-3 mt-2">Going all-in with millennial design
           <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p></span>
            </div>

            <div className="w-[230px] h-[80px] flex text-[14px] mt-9">
           <Image src={"/Rectangle 69 (1).png"} alt="" height={80} width={80}/>
           <span className="w-[119px] h-[60px]  ml-3 mt-2">Going all-in with millennial design
           <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p></span>
            </div>
            <div className="w-[230px] h-[80px] flex text-[14px] mt-9">
           <Image src={"/Rectangle 69 (2).png"} alt="" height={80} width={80}/>
           <span className="w-[119px] h-[60px]  ml-3 mt-2">Going all-in with millennial design
           <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p></span>
            </div>
            <div className="w-[230px] h-[80px] flex text-[14px] mt-9">
           <Image src={"/Rectangle 69 (3).png"} alt="" height={80} width={80}/>
           <span className="w-[119px] h-[60px]  ml-3 mt-2">Going all-in with millennial design
           <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p></span>
            </div>
            <div className="w-[230px] h-[80px] flex text-[14px] mt-9">
           <Image src={"/Rectangle 69 (4).png"} alt="" height={80} width={80}/>
           <span className="w-[119px] h-[60px]  ml-3 mt-2">Going all-in with millennial design
           <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p></span>
            </div>
          </div>
        </div>
        </div>

       





      </div>

      <div className="w-[392px] h-[60px] flex gap-7 text-center ml-[360px] -mt-16 -mb-[15px] ">
        <div className="w-[45px] h-[45px] bg-[#FBEBB5] text-black rounded-md pt-2">
            1
            </div>  
            <div className="w-[45px] h-[45px] bg-[#FFF9E5] text-black rounded-md  pt-2">
            2
            </div>  
            <div className="w-[45px] h-[45px] bg-[#FFF9E5] text-black  pt-2 rounded-md">
            3
            </div>  
            <div className="w-[75px] h-[45px] bg-[#FFF9E5] text-black  pt-2 rounded-md">
            Next
            </div>  
    </div>
    <Main/>


      </div>
 )
}
