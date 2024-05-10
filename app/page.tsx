'use client'
import React, { useContext, useState } from "react";
import { ShapeImage } from "@/components/images";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "./Context/AuthContext";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { setIsLoggedin } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email: string = event.currentTarget.email.value;
    const password: string = event.currentTarget.password.value;
    const type: string = "ADMIN";

    try {
      setLoading(true);
      const response = await axios.post('https://ubiquitous-broccoli-v6l2.onrender.com/auth/SignIn', { email, password, type });
      console.log(response)
      if (response.status === 201) {
        // Save login response data in sessionStorage
        sessionStorage.setItem('authData', JSON.stringify(response.data));

        // Update login state in context
        setIsLoggedin(true);
        toast.success("Login successfully");
      } else {
        toast.error("Failed to login");
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error, show error message, etc.
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#6C8164] min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        <ShapeImage />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-xl">
        <div className="w-full bg-white px-10 py-6 rounded-2xl">
          <div className="h-10 w-10 bg-secondary rounded-full mx-auto mt-4 mb-2"></div>
          <h1 className="text-md text-center font-semibold text-black mb-4">Login to Account</h1>
          <div className="flex justify-center">
            <hr className="w-[30%]" />
          </div>
          <form onSubmit={handleLogin} className="w-full">
            <div className="my-2">
              <label className="font-bold text-sm text-black">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="email"
                placeholder="Email"
                className="text-sm text-black border border-slate-300 p-2 w-full rounded-xl outline-none placeholder:font-bold mt-3"
              />
            </div>
            <div className="my-2">
              <label className="font-bold text-sm text-black ">
                Password <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center border border-slate-300 rounded-xl mt-3">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className="text-sm text-black border-none p-2 w-full rounded-xl outline-none placeholder:font-bold "
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none mr-2 text-secondary text-xl"
                >
                  {showPassword ? <IoIosEyeOff className="transition-all duration-300 ease-in-out delay-300" /> : <IoIosEye className="transition-all duration-300 ease-in-out delay-300" />}
                </button>
              </div>
            </div>
            <button className="text-white rounded-xl py-2 my-4 bg-secondary w-full" type="submit">
              {loading ? <div className="flex items-center font-semibold justify-center"><ClipLoader color={'#ffffff'} loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />Loading...</div> : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
