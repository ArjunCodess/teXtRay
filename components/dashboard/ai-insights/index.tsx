import { Suspense } from "react";
import { ChatStats } from "@/types";
import { ChatSummaryCard } from "./chat-summary-card";
import { RelationshipHealthCard } from "./relationship-health-card";
import { InterestPercentageCard } from "./interest-percentage-card";

interface AIInsightsProps {
  stats: ChatStats;
  onUploadNewChat: () => void;
}

export function AIInsights({ stats, onUploadNewChat }: AIInsightsProps) {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChatSummaryCard stats={stats} onUploadNewChat={onUploadNewChat} />
        <RelationshipHealthCard stats={stats} />
        <InterestPercentageCard stats={stats} />
      </div>
    </Suspense>
  );
} 