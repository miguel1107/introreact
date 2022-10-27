// import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import PostList from "./components/PostLis";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import Login from "./components/Login";

// import { getData } from "./service/data-service";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./page/Home";

// const initialState = [];

function App() {
  const navigate = useNavigate();
  const [search, setsearch] = useState("");

  // const [section, setsection] = useState("post");
  const [token, settoken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token == null) {
      navigate("/login");
    }
  }, [token]);

  function doSearch(text) {
    setsearch(text);
  }

  function onLogoClick() {
    // setsection("post");
    navigate("/home");
  }

  function onProfileClick() {
    // setsection("profile");
    navigate("/profile");
  }

  function onLoginComplete(token) {
    localStorage.setItem("token", token);
    settoken(token);
    navigate("/home");
  }

  function logout() {
    let token = null;
    settoken(token);
    navigate("/login");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <Header
              onLogoClick={onLogoClick}
              onProfileClick={onProfileClick}
              token={token}
            ></Header>
          </div>

          <Routes>
            <Route
              path="/home"
              element={
                <Home search={search} doSearch={doSearch} token={token}></Home>
              }
            />
            <Route
              path="login"
              element={
                <div className="col-lg-12 col-md-12 col-xs-12 p-4 mt-5 d-flex justify-content-center">
                  <Login onLoginComplete={onLoginComplete}></Login>
                </div>
              }
            />

            <Route
              path="profile"
              element={
                <div className="col-lg-12 col-md-12 col-xs-12 p-4 mt-5 d-flex justify-content-center">
                  <Profile logout={logout} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
