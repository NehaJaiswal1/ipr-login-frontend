

import React from "react";
import Login1 from "./Components/Login/Login1";
import SignUp from "./Components/SignUp/SignUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import { HashRouter  as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    // <div>
    //   {/* <Login1/> */}
    //   <SignUp/>
    //   {/* <ForgotPassword/> */}

    // </div>
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login1 />} />

          <Route exact path="/signup" element={<SignUp />} />

          <Route exact path="/forgetpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
