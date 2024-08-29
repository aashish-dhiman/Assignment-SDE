"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiSearch, BiX } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

interface Props {}

const Navbar = (props: Props) => {
  // State to manage opening of sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // handler to manage opening/closing of sidebar
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="relative h-full">
      {/* Navbar */}
      <div className="fixed left-0 top-0 z-20 flex w-full items-center justify-between border border-b-[1px] bg-white p-4 sm:relative">
        <a href="https://www.indmoney.com/" target="_blank">
          <Image src={logo} width={50} height={50} alt="logo" />
        </a>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-primary px-3 py-1 text-sm text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white">
            <a href="https://www.indmoney.com/login">Log In</a>
          </button>

          <a href="https://www.indmoney.com/customer-service">
            <TfiHeadphoneAlt className="size-5 text-gray-500 transition-all duration-200 ease-in-out hover:text-gray-900" />
          </a>
          <span>
            <BiSearch className="size-5 text-gray-500" />
          </span>
          <span>
            {isSidebarOpen ? (
              <MdClose
                className="size-6 cursor-pointer text-gray-500"
                onClick={handleSidebar}
              />
            ) : (
              <HiMenuAlt3
                className="size-6 cursor-pointer text-gray-700"
                onClick={handleSidebar}
              />
            )}
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />
    </main>
  );
};

export default Navbar;
