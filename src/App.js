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

function App() {
  return (
    <>
      <Nysc />
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
