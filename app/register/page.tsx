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

import RegisterUi from "@/components/ui/register-ui";

// import { toast } from "react-toastify";

// Below I am defining the type for the pages state...
interface FormData {
  email: string;
  password?: string;
  name: string;
  timestamp?: any;
}

export default function Register() {
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
  return (
    <>
      <div>
        <RegisterUi></RegisterUi>
      </div>
    </>
  );
}
