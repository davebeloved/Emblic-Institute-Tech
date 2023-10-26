import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [succeed, setSucceed] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // const [loginUser, setLoginUser] = useState(
  //   JSON.parse(localStorage.getItem("user") || "")
  // );
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      setError("Please fill all fields");
      return;
    }

    let credentials = {
      email,
      password: pwd,
    };
    setLoading(true);
    try {
      const response = await axios.post(
        "https://apiservice.estudylite.com/api/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setSucceed("Login Successfully, Redirecting to Home Page");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 3000);
        console.log("sucesssssss");
        console.log("dataaaaa", response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };

  console.log("adddedddd", token);
  return (
    <stateContext.Provider
      value={{
        email,
        setEmail,
        pwd,
        setPwd,
        handleSubmit,
        error,
        loading,
        token,
        setToken,
        succeed,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
