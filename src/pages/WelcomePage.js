import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WelcomePage = () => {
  useEffect(() => {
    toast.success("Login Succesfull");
  }, []);

  return (
    <>
      <div className="flex justify-center items-center text-2xl h-screen w-screen">
        <h1>Welcome to your Account!!</h1>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default WelcomePage;
