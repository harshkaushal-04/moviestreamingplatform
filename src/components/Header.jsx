import React, { useState, useEffect } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "MY LIST",
      icon: HiPlus,
    },
    {
      name: "TOP RATED",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-[#141414] to-transparent'}`}>
      <div className="flex items-center justify-between p-5 px-8 md:px-16">
        <div className="flex gap-8 items-center">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
          <div className="hidden md:flex gap-8">
            {menu.map((item, index) => (
              <HeaderList key={index} name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex md:hidden gap-5">
            {menu.map(
              (item, index) =>
                index < 3 && <HeaderList key={index} name={""} Icon={item.icon} />
            )}
            <div className="md:hidden relative" onClick={() => setToggle(!toggle)}>
              <HeaderList name={""} Icon={HiDotsVertical} />
              {toggle && (
                <div className="absolute right-0 mt-3 bg-[#141414] border-[1px] border-gray-700 p-3 px-5 py-4 rounded-md">
                  {menu.map(
                    (item, index) =>
                      index > 2 && (
                        <HeaderList key={index} name={item.name} Icon={item.icon} />
                      )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="w-[40px] rounded-md cursor-pointer"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Header;