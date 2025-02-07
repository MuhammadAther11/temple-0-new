'use client'

import { useEffect, useState } from "react"
import { Product } from "../../../type/products"
import { client } from "@/sanity/lib/client"
import { allProducts  , four } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { addToCart } from "../action/action"
import swal from 'sweetalert2'

export default function Shoes(){
    
const [product , setProduct] = useState<Product[]>([])

useEffect(() => {

    async function fetchProducts() {
        const fetchProducts : Product[] = await client.fetch(allProducts)
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
return(
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
)
}