"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// Configuração do worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function LeitorPDFUsuario() {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

 const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const uploadedFile = event.target.files?.[0];

  if (uploadedFile) {
    setFile(uploadedFile);
  }
};
  return (
    <div className="p-4  ">
      <h2 className="text-xl font-semibold mb-4 text-slate-300">
        Escolha um PDF para ler
      </h2>
      <div className="flex items-center gap-4">
        
        <label className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-dashed border-slate-600 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-[#2D3748] transition-all duration-300 w-full md:w-auto">
          <IoCloudUploadOutline className="text-2xl text-blue-400" />
          <span className="text-slate-300 font-medium">
            Clique para selecionar o PDF
          </span>
          <input
            type="file"
            accept="application/pdf"
            onChange={onFileChange}
            className="hidden" 
          />
        </label>
      </div>

      <div className="mt-8 h-[600px] overflow-auto flex flex-col items-center border rounded-xl p-2 bg-[#1E293B]">
        {file ? (
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={true} // Garante que o texto seja renderizado separadamente
                renderAnnotationLayer={true}
                width={700}
                className="mb-8 border shadow-lg"
               
              />
            ))}
          </Document>
        ) : (
          <p className="text-slate-400">Nenhum arquivo selecionado.</p>
        )}
      </div>
    </div>
  );
}
