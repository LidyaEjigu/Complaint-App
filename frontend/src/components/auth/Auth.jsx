import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LockOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { signinUser, signupUser } from "../../actions/auth";
const Auth = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const authFile = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [authData, setAuthData] = useState(authFile);
  const [SignUp, setSignUp] = useState(true);
  function Toogle() {
    setSignUp((preve) => !preve);
  }
  function submitAuth(e) {
    if (SignUp) {
      dispatch(signupUser(authData, history));
    } else {
      dispatch(signinUser(authData, history));
    }
    e.preventDefault();
  }
  return (
    <>
      <div className="authform">
        <form className="formAuth" onSubmit={submitAuth}>
          <div className="lock">
            <LockOutlined />
          </div>
          <div className="sig">{SignUp ? "SignUp" : "SignIn"}</div>
          {SignUp && (
            <div className="firstlast">
              <input
                type="text"
                value={authData.firstname}
                onChange={(e) =>
                  setAuthData({ ...authData, firstname: e.target.value })
                }
                placeholder="first name"
                className="firstA"
              />
              <input
                type="text"
                value={authData.lastname}
                onChange={(e) =>
                  setAuthData({ ...authData, lastname: e.target.value })
                }
                placeholder="last name"
                className="last"
              />
            </div>
          )}
          <input
            type="email"
            value={authData.email}
            onChange={(e) =>
              setAuthData({ ...authData, email: e.target.value })
            }
            placeholder="email"
            className="emailA"
          />
          <input
            type="password"
            value={authData.password}
            onChange={(e) =>
              setAuthData({ ...authData, password: e.target.value })
            }
            placeholder="password"
            className="pass"
          />
          {SignUp && (
            <input
              type="password"
              value={authData.confirmpassword}
              onChange={(e) =>
                setAuthData({ ...authData, confirmpassword: e.target.value })
              }
              placeholder="confirmPassword"
              className="cpass"
            />
          )}
          <button className="submitAuth">submit</button>
        </form>
        <div className="alreadyhave" onClick={Toogle}>
          {SignUp
            ? "already have anaccount?SignIn"
            : "don't have anaccount?SignUp"}
        </div>
      </div>
    </>
  );
};

export default Auth;
