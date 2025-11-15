import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {Builder} from "./pages/Builder";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* CV Builder Page */}
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
