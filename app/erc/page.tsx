"use client";

import { StackedText } from "@/components/ui/stacked-text";

const ercStandards = [
  "ERC-4626 – Tokenized vaults (DeFi yield strategies, vault UX standard)",
  "ERC-2535 (Diamond Standard)",
  "ERC-4337 – Account Abstraction (smart wallets, paymasters, bundlers)",
  "ERC-5564 – Stealth addresses (private payments)",
  "ERC-3009 – Gasless token transfers",
  "ERC-7786 – Cross-chain messaging abstraction (emerging)",
  "ERC-8004 — Pay-per-use / Metered Access Tokens",
  "ERC-3156 – Flash loans standard",
];

export default function ERCPage() {
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square border border-white/20 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden"
            >
              <StackedText
                items={ercStandards}
                duration={16}
                stagger={index * 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

