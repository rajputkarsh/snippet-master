import { SingleLanguageType } from "@/interfaces/context";
import {
  SiCsharp,
  SiGo,
  SiJavascript,
  SiKotlin,
  SiPhp,
  SiPython,
  SiRuby,
  SiRust,
  SiSwift,
  SiTypescript,
  SiHaskell,
  SiPerl,
  SiElixir,
  SiR,
  SiC,
  SiCplusplus,
  SiShell,
  SiNodedotjs
} from "react-icons/si";

export const AVAILABLE_LANGUAGES: Array<SingleLanguageType> = [
  {
    id: crypto.randomUUID(),
    name: "Javascript",
    icon: <SiJavascript size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Python",
    icon: <SiPython size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "C#",
    icon: <SiCsharp size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Ruby",
    icon: <SiRuby size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "PHP",
    icon: <SiPhp size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Swift",
    icon: <SiSwift size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Go",
    icon: <SiGo size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Kotlin",
    icon: <SiKotlin size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Rust",
    icon: <SiRust size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Typescript",
    icon: <SiTypescript size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Haskell",
    icon: <SiHaskell size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Perl",
    icon: <SiPerl size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Shell",
    icon: <SiShell size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "C",
    icon: <SiC size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "C++",
    icon: <SiCplusplus size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "R",
    icon: <SiR size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Elixir",
    icon: <SiElixir size={15} className="text-slate-400" />,
  },
  {
    id: crypto.randomUUID(),
    name: "Node",
    icon: <SiNodedotjs size={15} className="text-slate-400" />,
  },
];
