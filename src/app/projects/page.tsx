
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "E-Commerce Website",
    image: "/p1.png",
    description: "E-Commerce Website using Next.js & Tailwind.",
    url: "https://shop-co-tan-zeta.vercel.app/",
  },
  {
    id: "3",
    title: "Beauty Products Website",
    image: "/p3.png",
    description: "A personal portfolio using Next.js HTML css..",
    url: "https://responsive-html-nu.vercel.app/",
  },
  {
    id: "4",
    title: "Reasum Builder",
    image: "/p4.png",
    description: "Real-time messaging using WebSockets.",
    url: "https://pana-cloud-css-project.vercel.app/",
  },
  {
    id: "5",
    title: "Task Manager",
    image: "/p5.png",
    description: "To-do app with deadline reminders.",
    url: "https://hackathons-mileston-3.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 min-h-screen"
       
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

      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-white">My </span>
        <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-30 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300 flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={400}
              className="w-full h-48 object-cover "
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6">
                  {project.description}
                </p>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-blue-500/50 transition-all duration-300">
                  Click Here
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
