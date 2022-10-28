import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./component/NotFound";
import Nysc from "./component/Nysc";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nysc />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
