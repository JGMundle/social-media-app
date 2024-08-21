import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LogInOptions from "./Components/LogIn/LogInOptions";
import LogInSEU from "./Components/LogIn/LogInSEU";
import SignUpSEU from "./Components/SignUp/SignUpSEU"
import SignUpOptions from "./Components/SignUp/SignUpOptions";
import Footer from "./Components/Footer";

import HomePage from "./Components/HomePage";
import UploadPage from "./Components/Upload/UploadPage";
import MessagesPage from "./Components/MessagesPage";
import LoginPractice from "./Components/LogIn/LoginPractice";


function App() {
  return (
    <div style={{ boxSizing: "border-box" }}>
      <Router>
        <Routes>
          <Route path="/logintest" Component={LoginPractice} />
          <Route path="/" Component={HomePage} />
          <Route path="/uploadpage" Component={UploadPage} />
          <Route path="/messagespage" Component={MessagesPage} />

          
          <Route path="/phone-or-email" Component={LogInSEU} />
          <Route path="/signup" Component={SignUpOptions} />
          <Route path="/phone-or-email" Component={SignUpSEU} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
