import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginUser, setLoginUser] = useState(
    JSON.parse(localStorage.getItem("user") || "")
  );

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
    setLoading(true)
    try {
      const response = await axios.post(
        "https://apiservice.estudylite.com/api/login",
        credentials
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      console.log("sucesssssss");
      console.log("dataaaaa", response.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };
  return (
    <stateContext.Provider
      value={{ email, setEmail, pwd, setPwd, handleSubmit, error, loading }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
