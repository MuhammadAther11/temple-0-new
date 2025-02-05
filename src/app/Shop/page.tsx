
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { FaSliders } from "react-icons/fa6";
// import TopPick from "../components/Toppick";
import Main from "../components/Main";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['500', '400', '300', '200', '600'],
  subsets: ['latin'],
});

const products = [
  { id: 1, name: "Grain Coffee Table", price: "Rs. 15,000.00", image: "/Grain coffee table 1.png" },
  { id: 2, name: "Kent Coffee Table", price: "Rs. 225,000.00", image: "/Kent coffee table 1.png" },
  { id: 3, name: "Round coffee table_color ", price: "Rs. 251,000.00", image: "/Round coffee table_color 2 1.png" },
  { id: 4, name: "Reclamimed teak coffee  table", price: "Rs. 25,200.00", image: "/Reclaimed teak coffee table 1.png" },
  { id: 5, name: "Plane console_", price: "Rs. 275,000.00", image: "/Mask group.png" },
  { id: 6, name: "Reclaimed teak Sideboard", price: "Rs. 10,000.00", image: "/Reclaimed teak Sideboard 1.png" },
  { id: 7, name: "SJP_0825", price: "Rs. 5,000.00", image: "/Mask group (1).png" },
  { id: 8, name: "Bella chair and table", price: "Rs. 8,000.00", image: "/Mask group (2).png" },
  { id: 9, name: "Granite square side table", price: "Rs. 15,000.00", image: "/Mask group (3).png" },
  { id: 10, name: "Asgaard sofa", price: "Rs. 10,000.00", image: "/Asgaard sofa 1.png" },
  { id: 11, name: "Maya sofa three seater ", price: "Rs. 15,000.00", image: "/Mask group (4).png" },
  { id: 12, name: "Outdoor sofa set", price: "Rs. 225,000.00", image: "/Mask group (5).png" },
];

export default function Shop() {
  return (
    <div className={poppins.className}>
      <Header />
      <div className="relative">
        <div className="w-full h-auto">
          <Image
            src={"/Rectangle 1.png"}
            alt="Banner"
            layout="responsive"
            width={1020}
            height={316}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="relative">
            <Image
              src={"/bhai.png"}
              alt="Logo"
              width={70}
              height={70}
              className="mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-medium mt-2">Shop</h1>
            <div className="flex justify-center items-center mt-2">
              <Link href="/" className="font-medium text-sm md:text-base">
                Home
              </Link>
              <IoIosArrowForward size={16} className="mx-1" />
              <Link href="/Shop" className="font-light text-sm md:text-base">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF4F4] py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4">
              <FaSliders size={18} />
              <p className="text-sm md:text-base">Filter</p>
              <HiViewGrid size={20} />
              <TbLayoutDistributeHorizontal size={20} />
            </div>
            <div className="text-sm md:text-base">
              Showing 1-16 of 32 results
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <p>Show</p>
                <div className="w-10 h-10 bg-white flex items-center justify-center">
                  16
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p>Sort by</p>
                <div className="w-24 h-10 bg-white flex items-center justify-center">
                  Default
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <TopPick /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
      <Image
        src={product.image}
        alt={product.name}
        width={180}
        height={180}
        className="w-full h-auto"
      />
      <div className="mt-4">
        <p className="text-sm">{product.name}</p>
        <p className="font-semibold mt-2">{product.price}</p>
      </div>
    </div>
  ))}
</div>

      <div className="flex justify-center gap-4 my-8">
        {[1, 2, 3, "Next"].map((item, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-[#FFF9E5] flex items-center justify-center rounded-md cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      <Main />
    </div>
  );
}