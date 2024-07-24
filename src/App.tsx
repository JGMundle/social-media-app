import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LogInOptions from "./Components/LogInOptions";
import LogInSEU from "./Components/LogInSEU";
import SignUpSEU from "./Components/SignUpSEU"
import SignUpOptions from "./Components/SignUpOptions";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" Component={LogInOptions} />
        {/* <Route path="/signup" element={<SignUpOptions/>} />
        <Route path="/phone-or-email" element={<SignUpSEU/>}/> */}
      </Routes>

    </Router>
  );
}

export default App;
