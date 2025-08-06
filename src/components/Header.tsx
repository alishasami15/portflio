


'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#1e3a8a]/90 backdrop-blur-md z-50 shadow"
             style={{
        background: 'linear-gradient(-45deg, #1b1f27ff, #14203bff, #11053fff)',
        backgroundSize: '600% 600%',
        animation: 'gradientFlow 5s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 50% 0%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 50% 100%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-wave {
            display: inline-block;
            animation: wave 0.6s ease-in-out infinite;
          }

          .text-glow {
            color: #ffffff;
            text-shadow:
              0 0 6px #111827,
              0 0 10px #05205a,
              0 0 14px #04308dff;
          }
        `}
      </style>
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 max-w-6xl mx-auto gap-2 md:gap-0">
        
        {/* Title */}
       <h1 className="hidden md:block text-4xl bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent animate-fade-in ">
  Portflio
</h1>


        {/* Always visible nav links */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-white text-sm sm:text-base">
          <Link href="/" className="text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-300">About</Link>
          <Link href="/skills" className="hover:text-blue-300">Skills</Link>
          <Link href="/projects" className="hover:text-blue-300">Projects</Link>
          <Link href="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
