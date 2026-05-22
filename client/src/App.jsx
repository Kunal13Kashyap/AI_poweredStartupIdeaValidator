import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import IdeaDetail from "./pages/IdeaDetail";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-gray-900 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/idea/:id" element={<IdeaDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}