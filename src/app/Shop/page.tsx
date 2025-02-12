'use client'

import Main from "../components/Main";
import Header from "../components/Header";
import { useEffect, useState } from "react"
import { Product } from "../../../type/products"
import { client } from "@/sanity/lib/client"
import { twenty} from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { addToCart } from "../action/action"
import swal from 'sweetalert2'
import { Poppins } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { FaSliders } from "react-icons/fa6";

const poppins = Poppins({
  weight: ['500', '400', '300', '200', '600'],
  subsets: ['latin'],
});


export default function Shop() {
  const [product , setProduct] = useState<Product[]>([])
  
  useEffect(() => {
  
      async function fetchProducts() {
          const fetchProducts : Product[] = await client.fetch(twenty)
          setProduct(fetchProducts)
      }
      fetchProducts()
  }, [])
  
  
  const handleAddToCart = (e : React.MouseEvent , product : Product)=>{
      e.preventDefault()
      swal.fire({
        position : 'top-right',
        icon : 'success',
        title : `${product.name} added to cart`,
        showConfirmButton : false,
        timer : 1000
      })
      addToCart(product)
      
  }
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
      className="object-cover"
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
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mt-2">Shop</h1>
      <div className="flex justify-center items-center mt-2">
        <Link href="/" className="font-medium text-xs sm:text-sm md:text-base">
          Home
        </Link>
        <IoIosArrowForward size={16} className="mx-1" />
        <Link href="/Shop" className="font-light text-xs sm:text-sm md:text-base">
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
        <p className="text-xs sm:text-sm md:text-base">Filter</p>
        <HiViewGrid size={20} />
        <TbLayoutDistributeHorizontal size={20} />
      </div>
      <div className="text-xs sm:text-sm md:text-base">
        Showing 1-16 of 32 results
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm md:text-base">Show</p>
          <div className="w-10 h-10 bg-white flex items-center justify-center">
            16
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm md:text-base">Sort by</p>
          <div className="w-24 h-10 bg-white flex items-center justify-center">
            Default
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="max-w-6xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {product.map((product) =>(
    <div key={product._id}
    className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
      <Link href={`/product/${product.slug.current}`}>
        {product.image &&(
            <Image
             src={urlFor(product.image).url()} 
            alt="image" 
            width={200} height={200} 
            className="w-full h-48 object-cover rounded-md"/>
        )}
      <h1 className="font-semibold text-lg mt-4">  {product.name}</h1>
         <h1 className="text-gray-500 mt-2"> {product.price}  </h1>  
         <button className="bg-gradient-to-r from-blue-500 to bg-purple-500 text-white font-semibold
         py-2 px-4 rounded-lg  hover:scale-110 transition-transform duration-300
         ease-in-out "
         onClick={(e)=>handleAddToCart(e, product)}
         >
          Add To Cart
          </button>   
          </Link>
        </div>
  )
  )}
  </div>
    </div>
      <Main />
    </div>
  );
}
