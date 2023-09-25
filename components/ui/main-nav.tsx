"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <>
      <div className="hidden lg:block">
        <div
          className={`mt-1 w-[75%] lg:h-auto sm:w-[40%] lg:w-[80%] rounded-full mx-auto backdrop-blur bg-[#f8f9fa]/50 sticky top-1 z-50 `}
        >
          <header className="flex lg:flex-row lg:h-10 h-16 justify-center lg:justify-between items-center mx-w-6xl mx-auto  px-10 py-10 z-50">
            <div className="mt-8 lg:mt-0">
              <h1
                className={`uppercase text-[#5B45BB] cursor-pointer text-2xl sm:mt-1 lg:mr-6 font-OCOMNI font-bold`}
              >
                Ocomni
              </h1>
            </div>
            <div className="pt-2 lg:pt-0">
              <ul className="flex pace-x-8 rounded-2xl p-1 lg:p-4 text-white bg-[#5B45BB] hover:cursor-pointer hover:bg-[#5F56D6] whitespace-nowrap text-md lg:text-md">
                <Link href="/register">Get Started</Link>
              </ul>
            </div>
          </header>
        </div>
      </div>
      {/*============================================================================================================================================================================================== */}
      {/* Mobile version below w/no blur bkg */}
      <div className="lg:hidden block">
        <div
          className={`mt-1 w-[75%] lg:h-auto sm:w-[40%] lg:w-[70%] rounded-full mx-auto backdrop-blur bg-[#f8f9fa]/50 sticky top-1 z-50 `}
        >
          <header className="flex lg:flex-row lg:h-10 h-16 justify-center lg:justify-between items-center mx-w-6xl mx-auto px-10 z-50">
            <div className="pr-8 lg:mt-0">
              <h1
                className={`uppercase text-[#5B45BB] cursor-pointer text-xl sm:mt-1 lg:mr-6 font-OCOMNI font-bold`}
              >
                Ocomni
              </h1>
            </div>
            <div className="pl-8 lg:pt-0">
              <ul className="flex pace-x-8 rounded-md p-1 lg:p-4 text-white bg-[#5B45BB] hover:cursor-pointer hover:bg-[#5F56D6] whitespace-nowrap text-xs lg:text-md">
                Get Started
              </ul>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};
