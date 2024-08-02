import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LogInOptions from "./Components/LogIn/LogInOptions";
import LogInSEU from "./Components/LogIn/LogInSEU";
import SignUpSEU from "./Components/SignUp/SignUpSEU"
import SignUpOptions from "./Components/SignUp/SignUpOptions";
import Footer from "./Components/Footer";

import HomePage from "./Components/HomePage";


function App() {
  return (
    <div style={{boxSizing: "border-box"}}>
      <Router>
        <HomePage />

        {/* <Routes>
        <Route path="/" Component={LogInOptions} />
        <Route path="/phone-or-email" Component={LogInSEU}/>
        <Route path="/signup" Component={SignUpOptions} />
        <Route path="/phone-or-email" Component={SignUpSEU}/>
      </Routes> */}

      {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
