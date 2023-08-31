import React from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { BsSliders, BsGrid } from "react-icons/bs";

export default function MainPage() {
  return (
    <>
      <div className=" flex flex-col w-[100%] p-5 font-Poppins">
        <div className="flex flex-row justify-between">
          <div className="flex ">
            <p className="text-[28px] font-semibold text-[#2E3646] font-Poppins">
              File Management
            </p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <span className=" text-[#121212] text-[12px] font-normal">
              Brain Ford
            </span>
            <div className="flex flex-row items-center">
              <p className="rounded-full h-8 w-8 ">
                <Image
                  src="/assets/person.png"
                  width={32}
                  height={30}
                  alt="profile picture"
                />
              </p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center font-Poppins w-[100vw]">
          <div className="flex flex-row w-[20vw]  space-x-2 items-center border-[#E2E3E5] border-r">
            <div className=" rounded-md flex items-center justify-center h-9 w-9 bg-[#F8F8F8]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_35_3410)">
                  <path
                    d="M22.6667 28C25.6122 28 28 25.6122 28 22.6667C28 19.7212 25.6122 17.3334 22.6667 17.3334C19.7212 17.3334 17.3334 19.7212 17.3334 22.6667C17.3334 25.6122 19.7212 28 22.6667 28Z"
                    fill="#38C353"
                    fill-opacity="0.2"
                    stroke="#38C353"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.6666 20.5V22.6667L23.5001 24"
                    stroke="#38C353"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 4V9.33333C16 9.68696 16.1405 10.0261 16.3905 10.2761C16.6406 10.5262 16.9797 10.6667 17.3333 10.6667H22.6667"
                    stroke="#38C353"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H16L22.6667 10.6667V13.3333"
                    fill="#38C353"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M15.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H16L22.6667 10.6667V13.3333"
                    stroke="#38C353"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_3410">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col ">
              <span className="text-[24px] text-[#000000] font-semibold">
                143
              </span>
              <span className="text-[12px] text-[#405564] font-normal">
                Awaiting Approval
              </span>
            </div>
          </div>
          <div className="flex flex-row w-[40vw]  space-x-2 items-center pl-5 ">
            <div className=" rounded-md flex items-center justify-center h-9 w-9 bg-[#F8F8F8]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_35_3429)">
                  <path
                    d="M16 12V14.6667M16 20V20.0133"
                    stroke="#FD6A21"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66664 25.3333H25.3333C25.7684 25.3303 26.1961 25.2208 26.5792 25.0145C26.9622 24.8082 27.289 24.5112 27.5309 24.1496C27.7729 23.788 27.9227 23.3727 27.9672 22.9399C28.0118 22.5071 27.9498 22.07 27.7866 21.6666L18.32 5.33331C18.0894 4.91651 17.7513 4.56909 17.341 4.32716C16.9306 4.08524 16.463 3.95764 15.9866 3.95764C15.5103 3.95764 15.0426 4.08524 14.6323 4.32716C14.222 4.56909 13.8839 4.91651 13.6533 5.33331L4.18664 21.6666C4.02656 22.0607 3.96308 22.4874 4.0015 22.9111C4.03992 23.3347 4.17913 23.743 4.4075 24.1019C4.63588 24.4607 4.94678 24.7598 5.31427 24.974C5.68176 25.1882 6.09516 25.3114 6.51997 25.3333"
                    fill="#FD6A21"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M6.66664 25.3333H25.3333C25.7684 25.3303 26.1961 25.2208 26.5792 25.0145C26.9622 24.8082 27.289 24.5112 27.5309 24.1496C27.7729 23.788 27.9227 23.3727 27.9672 22.9399C28.0118 22.5071 27.9498 22.07 27.7866 21.6666L18.32 5.33331C18.0894 4.91651 17.7513 4.56909 17.341 4.32716C16.9306 4.08524 16.463 3.95764 15.9866 3.95764C15.5103 3.95764 15.0426 4.08524 14.6323 4.32716C14.222 4.56909 13.8839 4.91651 13.6533 5.33331L4.18664 21.6666C4.02656 22.0607 3.96308 22.4874 4.0015 22.9111C4.03992 23.3347 4.17913 23.743 4.4075 24.1019C4.63588 24.4607 4.94678 24.7598 5.31427 24.974C5.68176 25.1882 6.09516 25.3114 6.51997 25.3333"
                    stroke="#FD6A21"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_3429">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col ">
              <span className="text-[16px]  text-[#000000] font-semibold">
                Alerts
              </span>
              <ul className="text-[12px]  text-[#405564] font-normal list-disc pl-5">
                <li>Ac System Error at 345 Main Street</li>
                <li>Camera Last Connection at 56 Boardwalk Ave</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex flex-col font-Poppins pt-5">
          <div className="p-1 border-b border-[#D1D9E2]">
            <span className="text-[14px] text-[#000000] font-semibold">
              Main Street 123
            </span>
          </div>
          <div className="p-1 border-b border-[#D1D9E2] flex flex-row justify-between items-center font-Poppins">
            <div className="flex flex-row space-x-3 justify-center items-center">
              <MdOutlineKeyboardArrowLeft className="h-3 w-3" />
              <MdOutlineKeyboardArrowRight className="h-3 w-3" />
              <span className="text-xs text-[#2A333E]">2 Records Selected</span>
            </div>
            <div className="flex flex-row w-[40%] justify-between">
              <div className="flex flex-row space-x-1 justify-center items-center">
                <HiOutlineMagnifyingGlass className="h-3 w-3" />
                <span className="text-xs text-[#2A333E]">Find Reports</span>
              </div>
              <div className="flex flex-row space-x-2 justify-center items-center font-Poppins">
                <div className="flex flex-row space-x-1 justify-center items-center">
                  <HiOutlineDotsHorizontal className="h-3 w-3" />
                  <span className="text-xs text-[#2A333E] font-Poppins">
                    Bulk Actions
                  </span>
                </div>
                <div className="flex flex-row space-x-1 justify-center items-center pr-4 border-spacing-4 border-r border-[#D1D9E2]">
                  <BsSliders className="h-3 w-3" />
                  <span className="text-xs text-[#2A333E] font-Poppins">
                    Filter
                  </span>
                </div>
                <div className="flex  justify-center items-center pr-2 border-r border-[#D1D9E2] ">
                  <BsGrid className="h-3 w-3 " />
                </div>
                <div className="flex  justify-center items-center  ">
                  <LuSettings className="h-3 w-3 " />
                </div>
              </div>
            </div>
          </div>
          <div>3</div>
        </div>
      </div>
    </>
  );
}
