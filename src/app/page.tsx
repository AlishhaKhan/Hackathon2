import Image from "next/image";
import Chair from "@/app/assets/chair.png";
import { TbBus } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiPlant } from "react-icons/pi";
import image1 from "@/app/assets/image1.png";
import image2 from "@/app/assets/image2.png";
import image3 from "@/app/assets/image3.png";
import image4 from "@/app/assets/image4.png";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center items-center w-[1343px] h-[704px] border-2 border-teal-800">
        {/* 1st main box */}
        <div className="flex flex-col w-[1280px] h-[584px] bg-[#2A254B]">
          <Image
            src={Chair}
            alt="chair"
            width={520}
            height={584}
            className="absolute left-[790px]"
          />
          <div className="flex flex-col w-[513px] h-[187px] absolute top-[250px] left-[80px] gap-[41px] font-normal text-[32px] leading-[44.8px] text-white">
            The furniture brand for the future, with timeless designs
            <button className="flex w-[170px] h-[56px] py-4 px-8 bg-[#F9F9F926] text-nowrap">
              <span className="font-[400px] text-base leading-[24px] text-white">
                view collection
              </span>
            </button>
          </div>
          <p className="w-[602px] h-[81px] absolute top-[623px] left-[90px] font-normal text-lg text-white">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center w-[1343px] h-[355px] text-[#2A254B] border-2 border-teal-800">
        {/* 2nd main box */}
        <div className="w-[366px] h-[34px] font-normal text-2xl leading-[33.6px]">
          What makes our brand different
        </div>
        <div className="flex  justify-around gap-6">
          <div>
            <div className="flex flex-col justify-between w-[270px] h-[124px] gap-3">
              <span className="w-6 h-6">
                <TbBus size={24} />
              </span>
              <div>
                <span className="flex font-normal text-xl gap-2">
                  Next day as standard
                </span>
                <span className="font-normal text-base">
                  Order before 3pm and get your order the next day as standard
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around space-x-3">
            <div className="flex flex-col justify-between w-[270px] h-[124px] gap-3">
              <span className="w-6 h-6">
                <CiCircleCheck size={24} />
              </span>
              <div>
                <span className="flex font-normal text-xl gap-2">
                  Made by true artisans
                </span>
                <span className="font-normal text-base">
                  Handmade crafted goods made with real passion and craftmanship
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around space-x-3">
            <div className="flex flex-col justify-between w-[270px] h-[124px] gap-3">
              <span className="w-6 h-6">
                <CiMoneyCheck1 size={24} />
              </span>
              <div>
                <span className="flex font-normal text-xl gap-2">
                  Unbeatable prices
                </span>
                <span className="font-normal text-base">
                  For our materials and quality you won’t find better prices
                  anywhere
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around space-x-3">
            <div className="flex flex-col justify-between w-[270px] h-[124px] gap-3">
              <span className="w-6 h-6">
                <PiPlant size={24} />
              </span>
              <div>
                <span className="flex font-normal text-xl gap-2">
                  Recycled packaging
                </span>
                <span className="font-normal text-base">
                  We use 100% recycled packaging to ensure our footprint is
                  manageable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[1343px] h-[761px] relative border-2 border-teal-800">
        {/* 3rd main box */}
        <div className="flex w-[217px] h-[39px] absolute top-[80px] left-[40px] font-normal text-[32px] leading-[39px] text-[#2A254B]">
          {/* heading */}
          New ceramics
        </div>
        <div className="flex">
          {/* images */}
          <div className="w-[305px] h-[462px] absolute top-[152px] left-[40px]">
            <Image src={image1} alt="chair" width={305} height={375} />
            <div className="flex flex-col justify-between items-start w-[154px] h-[63px] mt-5 font-normal text-lg leading-[27px] text-[#2A254B]">
              <span>The Dandy chair</span>
              <span>£250</span>
            </div>
          </div>
          <div className="w-[305px] h-[462px] absolute top-[152px] left-[365px]">
            <Image src={image2} alt="chair" width={305} height={375} />
            <div className="flex flex-col justify-between items-start w-[154px] h-[63px] mt-5 font-normal text-lg leading-[27px] text-[#2A254B]">
              <span>Rustic Vase Set</span>
              <span>£155</span>
            </div>
          </div>
          <div className="w-[305px] h-[462px] absolute top-[152px] left-[690px]">
            <Image src={image3} alt="chair" width={305} height={375} />
            <div className="flex flex-col justify-between items-start w-[154px] h-[63px] mt-5 font-normal text-lg leading-[27px] text-[#2A254B]">
              <span>The Silky Vase</span>
              <span>£125</span>
            </div>
          </div>
          <div className="w-[305px] h-[462px] absolute top-[152px] left-[1015px]">
            <Image src={image4} alt="chair" width={305} height={375} />
            <div className="flex flex-col justify-between items-start w-[154px] h-[63px] mt-5 font-normal text-lg leading-[27px] text-[#2A254B]">
              <span>The Lucy Lamp</span>
              <span>£399</span>
            </div>
          </div>
        </div>
        <div>{/* button */}</div>
      </div>
      <div className="w-[1343px] h-[744px] border-2 border-teal-800">
        {/* 4th main box */}
      </div>
      <div className="w-[1343px] h-[481px] border-2 border-teal-800">
        {/* 5th main box */}
      </div>
      <div className="w-[1343px] h-[603px] border-2 border-teal-800">
        {/* 6th main box */}
      </div>
    </div>
  );
}
