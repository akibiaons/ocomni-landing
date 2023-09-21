// import Template from "../components/Templates"; // This import is for the templates card
import Link from "next/navigation"; // I should import some Next/Navigation

export default function Home() {
  return (
    <>
      <div className="hidden lg:block w-[100%]">
        <div className="flex flex-col">
          <div className="flex flex-col py-20 mx-auto items-center">
            <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-slate-200">
              Ecommerce powered by
              <span className="text-[#5B45BB] font-OCOMNI"> OCOMNI</span>
            </h1>
            <p className="mt-2 text-xl text-slate-400 leading-normal text-center">
              Build the perfect E-Commerce shop, improve business and grow.
            </p>
          </div>
          <div className="flex flex-col mx-auto items-center">
            {/* Below is the second part of the hero section (desktop) */}
            <div className="flex w-fit justify-center">
              <div className="self-center pr-10">
                <p className="mb-10 text-xl leading-normal text-left text-slate-400">
                  Pick a Template for a store layout, with order management,
                  sales history, analytics, and more
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695241291/ocomni-lp-fin_cj7y95.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile is below */}
      <div className="block lg:hidden">
        <div className="mx-6">
          <div className="py-16 md:py-32 mx-auto flex flex-col items-center">
            <h1 className="text-4xl text-center font-extrabold text-slate-200">
              Ecommerce powered by
              <span className="text-[#5B45BB] font-OCOMNI"> OCOMNI</span>
            </h1>
            <p className="mt-2 text-xl text-slate-400 leading-normal text-center">
              Build the perfect E-Commerce shop, improve business and grow.
            </p>
            {/* Below is the second part of the hero section (mobile) */}
            <div className="w-full max-w-xl mt-2">
              <div className="flex flex-col justify-center pt-10 mt-12">
                <img src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695241291/ocomni-lp-fin_cj7y95.svg"></img>
                <div>
                  <p className="mb-10 text-xl leading-normal text-center text-slate-400">
                    Pick a Template for a store layout, with order management,
                    sales history, analytics, and more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
