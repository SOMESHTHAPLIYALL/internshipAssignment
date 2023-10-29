import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(<AiFillEye size={"25px"} />);
  const [text, setText] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = () => {
    if (text == "password") {
      setText("text");
      setEye(<AiFillEyeInvisible size={"25px"} />);
    } else if (text == "text") {
      setText("password");
      setEye(<AiFillEye size={"25px"} />);
    }
  };
  const handleSubmit = () => {
    if (!name || !email || !password) {
      toast.error("Please Fill all fields!");
      return;
    }
    toast.success("SignUp Succesfull");

    navigate("/");
  };
  return (
    <>
      <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-[url('https://imgs.search.brave.com/uo2o5kra4DJePzaFVIpdTgy3Xv3NSF-mA2wivoH9sqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85My8x/My9ON2hFYkwuanBn')] bg-cover">
        <h1 className="font-bold text-3xl">SIGNUP PAGE</h1>
        <div className="box border-2 border-black flex flex-col gap-5 p-6 items-center rounded-2xl shadow-xl">
          <div className="inputs flex flex-col gap-8 ">
            <div className="name flex bg-white rounded-xl justify-center items-center p-2">
              <input
                className=" rounded-xl outline-none font-bold p-1"
                type="text"
                placeholder="NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <BiSolidUserCircle size={"30px"} />
            </div>
            <div className="email flex bg-white rounded-xl justify-center items-center p-2">
              <input
                className=" rounded-xl outline-none font-bold p-1"
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <GrMail size={"20px"} />
            </div>
            <div className="password flex bg-white rounded-xl justify-center items-center p-2">
              <input
                className="rounded-xl p-1 outline-none font-bold"
                type={text}
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handlePassword}>{eye}</button>
            </div>
          </div>
          <div className="transition ease-in-out delay-150 bg-violet-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-400 p-3 rounded-xl font-bold cursor-pointer">
            <button onClick={handleSubmit}>SignUp</button>
          </div>
          <div className="signUp">
            <span className="font-bold text-lg">
              Already have an account?{" "}
              <Link
                className="underline underline-offset-2 text-violet-700
                hover:text-violet-800
                "
                to="/"
              >
                LOGIN
              </Link>
            </span>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default SignUp;
