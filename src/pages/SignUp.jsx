import { useRef, useState, useEffect, useMemo } from "react";
import Image from "../../public/images/register.png";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../store/userSlice";
import Loading from "../components/Loading";
import axios from "axios";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const USER_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const userRef = useRef();
  const errRef = useRef();

  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    city: "",
    password: "",
    password_confirmation: "",
  });

  // const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suceed, setSuceed] = useState(null);

  // const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user.email));
  }, [user.email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(user.password));
    setValidMatch(user.password === user.password_confirmation);
  }, [user.password, user.password_confirmation]);

  useEffect(() => {
    setErrMsg("");
  }, [user.email, user.password, user.password_confirmation]);

  // handlechange function
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setUser((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  // console.log(user);
  // console.log(value.label);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // handlesubmit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !user.email ||
      !user.fullname ||
      !user.gender ||
      !user.dob ||
      !user.address ||
      !user.phone ||
      !user.city ||
      !user.password ||
      !user.password_confirmation ||
      !value.label
    ) {
      setError("Please fill all fields");
      return;
    }

    let credentials = {
      fullname: user.fullname,
      email: user.email,
      gender: user.gender,
      dob: user.dob,
      address: user.address,
      phone: user.phone,
      city: user.city,
      password: user.password,
      password_confirmation: user.password_confirmation,
      country: value.label,
    };
    setLoading(true);
    try {
      const response = await axios.post(
        "https://apiservice.estudylite.com/api/register",
        credentials
      );
      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data));

        setSuceed(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        console.log("sucesssssss");
        console.log("dataaaaa", response.data);
      }

      setSuccess(true);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user.email);
    const v2 = PWD_REGEX.test(user.password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    let credentials = {
      fullname: user.fullname,
      email: user.email,
      gender: user.gender,
      dob: user.dob,
      address: user.address,
      phone: user.phone,
      city: user.city,
      password: user.password,
      password_confirmation: user.password_confirmation,
      country: value.label,
    };
    try {
      dispatch(signinUser(credentials)).then((result) => {
        if (result.payload) {
          console.log("sucessssssss");
          console.log(result);
          navigate("/");
        }
      });

      setSuccess(true);

      // setUser({
      //   fullname: "",
      //   email: "",
      //   gender: "",
      //   dob: "",
      //   address: "",
      //   phone: "",
      //   city: "",
      //   password: "",
      //   password_confirmation: "",
      // });
      setValue("");
    } catch (err) {
      // console.log("errrrrrr", err);
      // if (!err?.response) {
      //   setErrMsg(err.response.data.message);
      // } else if (err.response?.status === 409) {
      //   setErrMsg("Username Taken");
      // } else {
      //   setErrMsg("Registration Failed");
      // }
      console.log(err);
      errRef.current.focus();
    }
  };
  return (
    <div className="bg-gray-300 grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 py-16">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="">
        <div className="bg-[#0294DA]   p-5 rounded-lg shadow-md flex flex-col items-center py-6 lg:py-12">
          <form onSubmit={handleSubmit} className=" w-full text-white form">
            <p
              ref={errRef}
              className={error ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {/* {errMsg} */}
              {error}
            </p>
            <p
              ref={errRef}
              className={suceed ? "succedmsg" : "offscreen"}
              aria-live="assertive"
            >
              {/* {errMsg} */}
              {suceed}
            </p>
            <h1 className="font-clash text-center md:text-2xl">Register</h1>
            <label htmlFor="fullname" className="flex items-center gap-x-3">
              Full Name:
            </label>
            <input
              type="text"
              id="fullname"
              ref={userRef}
              autoComplete="off"
              onChange={handleChange}
              value={user.fullname}
              name="fullname"
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <label htmlFor="email" className="flex items-center gap-x-2">
              Email:
              <AiOutlineCheck
                className={
                  validName ? "bg-white rounded-full text-green-700 " : "hide"
                }
              />
              <AiOutlineClose
                className={
                  validName || !user.email
                    ? "hide"
                    : "invalid bg-white rounded-full"
                }
              />
            </label>
            <input
              type="email"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={handleChange}
              name="email"
              value={user.email}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user.email && !validName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <AiOutlineCheck />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Must be a valid email address
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="gender">Gender</label>
                <select
                  value={user.gender}
                  onChange={handleChange}
                  name="gender"
                  id="gender"
                  className="text-black w-full"
                >
                  <option>none</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  value={user.dob}
                  type="date"
                  className="w-full"
                  onChange={handleChange}
                  id="dob"
                  name="dob"
                />
              </div>
            </div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={user.address}
              name="address"
              id="address"
              onChange={handleChange}
            />
            <div className=" lg:flex items-center gap-x-4">
              <div className="flex flex-col lg:w-1/2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  value={user.phone}
                  className="w-full"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col lg:w-1/2">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  value={user.city}
                  className="w-full"
                  name="city"
                  id="city"
                  onChange={handleChange}
                />
              </div>
            </div>
            <label htmlFor="password" className="flex items-center gap-x-2">
              Password:
              <AiOutlineCheck
                className={
                  validPwd ? "bg-white rounded-full text-green-700 " : "hide"
                }
              />
              <AiOutlineClose
                className={
                  validPwd || !user.password
                    ? "hide"
                    : "invalid bg-white rounded-full"
                }
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              value={user.password}
              name="password"
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <AiOutlineCheck />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd" className="flex items-center gap-x-2">
              Confirm Password:
              <AiOutlineCheck
                className={
                  validMatch && user.password_confirmation
                    ? "bg-white rounded-full text-green-700"
                    : "hide"
                }
              />
              <AiOutlineClose
                className={
                  validMatch || !user.password_confirmation
                    ? "hide"
                    : "invalid bg-white rounded-full"
                }
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={handleChange}
              name="password_confirmation"
              value={user.password_confirmation}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <AiOutlineCheck />
              Must match the first password input field.
            </p>
            <label htmlFor="country">Country</label>
            <Select
              options={options}
              value={value}
              name="country"
              onChange={changeHandler}
              className="text-black select"
            />
            {/* className=
            {!email || !pwd || loading
              ? "text-white flex justify-center font-inter btn-primary opacity-50 w-full"
              : "text-opacity-100 btn-primary font-inter flex justify-center w-full"} */}
            <button
              type="submit"
              disabled={!validName || !validPwd || !validMatch ? true : false}
              className={
                !validName || !validPwd || !validMatch || loading
                  ? "text-white flex justify-center font-inter btn-primary opacity-50"
                  : "text-opacity-100 btn-primary font-inter flex justify-center"
              }
            >
              {loading ? <Loading /> : "Sign up"}
            </button>
          </form>
          <p className="font-clash text-white text-xs">
            Already have an Account?
            <span className="italic underline">
              {" "}
              <Link to="/signin">Sign-In</Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
