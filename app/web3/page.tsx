"use client";

import { GlowBorderCard } from "@/components/ui/glow-border-card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const web3Articles = [
  {
    title: "Mad Lads",
    link: "https://ayush123-1692854322373.hashnode.dev/mad-lads",
    colorPreset: "aurora" as const,
  },
  {
    title: "SolBlaze Staking",
    link: "https://ayush123-1692854322373.hashnode.dev/solblaze-staking",
    colorPreset: "ocean" as const,
  },
  {
    title: "Graph's Sunrise Upgrade",
    link: "https://ayush123-1692854322373.hashnode.dev/the-graphs-sunrise-upgrade",
    colorPreset: "sunset" as const,
  },
  {
    title: "Near Dev Guide",
    link: "https://ayush123-1692854322373.hashnode.dev/near-dev-guide?source=more_articles_bottom_blogs",
    colorPreset: "nature" as const,
  },
  {
    title: "Gas Fee Oracle",
    link: "https://ayush123-1692854322373.hashnode.dev/introducing-a-gas-fee-oracle-for-avs-enhancing-security-and-efficiency-for-decentralized-services",
    colorPreset: "aurora" as const,
  },
];

export default function Web3Page() {
  return (
    <div className="min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:py-20 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
          {web3Articles.map((article, index) => (
            <GlowBorderCard
              key={index}
              width="100%"
              aspectRatio="1"
              colorPreset={article.colorPreset}
              animationDuration={4}
              className="bg-black/50 relative"
            >
              <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 h-full">
                {/* Article Title with Square Border and Arrow */}
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 border border-white/10 px-3 py-2 sm:px-4 sm:py-2.5 hover:border-white/20 transition-colors"
                >
                  <div className="text-lg sm:text-xl font-bold text-white">
                    {article.title}
                  </div>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                </Link>
              </div>
            </GlowBorderCard>
          ))}
        </div>
      </div>
    </div>
  );
}

