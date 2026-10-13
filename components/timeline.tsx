"use client";

import { useState } from "react";
import { TimelineEntry, TimelineEntryType } from "@/types/portfolio";
import { TimelineItem } from "./portfolio/timeline-item";
import { Briefcase, GraduationCap, Layers } from "lucide-react";

type FilterTab = "all" | TimelineEntryType;

interface TimelineProps {
  entries: readonly TimelineEntry[];
  labelledBy: string;
}

export function Timeline({ entries, labelledBy }: TimelineProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredEntries = entries.filter((entry) => {
    if (activeTab === "all") return true;
    return entry.type === activeTab;
  });

  const counts = {
    all: entries.length,
    work: entries.filter((e) => e.type === "work").length,
    education: entries.filter((e) => e.type === "education").length,
  };

  const tabs: { id: FilterTab; label: string; icon: typeof Layers; count: number }[] = [
    { id: "all", label: "All Experience", icon: Layers, count: counts.all },
    { id: "work", label: "Work History", icon: Briefcase, count: counts.work },
    { id: "education", label: "Education", icon: GraduationCap, count: counts.education },
  ];

  return (
    <div className="space-y-8">
      {/* Segmented Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter timeline by experience type"
        className="flex flex-wrap items-center gap-2"
      >
        {tabs.map(({ id, label, icon: Icon, count }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(id)}
              className={`group inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "border border-border/80 bg-card/60 text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
              }`}
            >
              <Icon className="size-3.5" />
              <span>{label}</span>
              <span
                className={`ml-0.5 rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Timeline track */}
      {filteredEntries.length > 0 ? (
        <ol
          aria-labelledby={labelledBy}
          className="relative ml-4 border-l border-border"
        >
          {filteredEntries.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </ol>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          No entries found in this category.
        </div>
      )}
    </div>
  );
}