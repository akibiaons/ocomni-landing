"use client";
import RegisterUi from "@/components/ui/register-ui";

export default function Register() {
  return (
    <>
      {/* Disclaimer Will need to change UI to support the template selected from the previous page.*/}
      <section className="mt-8">
        <div className="pl-8 pr-2 lg:text-center">
          <div className="text-slate-200 text-4xl font-semibold mb-4">
            <h1>Register for an account</h1>
          </div>
          <div className="text-slate-400">
            <p className="lg:text-lg">
              We'll email you your template and give instructions on how to
              login!
            </p>
          </div>
        </div>
      </section>
      <RegisterUi></RegisterUi>
    </>
  );
}

// React Imports
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// // Firebase imports
// // import {
// //   getAuth,
// //   createUserWithEmailAndPassword,
// //   updateProfile,
// // } from "firebase/auth";
// import { doc, serverTimestamp, setDoc } from "firebase/firestore";
// import { db } from "@/firebaseConfig";
// // React Icons Imports
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

// import { toast } from "react-toastify";

// Below I am defining the type for the pages state...
// interface FormData {
//   email: string;
//   password?: string;
//   name: string;
//   timestamp?: any;
// }

// const router = useRouter();
// // Below I added <boolean> for typescript saftey
// const [showPassword, setShowPassword] = useState<boolean>(false);

// // this was changed to <FormData> which is part of the interface declaration...
// const [formData, setFormData] = useState<FormData>({
//   email: "",
//   password: "",
//   name: "",
// });

// const { email, password, name } = formData;
// // Added ChangeEvent, and <HTMLInputElement> for more??? I gotta get more review here in the onChange function
// function onChange(e: React.ChangeEvent<HTMLInputElement>) {
//   setFormData((prevState) => ({
//     ...prevState,
//     [e.target.id]: e.target.value,
//   }));
// }
// async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//   e.preventDefault();

//   try {
//     const auth = getAuth();
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password!
//     );

//     const user = userCredential.user;
//     if (user) {
//       await updateProfile(user, {
//         displayName: name,
//       });
//     }
//     const formDataCopy = { ...formData };
//     delete formDataCopy.password;
//     formDataCopy.timestamp = serverTimestamp();

//     await setDoc(doc(db, "users", user.uid), formDataCopy);
//     router.push("https://www.ocomni.com/account");
//   } catch (error) {
//     console.log(error);
//   }
// }
