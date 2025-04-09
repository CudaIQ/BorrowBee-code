import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
