// import Template from "../components/Templates"; // This import is for the templates card
import Link from "next/navigation"; // I should import some Next/Navigation

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="mx-6 ">
          <div className="py-16 md:py-32 lg:py-48 lg:h-screen mx-auto flex flex-col items-center">
            <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-slate-200">
              Ecommerce powered by
              <span className="text-[#5B45BB] font-OCOMNI">OCOMNI</span>
            </h1>
            <p className="mt-2 text-xl text-slate-400 leading-normal text-center">
              Build the perfect E-Commerce shop, improve business and grow.
            </p>
            {/* Below is the second part of the hero section (desktop) */}
            <div className="w-full max-w-xl mt-2">
              <div className="flex justify-center pt-28 mt-12">
                <div className="self-center pr-10">
                  <p className="mb-10 text-xl leading-normal text-left text-slate-400">
                    Pick a Template for a store layout, with order management,
                    sales history, analytics, and more
                  </p>
                  <button
                    className="active:bg-[#5B45BB] hover:bg-[#5F56D6] bg-[#6366F1] text-white text-center rounded-md px-4 py-3 transition ease-in-out duration-150 sm:w-[180px] text-md font-semibold"
                    type="submit"
                  >
                    Register & Pick a Store Today
                  </button>
                </div>
                <img src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695241291/ocomni-lp-fin_cj7y95.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile is below */}
      <div className="block lg:hidden">
        <div className="mx-6">
          <div className="py-16 md:py-32 lg:py-48 lg:h-screen mx-auto flex flex-col items-center">
            <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-slate-200">
              Ecommerce powered by
              <span className="text-[#5B45BB] font-OCOMNI"> OCOMNI</span>
            </h1>
            <p className="mt-2 text-xl text-slate-400 leading-normal text-center">
              Build the perfect E-Commerce shop, improve business and grow.
            </p>
            {/* Below is the second part of the hero section (mobile) */}
            <div className="w-full max-w-xl mt-2">
              <div className="flex justify-center pt-28 mt-12">
                <div className="self-center pr-10">
                  <p className="mb-10 text-xl leading-normal text-left text-slate-400">
                    Pick a Template for a store layout, with order management,
                    sales history, analytics, and more
                  </p>
                  <button
                    className="active:bg-[#5B45BB] hover:bg-[#5F56D6] bg-[#6366F1] text-white text-center rounded-md px-4 py-3 transition ease-in-out duration-150 sm:w-[180px] text-md font-semibold"
                    type="submit"
                  >
                    Register & Pick a Store Today
                  </button>
                </div>
                <img src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695241291/ocomni-lp-fin_cj7y95.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
