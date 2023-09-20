"use client";
import { useState, useEffect } from "react";
import Link from "next/navigation";

export const Header: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(
    window.pageYOffset
  );
  // Assuming you might have a state for 'setVisible', you didn't provide this in your JS code
  const [visible, setVisible] = useState<boolean>(true);

  //   const auth = getAuth(); // I assume you might be using this, as `auth` was mentioned in your useEffect dependency list

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible =
      prevScrollPos > currentScrollPos || currentScrollPos === 0;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  };

  return (
    <div
      className={`w-[75%] sm:w-[40%] lg:w-[70%] rounded-full mx-auto backdrop-blur bg-[#f8f9fa]/50 sticky top-1 z-50 `}
    >
      <header className="flex flex-col lg:flex-row lg:h-10 h-16 justify-center lg:justify-between items-center mxa-w-6xl mx-auto  px-10 py-10 z-50">
        <div>
          <h1
            className={`uppercase text-[#5B45BB] cursor-pointer text-2xl sm:mt-1 lg:mr-6 font-OCOMNI`}
          >
            Ocomni
          </h1>
        </div>
        <div className="">
          <ul className="flex space-x-8"></ul>
        </div>
      </header>
    </div>
  );
};
