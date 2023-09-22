// import Template from "../components/Templates"; // This import is for the templates card
import Link from "next/navigation"; // I should import some Next/Navigation

// Card imports below...
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Accodian imports below...
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icon Imports below...
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineUnlock } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <div className="hidden lg:block w-[100%]">
        <div className="grid grid-cols-8 items-start">
          <div className="col-start-1 col-end-5 self-center pl-8 pr-2">
            <div className="grid grid-rows-2 items-bottom">
              <h1 className="text-4xl lg:text-5xl text-left font-extrabold text-slate-200">
                Ecommerce powered by
                <span className="text-[#5B45BB] font-OCOMNI"> OCOMNI</span>
              </h1>
              <p className="mt-8 text-xl text-slate-400 leading-normal text-left">
                Build the perfect E-Commerce shop, improve business and grow.
              </p>
            </div>
            <div className="">
              <p className="text-xl leading-normal text-left text-slate-400">
                Pick a Template for a store layout, with order management, sales
                history, analytics, and more
              </p>
            </div>
          </div>
          {/* Below is the second part of the hero section (desktop) */}
          <div className="col-start-5 col-end-10 self-start">
            <img src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695320204/hero-section-img_coe9oz.png"></img>
          </div>
        </div>
      </div>
      {/*START OF THE BENEFITS CARD*/}
      <div className="hidden lg:block">
        <div className="lg:grid lg:max-w-[100%] lg:grid-cols-9 lg:gap-20 lg:pt-40 lg:pb-20 md:p-8 pt-10">
          <div className="lg:col-start-1 lg:col-end-4 md:pb-10 md:text-left text-left shadow-xl">
            <Card className="rounded-xl">
              <CardHeader className="border-2 m-10 bg-neutral-800">
                <CiMoneyBill className="lg:text-2xl lg:mr-3" />
                <CardTitle>Reduced Startup Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="md:text-xl text-slate-400">
                  Get your products to market quicker, and spend more time
                  focusing on product research, selection, and marketing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          {/*Cards section*/}
          <div className="lg:col-start-4 lg:col-end-7 md:pb-10 md:text-left text-left shadow-xl">
            <Card className="rounded-xl">
              <CardHeader className="border-2 m-10 bg-neutral-800">
                <AiOutlineUnlock className="lg:text-3xl lg:mr-3" />
                <CardTitle>All in one package</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="md:text-xl text-slate-400">
                  Included is order management, payment systems, and store
                  front. The ultimate all in one package for ecommerce
                  entrepenuers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-start-7 lg:col-end-10 md:pb-10 md:text-left text-left shadow-xl">
            <Card className="rounded-xl">
              <CardHeader className="border-2 m-10 bg-neutral-800">
                <TbWorldWww className="lg:text-3xl lg:mr-3" />
                <CardTitle>Code free, no tech</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="md:text-xl text-slate-400">
                  Ocomni, templates are great for low cost and ease of access.
                  No coding, or design knowledge is required, setup all in one
                  day!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* END OF THE CARDS*/}
      {/* Start of the template selectors */}
      <div className="hidden lg:block">
        <div className="pl-8">
          <h3 className="mb-4 text-4xl font-semibold">Pick a template</h3>
          <p className="text-2xl text-slate-400">
            Deploy a website and test products for as low as $12/mo
          </p>
        </div>
        <div className="flex flex-col justify-center align-center gap-6 px-4 rounded-xl py-10 pl-36">
          <div className="mb-10">
            <img
              className="rounded-xl hover:cursor-pointer hover:translate-y-[-2rem] ease-in duration-300"
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695352183/template-3_bavpfk.png"
              alt="template-1"
            />
          </div>
          <div className="mb-10">
            <img
              className="rounded-xl hover:cursor-pointer hover:translate-y-[-2rem] ease-in duration-300"
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695352148/template-1_ydoqzm.png"
              alt="template-2"
            />
          </div>
          <div className="mb-10">
            <img
              className="rounded-xl hover:cursor-pointer hover:translate-y-[-2rem] ease-in duration-300"
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695352148/template-2_dzd9gg.png"
              alt="template-3"
            />
          </div>
        </div>
      </div>
      {/*=======================================================================================================================================================================================================================================*/}
      {/* Mobile is below */}
      <div className="block lg:hidden">
        <div className="mx-6">
          <div className="py-16 md:py-32 mx-auto flex flex-col items-center">
            <h1 className="text-3xl text-center font-extrabold text-slate-200">
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
      {/*START OF THE BENEFITS CARD (MOBILE)*/}
      {/* This needs to be made into an accordian at some point - 1:53pm 9/21/23 */}
      <div className="block lg:hidden">
        <div className="lg:grid lg:max-w-[100%] lg:grid-cols-9 lg:gap-20 lg:pt-40 lg:pb-20 md:p-8 pt-10 ">
          <div className="lg:col-start-1 lg:col-end-4 md:pb-10 md:text-left text-left shadow-xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  What are the costs ?
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="rounded-xl">
                    <CardHeader className="border-2 m-10 bg-neutral-800">
                      <CiMoneyBill className="lg:text-2xl lg:mr-3 text-4xl" />
                      <CardTitle>Reduced Startup Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="md:text-xl text-slate-400">
                        Get your products to market quicker, and spend more time
                        focusing on product research, selection, and marketing.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/*Cards section*/}
          <div className="lg:col-start-4 lg:col-end-7 md:pb-10 md:text-left text-left shadow-xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  What's Included ?
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="rounded-xl">
                    <CardHeader className="border-2 m-10 bg-neutral-800">
                      <AiOutlineUnlock className="lg:text-2xl lg:mr-3 text-4xl" />
                      <CardTitle>All in one package</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="md:text-xl text-slate-400">
                        Our store templates come with a order management system,
                        payment system, and store front. The ultimate all in one
                        package for ecommerce entrepenuers.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="lg:col-start-7 lg:col-end-10 md:pb-10 md:text-left text-left shadow-xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  What's Included ?
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="rounded-xl">
                    <CardHeader className="border-2 m-10 bg-neutral-800">
                      <TbWorldWww className="lg:text-2xl lg:mr-3 text-4xl" />
                      <CardTitle>Code free, no tech</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="md:text-xl text-slate-400">
                        Ocomni, templates are great for low cost and ease of
                        access. No coding, or design knowledge is required,
                        setup all in one day!
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {/* END OF THE CARDS*/}
      {/* Start of the semplate selector cards */}
      <div className="block lg:hidden">
        <div className="flex flex-col gap-6 px-4 rounded-xl py-8">
          <div className="">
            <h3 className="mb-4 text-2xl font-semibold">Pick a template</h3>
            <p className="text-md text-slate-400">
              Deploy a website and test products for as low as $12/mo
            </p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695352183/template-3_bavpfk.png"
              alt="template-1"
            />
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695352148/template-1_ydoqzm.png"
              alt="template-2"
            />
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1695352148/template-2_dzd9gg.png"
              alt="template-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
