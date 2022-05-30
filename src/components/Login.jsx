import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { planetContext } from "./Context";

function Login() {
  const { userdata, isloggedin, setIsLoggedIn } = useContext(planetContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    setIsLoggedIn(false);
    setError(true);
    const verifiedUser = userdata.find((d) => {
      return d.name === username;
    });
    if (verifiedUser) {
      if (verifiedUser.birth_year === password) {
        setIsLoggedIn(true);
        setError(false);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-8 bg ">
      <h2 className="font-extrabold text-[28px] text-white">Login</h2>
      <div className="max-w-sm w-[300px] mt-4 p-5 bg-white rounded-md pt-7 ">
        <div className="flex flex-col gap-10 justify-center items-center">
          <input
            type="text"
            placeholder="Enter Username"
            className="bg-slate-200 p-2 rounded-md w-full focus:outline-none"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="bg-slate-200 p-2 rounded-md w-full focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-green-400 p-2 font-semibold rounded-md hover:bg-green-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {isloggedin ? (
          <Navigate to="/planets" />
        ) : (
          error && (
            <div className="bg-red-400 rounded-md  p-2 mt-2 font-semibold text-center">
              Invalid Credentials
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Login;
