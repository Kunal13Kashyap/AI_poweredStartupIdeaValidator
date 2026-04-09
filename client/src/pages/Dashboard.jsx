import { useEffect, useState } from "react";
import API from "../services/api";
import IdeaCard from "../components/IdeaCard";

export default function Dashboard() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchIdeas = async () => {
      try {
        const res = await API.get("/ideas");
        const data = res.data.data || res.data;

        if (!isMounted) return;

        setIdeas(data);
      } catch (err) {
        console.error(err);
        if (!isMounted) return;

        setError("Failed to load ideas");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchIdeas();

    return () => {
      isMounted = false;
    };
  }, []);

  // ✅ Loading state
  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <p className="animate-pulse">Loading ideas...</p>
      </div>
    );
  }

  // ✅ Error state
  if (error) {
    return (
      <div className="p-6 text-white text-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-6">📂 Your Ideas</h1>

      {ideas.length === 0 ? (
        <p className="text-gray-400">No ideas yet. Create one 🚀</p>
      ) : (
        <div className="grid gap-4">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      )}
    </div>
  );
}