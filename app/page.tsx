// import Template from "../components/Templates"; // This import is for the templates card
import Link from "next/navigation"; // I should import some Next/Navigation

export default function Home() {
  return (
    <>
      <div className="mx-6 ">
        <div className="py-16 md:py-32 lg:py-48 lg:h-screen mx-auto flex flex-col items-center">
          <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-900">
            Ecommerce powered by{" "}
            <span className="text-[#5B45BB] font-OCOMNI">OCOMNI</span>
          </h1>
          <p className="mt-2 text-xl text-neutral-500 leading-normal text-center">
            Build the perfect E-Commerce shop, improve business and grow.
          </p>

          <div className="w-full max-w-xl mt-2">
            <form
              className="flex  mx-auto flex-col sm:flex-row gap-3 sm:gap-2 "
              //onSubmit={onSubmitDEV}
            >
              <div className="w-full">
                <input
                  type="email"
                  // value={emailDEV}
                  // onChange={onChangeDEV}
                  id="emailDEV"
                  placeholder="Enter your email here..."
                  className="transition duration-150 ease-in-out  py-3 rounded-md bg-gray-200 border-gray-200 border-[1px] focus:bg-gray-300  focus:border-blue-800 focus:ring-transparent w-full"
                />
              </div>
              <button
                className="active:bg-[#5B45BB] hover:bg-[#5F56D6] bg-[#6366F1] text-white text-center rounded-md px-4 py-3 transition ease-in-out duration-150 whitespace-nowrap sm:w-[180px] text-md font-semibold"
                type="submit"
              >
                Talk to a Developer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
