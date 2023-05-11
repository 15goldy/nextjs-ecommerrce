import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineShoppingCart ,AiFillCloseCircle ,AiFillPlusCircle ,AiFillMinusCircle} from "react-icons/ai";
import{MdAccountCircle}from "react-icons/md"
import{BsFillBagCheckFill}from "react-icons/bs"

const Navbar = ({cart,addToCart,removeFromCart,subTotal,clearCart}) => {
         console.log(addToCart,removeFromCart,clearCart,subTotal,cart)

  const ref=useRef()

  const toggleCart=()=>{
   if (ref.current.classList.contains('translate-x-full')){
    ref.current.classList.remove('translate-x-full')
    ref.current.classList.add('translate-x-0')
   }
   else if (!ref.current.classList.contains('translate-x-full')){
    ref.current.classList.remove('translate-x-0')
    ref.current.classList.add('translate-x-full')
   }
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-start md:items-start justify-center items-center py-2 bg-blue-100   text-pink-500  shadow-md sticky top-0 bg-white z-10 ">
      <div className="logo mx-5">
        <Link href={"/"}>
          {" "}
          <a>
            {" "}
            <Image
              src="/ecommerce.jpg"
              alt="logo for website"
              width={50}
              height={-20}
            />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            {" "}
            <a>
              {" "}
              <li>Tshits</li>
            </a>{" "}
          </Link>
          <Link href={"/hoodies"}>
            {" "}
            <a>
              {" "}
              <li>Hoddies</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            {" "}
            <a>
              {" "}
              <li>Mugs</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            {" "}
            <a>
              {" "}
              <li>Stickers</li>
            </a>{" "}
          </Link>
        </ul>
      </div>

      <div  className=" cursor-pointer cart absolute right-0 mx-5 top-4 flex">
     <Link href={'/login'}> <MdAccountCircle className="text:xl md:text-2xl mx-2"/></Link>
        <AiOutlineShoppingCart className=" text:xl md:text-2xl"  onClick={toggleCart} />
      </div>

     <div ref={ref} className={` w-72 h-[100vh]  h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-10 py-10 transform transition-transform ${Object.keys(cart).length!==0? 'translate-x-0' :
     'translate-x-full'} ` }>
     <h2 className="font-bold text-xl text-center text-black">Shopping cart</h2>
     <span onClick={toggleCart} className="absolute top-4 right-2 cursor-pointer text-2xl"> <AiFillCloseCircle/></span>
     <ol className="text-center list-decimal font-semibold text-black">

     
     {Object.keys(cart).length==0 && 
     <div className="my-4 font-normal">Your Cart is empty</div>}

     {Object.keys(cart).map((k)=>{ return( <li key={k}>
        <div className="item flex my-3">
       <div className="w-2/3 font-semibold text-black"> {cart[k].name}</div>
       <div className="w-1/3 flex items-center justify-center  font-semibold text-lg"> <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].name,cart[k].price,cart[k].variant)}} className="cursor-pointer text-pink-500"/> <span className="mx-2 text-black text-sm">{cart[k].qty}</span><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].name,cart[k].price,cart[k].variant)}} className="cursor-pointer text-pink-400" /></div>
        </div>
      </li> 
      )})}

     </ol>

     <div className="toal font-bold my-6 block">SubTotal:
₹ {subTotal}</div>

     <div className="flex">
   <Link href={'/checkout'}> <button className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"> <BsFillBagCheckFill className="m-1"/> Checkout</button></Link>

     <button onClick={()=>{clearCart}} className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded text-sm">  Clear Cart</button>
     </div>
   
     </div>


    </div>
  );
};

export default Navbar;
