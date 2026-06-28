import { Refractor, registerLanguage } from "react-refractor";
import js from "refractor/lang/javascript.js";
import ts from "refractor/lang/typescript.js";
import tsx from "refractor/lang/tsx.js";
import jsx from "refractor/lang/jsx.js";
import sql from "refractor/lang/sql.js";
import bash from "refractor/lang/bash.js";
import markdown from "refractor/lang/markdown.js";
import css from "refractor/lang/css.js";
import scss from "refractor/lang/scss.js";
import python from "refractor/lang/python.js";
import html from "refractor/lang/markup.js";
import yaml from "refractor/lang/yaml.js";
import graphql from "refractor/lang/graphql.js";
import json from "refractor/lang/json.js";
import java from "refractor/lang/java.js";
import Clipoboard from "./Clipoboard";

// បង្ខំឱ្យ TypeScript រំលងការឆែកមើល Type Conflict ត្រង់នេះ
const safeRegister = registerLanguage as any;

// Supported languages: https://prismjs.com/#supported-languages
safeRegister(js);
safeRegister(ts);
safeRegister(tsx);
safeRegister(jsx);
safeRegister(sql);
safeRegister(bash);
safeRegister(markdown);
safeRegister(css);
safeRegister(scss);
safeRegister(python);
safeRegister(html);
safeRegister(yaml);
safeRegister(graphql);
safeRegister(json);
safeRegister(java);

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2">
        {value.filename && <p className="text-sm">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <Refractor
        language={value.language ?? "jsx"}
        value={value.code}
        className="text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal"
      />
    </div>
  );
}