import React from "react";
import Image from "next/image";
import { TbDashboard } from "react-icons/tb";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { BiSolidReport } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <div className="w-[120px]  bg-[#15326f] flex flex-col h-[100vh] justify-between font-Poppins">
        <div className="flex flex-col justify-center items-center space-y-2 pt-4 h-[15vh]  m-3  ">
          <div className="flex flex-col justify-center items-center border-b border-white border-opacity-40 p-1 space-y-4">
          <Image
            src="/assets/logo.png"
            width={25}
            height={10}
            alt="Picture of the author"
          />
          <Image
            src="/assets/logotext.png"
            width={70}
            height={70}
            alt="Picture of the author"
            className=""
          />
          </div>
        <div>  <h1 className="text-[10px] text-white opacity-60">CLIENT PORTAL</h1></div>
        </div>
       <div className="h-[60vh] flex flex-col justify-center items-center">
      <div className=" w-[100%] pt-4 pb-4 mt-4  hover:text-white hover:opacity-100 text-white opacity-60 hover:bg-[#041b4d]">
       <Link  href="#" className="flex flex-col justify-center space-y-1 items-center ">
        <TbDashboard className="h-6 w-6 "/>
          <span className="text-xs  tracking-wide  ">Dashboard</span>
        </Link>
        </div>
        <div className=" w-[100%] pt-4 pb-4  hover:text-white hover:opacity-100 text-white opacity-60 hover:bg-[#041b4d]">
       <Link  href="#" className="flex flex-col justify-center space-y-1  items-center ">
        <HiOutlineHome className="h-6 w-6 "/>
          <span className="text-xs   tracking-wide  ">Properties</span>
        </Link>
        </div>
        <div className=" w-[100%] pt-4 pb-4  hover:text-white hover:opacity-100 text-white opacity-60 hover:bg-[#041b4d]">
       <Link  href="#" className="flex flex-col justify-center space-y-1 items-center ">
        <BiSolidReport className="h-6 w-6 "/>
          <span className="text-xs   tracking-wide  ">Reports</span>
        </Link>
        </div>
        <div className=" w-[100%] pt-4 pb-4  hover:text-white hover:opacity-100 text-white opacity-60 hover:bg-[#041b4d]">
       <Link  href="#" className="flex flex-col justify-center space-y-1 items-center ">
        <MdOutlineNotifications className="h-6 w-6 "/>
          <span className="text-xs   tracking-wide  ">Notification</span>
        </Link>
        </div>
      
        <div className=" w-[100%] pt-4   hover:text-white hover:opacity-100 text-white opacity-60 hover:bg-[#041b4d]">
       <Link  href="#" className="flex flex-col justify-center space-y-1 items-center ">
        <FiSettings className="h-6 w-6 "/>
          <span className=" text-xs   tracking-wide  ">Settings</span>
        </Link>
        </div>
       </div>
       <div className="h-[25vh] flex justify-center items-end pb-5 ">
       <div className=" w-[100%] pt-4   hover:text-white hover:opacity-100 text-white opacity-60 hover:bg-[#041b4d]">
       <Link  href="#" className="flex flex-col justify-center space-y-1 items-center ">
        <RiCustomerService2Line className="h-6 w-6 "/>
          <span className=" text-xs   tracking-wide  ">Service Request</span>
        </Link>
        </div>
       </div>
      </div>
    </>
  );
};

export default Sidebar;
