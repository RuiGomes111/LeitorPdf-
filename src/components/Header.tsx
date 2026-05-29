import { FaBookOpen } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center gap-4 bg-[#1E293B] text-white p-6 w-full mb-8 rounded-2xl shadow-lg border-b-4 border-blue-600">
      <div className="bg-blue-600 p-3 rounded-xl">
        <FaBookOpen className="text-white text-2xl" />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Leitor de PDF</h1>
        <p className="text-sm text-slate-400">Simples, rápido e acessível</p>
      </div>
    </header>
  );
}