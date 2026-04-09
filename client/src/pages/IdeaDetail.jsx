import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import ReportSection from "../components/ReportSection";
import Loader from "../components/Loader";

export default function IdeaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [idea, setIdea] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;
    let isMounted = true;

    const fetchIdea = async () => {
      try {
        const res = await API.get(`/ideas/${id}`);
        const data = res.data.data || res.data;

        if (!isMounted) return;

        setIdea(data);

        if (data.report) {
          clearInterval(interval);
        }
      } catch (err) {
        console.error(err);
        if (!isMounted) return;

        setError("Failed to load idea");
        clearInterval(interval);
      }
    };

    fetchIdea();
    interval = setInterval(fetchIdea, 3000);

    return () => {
      isMounted = false;
      if (interval) clearInterval(interval);
    };
  }, [id]);

  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <p className="text-red-400 mb-4">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  if (!idea) return <Loader />;

  if (!idea.report) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <p className="animate-pulse text-lg mb-4">
          🤖 Generating AI report... please wait
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  const report = idea.report || {};

  const riskColor = {
    Low: "text-green-400",
    Medium: "text-yellow-400",
    High: "text-red-400",
  };

  const score = Math.min(report.profitability_score || 0, 100);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4 text-white">
      
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{idea.title}</h1>
      </div>

      {/* REPORT */}
      <ReportSection title="💡 Problem" content={report.problem || "Generating..."} />
      <ReportSection title="👤 Customer" content={report.customer || "Generating..."} />
      <ReportSection title="🌍 Market" content={report.market || "Generating..."} />

      <ReportSection
        title="⚔️ Competitors"
        content={
          Array.isArray(report.competitor)
            ? report.competitor.join("\n")
            : report.competitor || "Generating..."
        }
      />

      <ReportSection
        title="🛠 Tech Stack"
        content={
          Array.isArray(report.tech_stack)
            ? report.tech_stack.join(", ")
            : report.tech_stack || "Generating..."
        }
      />

      {/* SCORE + RISK */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
        <p className={riskColor[report.risk_level] || "text-gray-400"}>
          Risk: {report.risk_level || "Unknown"}
        </p>

        <p className="mt-2">
          Score: {report.profitability_score ?? "N/A"}/100
        </p>

        <div className="w-full bg-gray-700 h-3 rounded mt-2">
          <div
            className="bg-green-500 h-3 rounded"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </div>
  );
}