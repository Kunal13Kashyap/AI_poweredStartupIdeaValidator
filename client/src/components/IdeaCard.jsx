import { Link } from "react-router-dom";

export default function IdeaCard({ idea }) {
  return (
    <Link
      to={`/idea/${idea._id}`}
      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
    >
      <h2 className="font-semibold">{idea.title}</h2>
      <p className="text-sm text-gray-400">
        {idea.description.slice(0, 80)}...
      </p>
    </Link>
  );
}