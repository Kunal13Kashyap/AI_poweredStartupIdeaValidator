import { useNavigate, useLocation } from "react-router-dom";
import { Rocket } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/30 backdrop-blur-md">

      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold cursor-pointer"
      >
        <Rocket className="inline-block mr-2" size={20} /> AI Validator
      </h1>

      <div className="space-x-2">
        {location.pathname !== "/" && (
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 cursor-pointer"
          >
            New Idea
          </button>
        )}

        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}