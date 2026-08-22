import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { javascript, arrow } from "../assets/icons";

// Each line is a list of syntax-highlighted tokens. Keeping the text and the
// coloring together means the typewriter effect below can reveal characters
// one at a time while still rendering full syntax highlighting once a line
// finishes typing.
const CODE_LINES = [
  [{ t: "// nithyashree.dev — hero.js", c: "text-[#5c6370] italic" }],
  [
    { t: "const", c: "text-[#c678dd]" },
    { t: " engineer ", c: "text-[#abb2bf]" },
    { t: "=", c: "text-[#56b6c2]" },
    { t: " {", c: "text-[#abb2bf]" },
  ],
  [
    { t: "  name", c: "text-[#e06c75]" },
    { t: ": ", c: "text-[#abb2bf]" },
    { t: "'Nithyashree Govindarajan'", c: "text-[#98c379]" },
    { t: ",", c: "text-[#abb2bf]" },
  ],
  [
    { t: "  role", c: "text-[#e06c75]" },
    { t: ": ", c: "text-[#abb2bf]" },
    { t: "'Software Engineer 2'", c: "text-[#98c379]" },
    { t: ",", c: "text-[#abb2bf]" },
  ],
  [
    { t: "  experience", c: "text-[#e06c75]" },
    { t: ": ", c: "text-[#abb2bf]" },
    { t: "'3+ years'", c: "text-[#98c379]" },
    { t: ",", c: "text-[#abb2bf]" },
  ],
  [
    { t: "  company", c: "text-[#e06c75]" },
    { t: ": ", c: "text-[#abb2bf]" },
    { t: "'PayPal'", c: "text-[#98c379]" },
    { t: ",", c: "text-[#abb2bf]" },
  ],
  [
    { t: "  stack", c: "text-[#e06c75]" },
    { t: ": [", c: "text-[#abb2bf]" },
    { t: "'Java'", c: "text-[#98c379]" },
    { t: ", ", c: "text-[#abb2bf]" },
    { t: "'React'", c: "text-[#98c379]" },
    { t: ", ", c: "text-[#abb2bf]" },
    { t: "'Node.js'", c: "text-[#98c379]" },
    { t: ", ", c: "text-[#abb2bf]" },
    { t: "'AWS'", c: "text-[#98c379]" },
    { t: "],", c: "text-[#abb2bf]" },
  ],
  [
    { t: "  currentlyBuilding", c: "text-[#e06c75]" },
    { t: ": ", c: "text-[#abb2bf]" },
    { t: "'scalable payment systems'", c: "text-[#98c379]" },
    { t: ",", c: "text-[#abb2bf]" },
  ],
  [{ t: "};", c: "text-[#abb2bf]" }],
  [{ t: "", c: "" }],
  [
    { t: "console", c: "text-[#e5c07b]" },
    { t: ".log", c: "text-[#61afef]" },
    { t: "(", c: "text-[#abb2bf]" },
    { t: "`Hi, I'm ", c: "text-[#98c379]" },
    { t: "${", c: "text-[#e06c75]" },
    { t: "engineer.name", c: "text-[#61afef]" },
    { t: "}", c: "text-[#e06c75]" },
    { t: " 👋`", c: "text-[#98c379]" },
    { t: ");", c: "text-[#abb2bf]" },
  ],
];

const LINE_TEXT = CODE_LINES.map((tokens) =>
  tokens.map((token) => token.t).join("")
);

const TYPE_SPEED_MS = 18;

const CodeHero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const skippedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(CODE_LINES.length);
      setDone(true);
      return;
    }

    const currentLine = LINE_TEXT[lineIndex];
    if (currentLine === undefined) {
      setDone(true);
      return;
    }

    if (charIndex >= currentLine.length) {
      const timeout = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 90);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, TYPE_SPEED_MS);
    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex, reducedMotion]);

  // Let an impatient visitor click through the animation.
  const skipTyping = () => {
    if (skippedRef.current) return;
    skippedRef.current = true;
    setLineIndex(CODE_LINES.length);
    setDone(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onClick={skipTyping}
        className="rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-black/10 bg-[#282c34] cursor-text"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#21252b] border-b border-black/20">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <div className="ml-3 flex items-center gap-2 bg-[#282c34] rounded-t-md px-3 py-1 -mb-3 border-t border-x border-black/20">
            <img src={javascript} alt="" className="w-3.5 h-3.5" />
            <span className="text-xs text-[#abb2bf] font-medium">
              hero.js
            </span>
          </div>
        </div>

        {/* Code body */}
        <div className="px-5 py-5 font-mono text-[13px] sm:text-sm leading-6 overflow-x-auto">
          {CODE_LINES.map((tokens, i) => {
            const isTyped = i < lineIndex;
            const isTyping = i === lineIndex;
            const raw = LINE_TEXT[i];

            return (
              <div key={i} className="flex">
                <span className="select-none w-6 sm:w-8 shrink-0 text-right pr-3 sm:pr-4 text-[#4b5263]">
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {isTyped &&
                    tokens.map((token, j) => (
                      <span key={j} className={token.c}>
                        {token.t}
                      </span>
                    ))}
                  {isTyping && (
                    <span className="text-[#abb2bf]">
                      {raw.slice(0, charIndex)}
                    </span>
                  )}
                  {(isTyping || (done && i === CODE_LINES.length - 1)) && (
                    <span className="code-caret inline-block w-[7px] h-[1em] bg-[#61afef] align-middle ml-[1px]" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-500 ${
          done
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <Link to="/about" className="neo-brutalism-white neo-btn-inline">
          cat about.md
          <img src={arrow} alt="" className="w-4 h-4 object-contain" />
        </Link>
        <Link to="/projects" className="neo-brutalism-white neo-btn-inline">
          ls ./projects
          <img src={arrow} alt="" className="w-4 h-4 object-contain" />
        </Link>
        <Link to="/contact" className="neo-brutalism-white neo-btn-inline">
          contact --send
          <img src={arrow} alt="" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    </div>
  );
};

export default CodeHero;
