"use client";

import { login } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      console.log(response);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/bookings");
      }

    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      {error && (
        <div className="text-xl text-red-500 text-center">{error}</div>
      )}
      <form className="flex flex-col my-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" className="border border-black/20 rounded-md px-4 py-2" />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="border border-black/20 rounded-md px-4 py-2" />
        </div>

        <button type="submit" className="px-8 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all w-full mt-4" style={{ backgroundColor: "#FF6A28" }}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
