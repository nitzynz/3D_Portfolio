import { javascript } from "../assets/icons";

// Shared "code editor window" chrome used across the site (hero, About,
// Projects) so every section reads as part of the same IDE-inspired theme.
const EditorWindow = ({ filename = "file.js", className = "", children }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-xl shadow-black/30 border border-white/10 bg-dark-surface ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-dark-bg border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="ml-3 flex items-center gap-2 bg-dark-surface rounded-t-md px-3 py-1 -mb-3 border-t border-x border-white/10 max-w-[55%] sm:max-w-none">
          <img src={javascript} alt="" className="w-3.5 h-3.5 shrink-0" />
          <span className="text-xs text-dark-muted font-medium font-mono truncate">
            {filename}
          </span>
        </div>
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
};

export default EditorWindow;
