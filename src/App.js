import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./Components/Teams/Teams";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
