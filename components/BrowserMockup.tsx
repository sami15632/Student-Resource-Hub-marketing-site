"use client";

import { motion } from "framer-motion";
import { Search, FileText, ClipboardList, Code2, FolderKanban, Users, Star, Bookmark } from "lucide-react";

const SIDEBAR_ITEMS = [
  { icon: FileText, label: "Study Notes", active: true },
  { icon: ClipboardList, label: "Past Exams" },
  { icon: Code2, label: "Programming" },
  { icon: FolderKanban, label: "Projects" },
  { icon: Users, label: "Community" },
  { icon: Star, label: "Favorites" },
];

const RESOURCE_CARDS = [
  { title: "Data Structures — Midterm Pack", tag: "CS201", uni: "Addis Ababa Univ.", color: "from-signal/30 to-signal/5" },
  { title: "Organic Chemistry Notes Vol. 2", tag: "CHEM110", uni: "Univ. of Toronto", color: "from-echo/30 to-echo/5" },
  { title: "React Patterns Cheat Sheet", tag: "Web Dev", uni: "Community", color: "from-signal/25 to-echo/15" },
  { title: "Linear Algebra — Final Review", tag: "MATH204", uni: "NUS", color: "from-echo/25 to-signal/10" },
];

export default function BrowserMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`glass-panel rounded-xl3 shadow-glass overflow-hidden w-full ${
        compact ? "max-w-md" : "max-w-2xl"
      }`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-white/[0.04] rounded-full px-3 py-1.5 text-xs text-mist font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-soft" />
          app.studentresourcehub.com
        </div>
      </div>

      {/* App body */}
      <div className="flex h-[280px] sm:h-[320px]">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-36 border-r border-white/[0.06] p-3 gap-1 bg-white/[0.015]">
          {SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] font-medium ${
                item.active
                  ? "bg-gradient-to-r from-signal/20 to-echo/10 text-ink"
                  : "text-mist"
              }`}
            >
              <item.icon className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 sm:p-4 flex flex-col gap-3 overflow-hidden">
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2">
            <Search className="w-3.5 h-3.5 text-mist" strokeWidth={2} />
            <span className="text-[11px] text-haze font-body">Search resources, courses, universities…</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 flex-1">
            {RESOURCE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className={`relative rounded-lg p-2.5 bg-gradient-to-br ${card.color} border border-white/[0.07] flex flex-col justify-between`}
              >
                <div>
                  <p className="text-[11px] font-semibold text-ink leading-snug line-clamp-2 font-display">
                    {card.title}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[9px] font-mono text-mist">{card.tag}</span>
                  <Bookmark className="w-3 h-3 text-mist/70" strokeWidth={2} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
