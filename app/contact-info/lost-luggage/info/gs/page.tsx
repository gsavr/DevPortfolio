"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Gs() {
  return (
    <>
      <div className="min-w-screen flex min-h-screen bg-resume">
        <div className="container mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-start px-6 py-12">
          <div className="w-full px-6 pb-10"></div>

          <div className="gradient-bg container flex h-fit w-fit items-center justify-center overflow-x-auto overflow-y-auto rounded-xl p-0 shadow-2xl transition-all duration-700 lg:hover:translate-y-44 lg:hover:scale-150"></div>
        </div>
      </div>
    </>
  );
}
