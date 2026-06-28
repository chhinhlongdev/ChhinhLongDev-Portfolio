"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import Clipoboard from "./Clipoboard";

// ហៅចូល Theme របស់ Prism សម្រាប់បង្ហាញពណ៌កូដ
import "prismjs/themes/prism-tomorrow.css";

// ១. ហៅចូលភាសាគោលចម្បងៗតាមលំដាប់លំដោយ (Dependencies Order)
import "prismjs/components/prism-markup"; // សម្រាប់ HTML
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";

// ២. ហៅចូលភាសាបន្តបន្ទាប់ដែលពឹងផ្អែកលើភាសាគោលខាងលើ
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx"; 
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-python";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-json";
import "prismjs/components/prism-java";

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  useEffect(() => {
    // ដំណើរការលាបពណ៌កូដតែនៅលើ Browser ប៉ុណ្ណោះ (Client-side)
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [value.code, value.language]);

  // កែតម្រូវឈ្មោះភាសាខ្លះឱ្យត្រូវស្ដង់ដារ Prism
  const lang = value.language === "html" ? "markup" : value.language ?? "jsx";

  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2">
        {value.filename && <p className="text-sm">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <pre className={`language-${lang} !my-0 !rounded-t-none !rounded-b-lg border-x border-b dark:border-zinc-800 border-zinc-200 text-sm tracking-normal`}>
        <code className={`language-${lang}`}>{value.code}</code>
      </pre>
    </div>
  );
}