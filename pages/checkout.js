import Link from "next/link";
import React from "react";
import { AiFillPlusCircle ,AiFillMinusCircle} from "react-icons/ai";
import{BsFillBagCheckFill}from "react-icons/bs"
import{SiAmazonpay}from "react-icons/si"


const checkout = ({cart,subTotal,addToCart,removeFromCart}) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">CheckOut</h1>
      <h2 className="font-semibold text-xl"> Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htlmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2 ">
          <div className="mb-4">
            <label htlmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>
        <div className="px-2 w-full ">
          <div className="mb-4">
            <label htlmlFor="address" className="leading-7 text-sm text-gray-600">
             Address
            </label>
          <textarea
              id=""
              name=""
              col="30"
              row="2"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </textarea>
            

          </div>
        </div>
        <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htlmlFor="phone" className="leading-7 text-sm text-gray-600">
         Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2 ">
          <div className="mb-4">
            <label htlmlFor="city" className="leading-7 text-sm text-gray-600">
             City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>
        <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2 ">
          <div className=" mb-4">
            <label htlmlFor="state" className="leading-7 text-sm text-gray-600">
         State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2 ">
          <div className="mb-4">
            <label htlmlFor="pincode" className="leading-7 text-sm text-gray-600">
             Pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>
         <h2 className="font-semibold text-xl ">2. Review your cart and Pay for your Love </h2>




         <div className=" sideCart  bg-pink-100 p-6 m-2  ">
     
  
     <ol className="text-center list-decimal font-semibold text-black">

     
     {Object.keys(cart).length==0 && 
     <div className="my-4 font-normal">Your Cart is empty</div>}

     {Object.keys(cart).map((k)=>{ return( <li key={k}>
        <div className="item flex my-3">
       <div className=" font-semibold text-black"> {cart[k].name}</div>
       <div className="mx-8  flex items-center justify-center  font-semibold text-lg"> <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].name,cart[k].price,cart[k].variant)}} className="cursor-pointer text-pink-500"/> <span className="mx-2 text-black text-sm">{cart[k].qty}</span><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].name,cart[k].price,cart[k].variant)}} className="cursor-pointer text-pink-400" /></div>
        </div>
      </li> 
      )})}
     </ol>
     <span className="toal font-bold">SubTotal:
₹ {subTotal}</span>
   </div>
   <div className="mx-8">
<Link href={'/checkout'}> <button className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"> <SiAmazonpay className="m-1"/>
₹ Pay Now</button></Link>
</div>

    </div>
  );
};

export default checkout;

