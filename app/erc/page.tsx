"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Link from "next/link";

const ercStandards = [
  {
    number: "ERC-4626",
    title: "Tokenized vaults",
    description: "DeFi yield strategies, vault UX standard",
    colors: [[0, 255, 255]],
    containerClassName: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    number: "ERC-2535",
    title: "Diamond Standard",
    description: "",
    colors: [[255, 165, 0], [255, 200, 100]],
    containerClassName: "bg-orange-600",
    animationSpeed: 3,
    dotSize: 2,
  },
  {
    number: "ERC-4337",
    title: "Account Abstraction",
    description: "Smart wallets, paymasters, bundlers",
    colors: [[125, 211, 252]],
    containerClassName: "bg-sky-600",
    animationSpeed: 3,
  },
  {
    number: "ERC-5564",
    title: "Stealth addresses",
    description: "Private payments",
    colors: [[0, 255, 255]],
    containerClassName: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    number: "ERC-3009",
    title: "Gasless token transfers",
    description: "",
    colors: [[255, 255, 0], [255, 255, 150]],
    containerClassName: "bg-yellow-500",
    animationSpeed: 3,
    dotSize: 2,
  },
  {
    number: "ERC-7786",
    title: "Cross-chain messaging abstraction",
    description: "Emerging",
    colors: [[125, 211, 252]],
    containerClassName: "bg-sky-600",
    animationSpeed: 3,
  },
  {
    number: "ERC-8004",
    title: "Pay-per-use / Metered Access Tokens",
    description: "",
    colors: [[0, 255, 255]],
    containerClassName: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    number: "ERC-3156",
    title: "Flash loans standard",
    description: "",
    colors: [[255, 165, 0], [255, 200, 100]],
    containerClassName: "bg-orange-600",
    animationSpeed: 3,
    dotSize: 2,
  },
];

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
  link,
}: {
  title: string;
  description?: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  link: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[20rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex items-center gap-2">
            <h2 className="dark:text-white text-xl opacity-100 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
              {title}
            </h2>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white group-hover/canvas-card:text-white opacity-0 group-hover/canvas-card:opacity-100 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-lg">🔗</span>
            </Link>
          </div>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center opacity-100 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white transition duration-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export default function ERCPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:py-20 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
          {ercStandards.map((erc, index) => (
            <Card
              key={index}
              title={erc.number}
              description={erc.description || erc.title}
              icon={<AceternityIcon />}
              link="/"
            >
              <CanvasRevealEffect
                animationSpeed={erc.animationSpeed}
                containerClassName={erc.containerClassName}
                colors={erc.colors}
                dotSize={erc.dotSize}
              />
              {(erc.containerClassName === "bg-black" || erc.containerClassName === "bg-orange-600" || erc.containerClassName === "bg-yellow-500") && (
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
