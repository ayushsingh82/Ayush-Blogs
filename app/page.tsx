"use client";

import { useState } from "react";
import { Mail, Send, MapPin, Github, Linkedin, Twitter, Plus, Minus, Globe } from "lucide-react";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <BackgroundLines 
      className="flex items-center justify-center w-full flex-col px-4 pt-4 sm:pt-6 min-h-screen"
      svgOptions={{ duration: 5 }}
    >
      <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-2xl px-4 mb-6 relative z-20">
        Learn from my blogs, tutorials, and experiments at the intersection of Web3, AI, and emerging ERC standards.
      </p>

      {/* Sidebar/Profile Section */}
      <aside className="w-full max-w-md border border-white/10 rounded-lg bg-black/50 backdrop-blur-sm p-6">
        <div className="sidebar-info">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="avatar-box">
              <Image
                src="https://avatars.githubusercontent.com/u/121667116?v=4"
                alt="Ayush Singh"
                width={80}
                height={80}
                className="rounded-full border-2 border-white/20"
              />
            </div>
            <div className="info-content text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white mb-1">Ayush Singh</h2>
              <p className="text-gray-400">Blockchain Developer</p>
            </div>
          </div>

          <button
            onClick={() => setShowContacts(!showContacts)}
            className="w-full flex items-center justify-between p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-white mb-4"
          >
            <span>{showContacts ? "Hide Contacts" : "Show Contacts"}</span>
            {showContacts ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>

        {showContacts && (
          <div className="sidebar-info_more">
            <div className="separator h-px bg-white/10 my-4"></div>

            <ul className="contacts-list space-y-4">
              <li className="contact-item flex items-start gap-3">
                <div className="icon-box p-2 border border-white/10 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="contact-info flex-1">
                  <p className="contact-title text-xs text-gray-400 mb-1">Email</p>
                  <a href="mailto:ayushsinghmi713@gmail.com" className="contact-link text-white hover:text-gray-300 text-sm">
                    ayushsinghmi713@gmail.com
                  </a>
                </div>
              </li>

              <li className="contact-item flex items-start gap-3">
                <div className="icon-box p-2 border border-white/10 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div className="contact-info flex-1">
                  <p className="contact-title text-xs text-gray-400 mb-1">Telegram</p>
                  <a href="https://t.me/Insane_45678" target="_blank" rel="noopener noreferrer" className="contact-link text-white hover:text-gray-300 text-sm">
                    Insane_45678
                  </a>
                </div>
              </li>

              <li className="contact-item flex items-start gap-3">
                <div className="icon-box p-2 border border-white/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="contact-info flex-1">
                  <p className="contact-title text-xs text-gray-400 mb-1">Location</p>
                  <address className="text-white text-sm not-italic">Business Bay Dubai</address>
                </div>
              </li>
            </ul>

            <div className="separator h-px bg-white/10 my-4"></div>

            <ul className="social-list flex items-center justify-center gap-4">
              <li className="social-item">
                <a href="https://github.com/ayushsingh82" target="_blank" rel="noopener noreferrer" className="social-link p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://www.linkedin.com/in/ayush-singh-02b978248" target="_blank" rel="noopener noreferrer" className="social-link p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://x.com/eth_ay32" target="_blank" rel="noopener noreferrer" className="social-link p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://0xayush.vercel.app" target="_blank" rel="noopener noreferrer" className="social-link p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  <Globe className="w-5 h-5 text-white" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </aside>
    </BackgroundLines>
  );
}

