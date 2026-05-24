import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
  if (!title || !description) return alert("Fill all fields");

  try {
    setLoading(true);

    const res = await API.post("/ideas", { title, description });

    const ideaId =
      res.data?.data?._id ||
      res.data?._id ||
      res.data?.idea?._id;

    if (!ideaId) throw new Error("Invalid response");

    navigate(`/idea/${ideaId}`);

  } catch (err) {
    console.error(err);

    if (err.code === "ERR_CANCELED") {
      alert("Request took too long. Try again.");
    } else if (err.code === "ECONNABORTED") {
      alert("Server is slow (Render free tier). Try again.");
    } else {
      alert(err?.response?.data?.message || "Something went wrong");
    }

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          🚀 Idea Forge
        </h1>

        <div className="space-y-4">
          <input
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Idea title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your idea..."
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Analyzing..." : "Validate Idea 🚀"}
          </button>

          {loading && (
            <p className="text-sm text-gray-400 text-center mt-2">
              ⏳ This may take up to 30 seconds (free server)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
