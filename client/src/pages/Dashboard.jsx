import { useEffect, useState } from "react";
import API from "../services/api";
import IdeaCard from "../components/IdeaCard";

export default function Dashboard() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const res = await API.get("/ideas");
      setIdeas(res.data.data);
    };
    fetchIdeas();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📂 Your Ideas</h1>

      <div className="grid gap-4">
        {ideas.map((idea) => (
          <IdeaCard key={idea._id} idea={idea} />
        ))}
      </div>
    </div>
  );
}