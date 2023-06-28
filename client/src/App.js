import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="bg-gray max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={Home} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
