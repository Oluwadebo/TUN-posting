import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./component/NotFound";
import Nysc from "./component/Nysc";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Posting from "./component/Posting";

function App() {
  return (
    <>
      <Nysc />
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
