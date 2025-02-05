import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
// import TopPick from "./components/Toppick";
// import Blog from "./components/Blog";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["500", "400", "300", "200", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <div className="bg-[#FBEBB5]">
        <Header />
        <HeroSection />

        {/* Featured Section */}
        <div className="bg-[#FAF4F4] py-10 px-5 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <Image src="/Granite square side table 1.png" alt="Side Table" width={300} height={300} className="mx-auto md:mx-0" />
            <h1 className="text-2xl font-medium mt-4">Side Table</h1>
            <div className="mt-2 border-b-2 border-black w-24 mx-auto md:mx-0">
              <Link href="/Shop">View More</Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <Image src="/Cloud sofa three seater + ottoman_3 1.png" alt="Cloud Sofa" width={300} height={300} className="mx-auto md:mx-0" />
            <h1 className="text-2xl font-medium mt-4">Cloud Sofa</h1>
            <div className="mt-2 border-b-2 border-black w-24 mx-auto md:mx-0">
              <Link href="/Shop">View More</Link>
            </div>
          </div>
        </div>

        {/* Top Picks Section */}
        <h1 className="text-2xl font-semibold text-center mt-12 mb-4">Top Picks For You</h1>
        <p className="text-center text-sm text-[#9F9F9F]">Find a bright ideal to suit your taste with our great selection.</p>
        {/* <TopPick /> */}

        <div className="text-center mt-6">
          <Link href="/Shop">
            <p className="inline-block border-b-2 border-black">View More</p>
          </Link>
        </div>

        {/* New Arrivals Section */}
        <div className="bg-[#FFF9E5] py-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <Image src="/Asgaard sofa 1.png" alt="Asgaard Sofa" width={350} height={350} className="md:w-1/2" />
          <div className="md:ml-10">
            <p className="text-gray-500 text-sm uppercase">New Arrivals</p>
            <h1 className="font-bold text-3xl md:text-4xl">Asgaard Sofa</h1>
            <button className="mt-4 px-6 py-2 border border-black">Order Now</button>
          </div>
        </div>

        {/* <Blog /> */}

        {/* Instagram Section */}
        <div className="relative text-center py-10">
          <Image src="/Rectangle 17.png" alt="Instagram Banner" width={1020} height={50} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold">Our Instagram</h1>
            <p className="text-sm md:text-base">Follow our store on Instagram</p>
            <button className="mt-2 px-6 py-2 bg-[#FAF4F4] shadow rounded-3xl">Follow Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
