'use client'

import Header from "../components/Header";
import Image from "next/image";
import { Poppins } from 'next/font/google'
import { useEffect, useState } from "react";
import { Product } from "../../../type/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const poppins = Poppins({
    weight: ['500','400', '300','200','600'],
    
    subsets: ['latin'],
  })

export default function Cart() {
const [cartItems , setCartItems] = useState<Product[]>([])

useEffect(()=>{
    setCartItems(getCartItems())
} ,[])

 const handleRemove = (id : string) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, remove it!'
  }).then((result) => {
    if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          'Removed!',
          'Item has been removed.',
          'success'
        );
    } else {
        Swal.fire(
          'Cancelled',
          'Item has not been removed.',
          'error'
        );
    }
  })
 }

 const handleQuantityChange = (id: string , quantity : number) => {
       updateCartQuantity(id, quantity)
       setCartItems(getCartItems())
 }

  const handleincrement = (id: string) => {
    const product = cartItems.find(item => item._id === id);
    if(product)
      handleQuantityChange(id, product.stockLevel + 1)
  }

  const handleindecrement = (id: string) => {
    const product = cartItems.find(item => item._id === id);
    if(product && product.stockLevel > 1)
      handleQuantityChange(id, product.stockLevel - 1)
  }

 const calculateTotal = () => {
   return cartItems.reduce((total , item) => total + item.price * item.stockLevel , 0)
 }

 const router = useRouter()
 const handleProceed = () => {
  Swal.fire({
    title:"Proceed to checkout",
    text: "You are about to proceed to checkout", 
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Proceed',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
  }).then((result) => {
      if(result.isConfirmed){
        Swal.fire(
          'Proceeded!',
          'Your order has been successfully processed',
          'success'
        )

        router.push("/checkout")

        setCartItems([])
      }
  });
}

  return (
    <div className={poppins.className}>
    <Header/>
    <div>
<Image src={"/Rectangle 1.png"} alt="" height={316} width={1020}/>
<div className="relative bottom-44 left-[450px]">
<Image src={"/bhai.png"} alt="" height={70} width={70}/>
<h1 className="text-[42px] font-medium -ml-[16px] mt-[-20px]">Cart</h1>
<div>
<ul className="flex gap-2  ml-[-20px] mt-[-5px] text-[14px]">
<li className="font-medium"><Link href="/">Home</Link></li>
<IoIosArrowForward size={16} className="mt-1"/>
<li className="font-light"><Link href="/Cart">Cart</Link></li>
</ul>
</div>
</div>
</div>
  <div className="p-6 -mt-20 bg-gray-100 min-h-screen">
   
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleindecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.stockLevel}</span>
                    <button
                      onClick={() => handleincrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
    </div>
  );
}
