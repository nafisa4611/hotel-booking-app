'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  async function onSubmit(event) {

    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const fname = formData.get('fname');
      const lname = formData.get('lname');
      const email = formData.get('email');
      const password = formData.get('password');

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  }


  return (
    <>
      <div className="text-xl text-red-500 text-center">{error && error}</div>
      <form className="flex flex-col my-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" className="border border-black/20 rounded-md px-4 py-2" />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" className="border border-black/20 rounded-md px-4 py-2" />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" className="border border-black/20 rounded-md px-4 py-2" />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="border border-black/20 rounded-md px-4 py-2" />
        </div>

        <button type="submit" className="bg-primary px-8 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all w-full mt-4" style={{ backgroundColor: "#FF6A28" }}>
          Create account
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
