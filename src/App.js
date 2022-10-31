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
import Process from "./component/Processing";
import Posting from "./component/Posting";
import Signin from "./component/Signin";
import Signins from "./component/Signins";

function App() {
  return (
    <>
      <Nysc />
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signins" element={<Signins />} />
          <Route path="/Process" element={<Process />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
