"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
  {
    name: "HTML",
    img: "/html logo.png",
    level: "Expert",
    percent: 95,
  },
  {
    name: "CSS",
    img: "/css logo.png",
    level: "Expert",
    percent: 90,
  },
  {
    name: "Tailwind css",
    img: "/ts css.webp",
    level: "Advanced",
    percent: 95,
  },
    {
    name: "Custom css",
    img: "/custom.svg",
    level: "Expert",
    percent: 90,
  },
    {
    name: "Javascript",
    img: "/js logo.png",
    level: "Expert",
    percent: 85,
  },
    {
    name: "Typescript",
    img: "/ts logo.png",
    level: "Intermediate",
    percent: 80,
  },
    {
    name: "Next js",
    img: "/next js.png",
    level: "Expert",
    percent: 95,
  },
    {
    name: "Node js",
    img: "/node js.png",
    level: "Expert",
    percent: 90,
  },
    {
    name: "React js",
    img: "/react js.png",
    level: "Intermediate",
    percent: 80,
  },
    {
    name: "Figma",
    img: "/figma.png",
    level: "Expert",
    percent: 95,
  },
    {
    name: "UIUX",
    img: "/uiux logo.png",
    level: "Expert",
    percent: 90,
  },
    {
    name: "Responsive web Design",
    img: "/responsive.avif",
    level: "Advanced",
    percent: 95,
  },
      {
    name: "Full Stack Developer",
    img: "/full stack.avif",
    level: "Expert",
    percent: 90,
  },
];

export default function SkillsPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % skillsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] px-4 py-10 overflow-x-hidden"
       
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


      {/* 🔽 LEVEL SECTION */}
      <div className="mt-20 max-w-3xl mx-auto">
           <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-white"> 📊 Skills </span>
        <span className="text-blue-400">Level</span>
      </h2>
        <div className="grid grid-cols-1 gap-6">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-4 shadow-md flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={skill.img}
                  alt="Skill Icon"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-white font-medium">
                      {skill.level} ({skill.percent}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* 🔼 SLIDER */}
       
         <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 mt-20">
              <h2 className="text-3xl font-bold text-white">🎯 Technical Skills</h2>
            <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-2 text-4xl font-bold "
           >
            &lt;
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={skillsData[index].name}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6  w-full"
            >
              {/* Two Skill Images */}
              <div className=" bg-blue-100 rounded-2xl shadow-lg p-6 flex items-center justify-center">
                <div className="flex gap-4">
                  <Image
                    src={skillsData[index].img}
                    alt="Skill 1"
                    width={280}
                    height={280}
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Skill Name */}
              <div className="bg-blue-100 rounded-2xl shadow-lg p-4 flex-1 text-center sm:text-left">
                <p className="text-3xl font-bold text-gray-800">
                  {skillsData[index].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="w-12 h-2 text-4xl font-bold "
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
   
  );
}
