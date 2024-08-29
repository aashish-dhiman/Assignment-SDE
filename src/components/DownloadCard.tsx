import React from "react";
import ios from "@/assets/ios.png";
import android from "@/assets/android.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

interface Props {}

const DownloadCard = (props: Props) => {
  return (
    <div className="mx-4 mb-3 mt-10 space-y-3 rounded-xl border border-gray-200 bg-gray-100 p-4">
      <div className="flex items-center gap-4 text-sm font-medium">
        <h3>DOWNLOAD APP</h3>
        <span className="text-xs text-primary">1 Crore+ Downloads.</span>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <Image src={ios} width={30} height={30} alt="ios" />
          <div className="flex items-center">
            <span className="mr-0.5 text-xs">4.7</span>
            <FaStar className="size-3 text-yellow-500" />
            <FaStar className="size-3 text-yellow-500" />
            <FaStar className="size-3 text-yellow-500" />
            <FaStar className="size-3 text-yellow-500" />
            <FaRegStarHalfStroke className="size-3 text-yellow-500" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={android} width={30} height={30} alt="ios" />
          <div className="flex items-center">
            <span className="mr-0.5 text-xs">4.6</span>
            <FaStar className="size-3 text-yellow-500" />
            <FaStar className="size-3 text-yellow-500" />
            <FaStar className="size-3 text-yellow-500" />
            <FaStar className="size-3 text-yellow-500" />
            <FaRegStarHalfStroke className="size-3 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
