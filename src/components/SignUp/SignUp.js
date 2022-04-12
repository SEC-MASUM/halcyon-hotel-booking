import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" my-10">
      <div class="text-center shadow-gray-200 shadow-lg w-[500px] pb-7 mx-auto">
        <div>
          <h1 class="font-bold text-3xl bg-green-400 text-white inline-block rounded-full px-4 py-2 my-5">
            H
          </h1>
          <h2 class="text-3xl font-bold text-green-400 mb-5 capitalize">
            Sign Up
          </h2>
          <input
            id="email"
            class="w-4/5 shadow-gray-200 shadow-md rounded-full px-4 py-3 mb-5"
            type="email"
            placeholder="Please enter your email"
            required
          />
          <input
            id="password"
            class="w-4/5 shadow-gray-200 shadow-md rounded-full px-4 py-3 mb-5"
            type="password"
            placeholder="Please enter your password"
            required
          />
          <input
            id="confirm-password"
            class="w-4/5 shadow-gray-200 shadow-md rounded-full px-4 py-3 mb-5"
            type="password"
            placeholder="Please confirm your password"
            required
          />
          <button
            id="login-button"
            class="w-4/5 font-medium text-white bg-green-400 uppercase block shadow-gray-400 shadow-sm rounded-full px-6 py-3 mb-3 mx-auto"
          >
            Sign Up
          </button>
          <p>
            Already Have An Account?
            <Link to="/login">
              <span className="text-green-400"> Log in</span>
            </Link>
          </p>
        </div>
        <div className="flex justify-center">
          <p className="flex w-3/5 text-center ">
            <span className="w-full block border-b-2 border-green-400"></span>
            <span class="block">or</span>
            <span className="w-full block border-b-2 border-green-400"></span>
          </p>
        </div>
        <div className="flex flex-col items-center p-5">
          <button
            id="facebook-login"
            class="w-4/5 inline-block border-2 rounded border-green-400 px-3 py-2 my-2 font-normal whitespace-nowrap"
          >
            Continue with Facebook
          </button>
          <button class="w-4/5 inline-block border-2 rounded border-green-400 px-3 py-2 my-2 font-normal whitespace-nowrap">
            Continue with Google
          </button>
          <button class="w-4/5 inline-block border-2 rounded border-green-400 px-3 py-2 my-2 font-normal whitespace-nowrap">
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
