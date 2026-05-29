import LeitorPDFUsuario from "./components/LeitorPdf";
import Header from "./components/Header";
import VLibras from "./components/Vlibras";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0F172A] text-white p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Header />
        <VLibras />
        <div className="bg-[#1E293B] p-8 rounded-2xl shadow-xl border border-slate-700">
          
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Visualize seus documentos de forma rápida, intuitiva e acessível para todos. 
            Desenvolvido para garantir que a informação chegue a qualquer pessoa, 
            removendo barreiras na leitura digital.
          </p>          
          
          <div className="border-t border-slate-700 pt-3">
            <LeitorPDFUsuario />
          </div>
        </div>
      </div>
    </main>
  );
}