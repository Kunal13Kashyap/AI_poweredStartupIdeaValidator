import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import ReportSection from "../components/ReportSection";
import Loader from "../components/Loader";

export default function IdeaDetail() {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    const fetchIdea = async () => {
      const res = await API.get(`/ideas/${id}`);
      setIdea(res.data.data);
    };
    fetchIdea();
  }, [id]);

  if (!idea) return <Loader />;

  const report = idea.report;

  const riskColor = {
    Low: "text-green-400",
    Medium: "text-yellow-400",
    High: "text-red-400",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{idea.title}</h1>

      <ReportSection title="💡 Problem" content={report.problem} />
      <ReportSection title="👤 Customer" content={report.customer} />
      <ReportSection title="🌍 Market" content={report.market} />

      <ReportSection
        title="⚔️ Competitors"
        content={report.competitor.join("\n")}
      />

      <ReportSection
        title="🛠 Tech Stack"
        content={report.tech_stack.join(", ")}
      />

      <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
        <p className={riskColor[report.risk_level]}>
          Risk: {report.risk_level}
        </p>

        <p className="mt-2">
          Score: {report.profitability_score}/100
        </p>

        <div className="w-full bg-gray-700 h-3 rounded mt-2">
          <div
            className="bg-green-500 h-3 rounded"
            style={{ width: `${report.profitability_score}%` }}
          />
        </div>
      </div>
    </div>
  );
}