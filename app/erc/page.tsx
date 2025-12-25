"use client";

import { GlowBorderCard } from "@/components/ui/glow-border-card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ercStandards = [
  {
    number: "ERC-4626",
    title: "Tokenized Vaults",
    description: "DeFi yield strategies, vault UX standard",
    colorPreset: "aurora" as const,
  },
  {
    number: "ERC-2535",
    title: "Diamond Standard",
    description: "Modular smart contract architecture",
    colorPreset: "ocean" as const,
  },
  {
    number: "ERC-4337",
    title: "Account Abstraction",
    description: "Smart wallets, paymasters, bundlers",
    colorPreset: "sunset" as const,
  },
  {
    number: "ERC-5564",
    title: "Stealth Addresses",
    description: "Private payments and enhanced privacy",
    colorPreset: "nature" as const,
  },
  {
    number: "ERC-3009",
    title: "Gasless Transfers",
    description: "Token transfers without gas fees",
    colorPreset: "aurora" as const,
  },
  {
    number: "ERC-7786",
    title: "Cross-chain Messaging",
    description: "Cross-chain messaging abstraction (emerging)",
    colorPreset: "ocean" as const,
  },
  {
    number: "ERC-8004",
    title: "Pay-per-use Tokens",
    description: "Metered access tokens",
    colorPreset: "sunset" as const,
  },
  {
    number: "ERC-3156",
    title: "Flash Loans",
    description: "Flash loans standard",
    colorPreset: "nature" as const,
  },
];

export default function ERCPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:py-20 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
          {ercStandards.map((erc, index) => (
            <GlowBorderCard
              key={index}
              width="100%"
              aspectRatio="1"
              colorPreset={erc.colorPreset}
              animationDuration={4}
              className="bg-black/50 relative"
            >
              <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 h-full">
                {/* ERC Number with Square Border and Arrow */}
                <div className="relative inline-flex items-center gap-2 border border-white/10 px-3 py-2 sm:px-4 sm:py-2.5 mb-2">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {erc.number}
                  </div>
                  <Link
                    href="/"
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </Link>
                </div>
                <div className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  {erc.title}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {erc.description}
                </div>
              </div>
            </GlowBorderCard>
          ))}
        </div>
      </div>
    </div>
  );
}

