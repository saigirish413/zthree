// import React from "react";
// import MainPage from "../components/MainPage";

// export default function Login() {
//   return (
//     <div className="bg-white min-h-screen">
//       <MainPage />
//     </div>
//   );
// }
import React from "react";
//import Sidebar from '../components/Sidebar';
import Image from "next/image";
import { HiEye } from "react-icons/hi";
import Link from "next/link";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="w-[100vw] flex font-Poppins ">
        <div className="w-[60vw] "></div>
        <div className="w-[40vw] h-screen flex flex-col bg-white items-center pt-10 space-y-6">
          <div className=" flex flex-col bg-white justify-center items-center space-y-3">
            <Image
              src="/assets/zthree.png"
              width={150}
              height={30}
              alt="Picture of the author"
            />
            <h1 className="text-[#647581] tracking-widest text-sm ">
              Backoffice Portal
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-center text-[#1A1A1A] font-medium ">Login</h1>
            <div className="space-y-1 flex flex-col">
              <lable className="text-sm">Email </lable>
              <input
                type="email"
                className="outline-none border rounded-md p-2 pl-2"
              />
            </div>
            <div className="space-y-1 flex flex-col">
              <lable className="text-sm">Password</lable>
              <div className="flex border rounded-md items-center">
                <input
                  type="password"
                  className="outline-none rounded-md p-2 pl-2"
                />
                <HiEye className="pr-2 h-6 w-6" />
              </div>
            </div>

            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-9 h-4 bg-gray-200 pee text-centerr-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-xs font-medium text-[#1A1A1A] dark:text-gray-300">
                Remember me
              </span>
            </label>

            <div className="flex flex-col space-y-2 text-[#1B95E0] text-xs">
              <Link href="" className="underline">
                Forgot Password?
              </Link>
              <Link href="" className="underline">
                Forgot Email Address?
              </Link>
            </div>

            <div className="border p-1 rounded-md bg-[#1B95E0] text-white text-center">
              <button type="submit" className="">
                Login
              </button>
            </div>
          </div>
          <div className="flex text-center items-center space-x-2 text-xs pt-28">
            <FaLock />
            <h1>Privacy & Security</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
