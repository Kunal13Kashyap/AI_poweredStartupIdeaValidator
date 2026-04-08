export default function ReportSection({ title, content }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
      <h2 className="font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 whitespace-pre-line">{content}</p>
    </div>
  );
}