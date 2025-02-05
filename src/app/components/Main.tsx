import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['500','300'],
    
    subsets: ['latin'],
  })



export default function Main() {
    return(
       <div className="h-auto bg-[#FAF4F4] flex flex-row justify-center p-10 gap-10 mb-20">
         <div className="w-80 text-center">
         <div className={poppins.className}>
       <h1 className="text-black font-medium text-xl"> Free Delivery</h1>
        <p className="text-[#9F9F9F] font-normal text-sm">For all orders over $50, consectetur adipiscing elit.</p>
         </div>
         </div>

         <div className="w-80 text-center">
         <div className={poppins.className}>
       <h1 className="text-black font-medium text-xl"> 90 Days Return</h1>
        <p className="text-[#9F9F9F] font-normal text-sm">If goods have problems, consectetur adipiscing elit.</p>
         </div>
         </div>

         <div className="w-80 text-center">
         <div className={poppins.className}>
       <h1 className="text-black font-medium text-xl"> Secure Payment</h1>
        <p className="text-[#9F9F9F] font-normal text-sm">100% secure payment, consectetur adipiscing elit.</p>
         </div>
         </div>
         </div>
    )
}
