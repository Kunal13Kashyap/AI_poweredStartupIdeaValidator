import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function IdeaCard({ idea, onDelete }) {
  return (
    <Link
      to={`/idea/${idea._id}`}
      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition flex justify-between items-center"
    >
      <div>
        <h2 className="font-semibold">{idea.title}</h2>
        <p className="text-sm text-gray-400">
          {idea.description?.slice(0, 80) || "No description"}...
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDelete(idea._id);
        }}
        className="text-red-400 hover:text-red-600 text-sm ml-4 cursor-pointer"
      >
        <Trash2 size={18}/>
      </button>
    </Link>
  );
}