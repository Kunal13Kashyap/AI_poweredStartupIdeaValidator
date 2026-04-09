import { useEffect, useState } from "react";
import API, { deleteIdea } from "../services/api";
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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this idea?");
    if (!confirmDelete) return;

    try {
      await deleteIdea(id);

      setIdeas((prev) => prev.filter((idea) => idea._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete idea");
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <p className="animate-pulse">Loading ideas...</p>
      </div>
    );
  }

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
            <IdeaCard
              key={idea._id}
              idea={idea}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}