import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [eye, setEye] = useState(<AiFillEye size={"25px"} />);
  const [text, setText] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlePassword = () => {
    if (text == "password") {
      setText("text");
      setEye(<AiFillEyeInvisible size={"25px"} />);
    } else if (text == "text") {
      setText("password");
      setEye(<AiFillEye size={"25px"} />);
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please Fill all fields!");
      return;
    } else {
      navigate("/welcome");
    }
  };
  return (
    <>
      <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-[url('https://imgs.search.brave.com/uo2o5kra4DJePzaFVIpdTgy3Xv3NSF-mA2wivoH9sqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85My8x/My9ON2hFYkwuanBn')] bg-cover">
        <h1 className="font-bold text-3xl">LOGIN PAGE</h1>
        <div className="box border-2 border-black flex flex-col gap-5 p-6 items-center rounded-2xl shadow-2xl">
          <div className="inputs flex flex-col gap-8 ">
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
            <button onClick={handleLogin}>LOGIN</button>
          </div>
          <div className="signUp">
            <span className="font-bold text-lg">
              Don't have an account?{" "}
              <Link
                className="underline underline-offset-2 text-violet-700
                hover:text-violet-800
                "
                to="/signUp"
              >
                Register Here
              </Link>
            </span>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default LoginPage;
