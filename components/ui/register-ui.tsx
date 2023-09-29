// React Imports
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
//Firebase imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

// React Icons Imports
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

// Below I am defining the type for the pages state...
interface FormData {
  email: string;
  password?: string;
  name: string;
  timestamp?: any;
}

export default function RegisterUi() {
  const router = useRouter();
  // Below I added <boolean> for typescript saftey
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // this was changed to <FormData> which is part of the interface declaration...
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = formData;
  // Added ChangeEvent, and <HTMLInputElement> for more??? I gotta get more review here in the onChange function
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password!
      );

      const user = userCredential.user;
      if (user) {
        await updateProfile(user, {
          displayName: name,
        });
      }
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      router.push("https://www.ocomni.com/account");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="mx-auto my-14 max-w-6xl px-8 h-vh">
        <div className="my-8 max-w-[300px]  mx-auto">
          <div className="flex flex-row items-center ">
            <div className="border-b-2 border-purple-600 w-full">
              <h3 className="uppercase font-bold text-xs text-center mb-3 tracking-wider">
                register
              </h3>
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-3 mt-4">
                <input
                  type="email"
                  id="email"
                  onChange={onChange}
                  value={email}
                  className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                  placeholder=" Email"
                />
                <div className="bg-inherit relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={onChange}
                    className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                    placeholder=" Your password"
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="absolute right-3 top-3  text-2xl text-gray-700 cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="absolute right-3 top-3 text-2xl text-gray-700 cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </div>
                <input
                  type="text"
                  id="name"
                  onChange={onChange}
                  value={name}
                  className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                  placeholder=" Enter your name"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-8 text px-7 py-3 font-medium text-sm rounded-sm bg-[#6366F1] text-white hover:text-white overflow-hidden transition ease-in-out duration-150 hover:bg-[#5F56D6] active:bg-[#5B45BB] "
              >
                <Link href="/thankyou">Continue</Link>
                {" >"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
