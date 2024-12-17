import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';


const Nav = () =>{
    return(
        <div className="flex justify-around items-center h-[132px]">
          {/* upper line */}
          <div>
            <div className="w-4 h-4 absolute top-[26px] left-[28px]">
                {/* search icon */}
                <IoIosSearch color="black" />
            </div>
            <div>
                {/* heading */}
                <h1 className="absolute top-[20px] left-[687px] font-normal text-2xl leading-[29.5px] text-[#22202E]">Avion</h1>
            </div>
            <div className="flex w-4 h-4 absolute top-[26px] left-[1300px] gap-2">
                {/* icon buttons */}
                <span>
                   <IoCartOutline color="black"/> 
                </span>
                <span>
                    <CgProfile color="black"/>
                </span>
            </div>
          </div>
          {/* horizontal line */}
          <div className="w-[1286px] h-0 absolute top-[70px] left-[28px] border border-myblack/10"/>
          {/* menu items */}
          <div className="flex  w-[675px] h-[22px] absolute top-[90px] left-[382px]">
            <ul className="flex font-normal text-base text-purple gap-[44px] ">
                <Link href=""><li>Plant pots</li></Link>
                <Link href=""><li>Ceramics</li></Link>
                <Link href=""><li>Tables</li></Link>
                <Link href=""><li>Chairs</li></Link>
                <Link href=""><li>Crockery</li></Link>
                <Link href=""><li>Tableware</li></Link>
                <Link href=""><li>Cutlery</li></Link>
            </ul>
          </div>
        </div>
    );
}
export default Nav;