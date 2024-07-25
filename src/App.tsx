import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LogInOptions from "./Components/LogInOptions";
import LogInSEU from "./Components/LogInSEU";
import SignUpSEU from "./Components/SignUpSEU"
import SignUpOptions from "./Components/SignUpOptions";
import Footer from "./Components/Footer";
import Practice from "./Components/Practice";
import HomePage from "./Components/HomePage";


function App() {
  return (
    <Router>
      <HomePage/>
      {/* <Routes>
        <Route path="/" Component={LogInOptions} />
        <Route path="/phone-or-email" Component={LogInSEU}/>
        <Route path="/signup" Component={SignUpOptions} />
        <Route path="/phone-or-email" Component={SignUpSEU}/>
      </Routes>

      <Footer/> */}
    </Router>

  );
}

export default App;
