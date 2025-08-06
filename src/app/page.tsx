
'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import AboutPage from './about/page';
import SkillsPage from './skills/page';
import ProjectsPage from './projects/page';
import ContactPage from './contact/page';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>("a[href^='#']");
     const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
   <main className="min-h-screen  text-white pt-20 sm:pt-20 md:pt-32 lg:pt-40"
   
   
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



         <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8 md:gap-10">
        {/* <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mx-auto">
        </h2> */}
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
  
            <div>
              <span className="bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent animate-fade-in">
                Hello,
              </span>{' '}
              <span className="bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent animate-fade-in delay-200">
                Im
              </span>{' '}
              <span className="bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent animate-fade-in delay-400">
                Alisha
              </span>{' '}
              <span className="bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent animate-fade-in delay-400">
                Sami
              </span>
            </div>

            {/* Animated Web Developer */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue mx-auto md:mx-0 typing-loop">
              {'Web Developer'.split('').map((char, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h2>
   
          </div>

          <p className="text-sm md:text-base text-gray-300 animate-fade-in delay-800 max-w-xl mx-auto md:mx-0">
            I’m a dedicated Web Developer specializing in building fast, responsive, and modern websites. I turn ideas into reality using clean code and creative design.
          </p>

          {/* <a
            href="#projects"
            className="inline-block mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded text-white font-medium transition animate-fade-in delay-1000"
          >
            View My Work
          </a> */}
        <Link
         href="https://ss-outfit-collection.vercel.app/"
         className="inline-block mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded text-white font-medium transition animate-fade-in delay-1000"
          >
         View My Work
        </Link>
        </div>

        {/* Right: Profile Image */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto mt-6 md:mt-0">
          <div className="absolute -inset-4 rounded-full bg-blue-500 blur-2xl opacity-60 z-0"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden z-10 shadow-2xl ">
            <Image
              src="/doll.jpeg"
              alt="portfolio"
              fill
              className="rounded-full object-cover object-center"
            />
          </div>
        </div>
        </section>
        <AboutPage/>
        <SkillsPage/>
        <ProjectsPage/>
        <ContactPage/>
        
    </main>
   
  );
}


