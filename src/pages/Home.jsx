import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import logoProgrammer from "../assets/Programmer.png";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("qwertytokenfrontend");
  const [errMsg, setErrMsg] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === import.meta.env.VITE_APP_USN && password === import.meta.env.VITE_APP_PWD) {
      window.sessionStorage.setItem("token", token);
      navigate("/dashboard");
      setToken(import.meta.env.VITE_APP_TOKEN);
    } else {
      setErrMsg("Kasalahan pada username atau password :(");
      return false;
    }
  };

  return (
    <div className="container">
      <div className="wrap-form">
        <img
          src={logoProgrammer}
          alt="logo-pondok-programmer"
          className="img"
        />
        <p style={{ color: "red" }}>{errMsg}</p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Password</label>
            <input
              type={visible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              style={{
                textAlign: "right",
                color: "black",
                marginRight: "10px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {visible ? (
                <p onClick={() => setVisible(!visible)}>Hide</p>
              ) : (
                <p onClick={() => setVisible(!visible)}>Show</p>
              )}
            </div>
            <button className="btn-login" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
