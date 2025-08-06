import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#0f172a] text-white py-25 px-16 "
         
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

      
      <h2 className="text-4xl font-bold mb-2 text-center ">
  <span className="text-white">About </span>
  <span className="text-blue-400">Me</span>
</h2>


      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-30">
        {/* Left: Image */}
    <div className="relative w-64 h-64">
  {/* Blue blur background */}
  <div className="absolute -inset-4 rounded-full bg-blue-500 blur-2xl opacity-60 z-0"></div>

  {/* Profile Image */}
  <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg  z-10">
    <Image
      src="/l2.jpg"
      alt="portfolio"
      fill
      className="object-cover rounded-full"
    />
  </div>
</div>


        {/* Right: About Content */}
        <div className="bg-gray-800 text-white rounded-xl p-8  shadow-lg md:w-2/4 ">
          <p className="text-lg mb-4">
            Hi, I’m{" "}
            <span className="text-blue-600 font-semibold">Alisha Sami</span> — a web
            developer passionate about turning ideas into clean, interactive,
            and scalable web experiences.
          </p>
          <p className="text-lg mb-4">
            I specialize in{" "}
            <span className="text-blue-600 font-semibold">
              HTML, Next.js, and Tailwind CSS
            </span>
            . My focus is building high-performance frontends that look great
            and feel smooth on every device.
          </p>
          <p className="text-lg mb-4">
            I'm a passionate web developer who loves turning ideas into
            beautiful, responsive websites. With a strong grip on technologies
            like 
            <span className="text-blue-600 font-semibold"> HTML, CSS, JavaScript, React js, Next.js, and Tailwind CSS </span> I
            enjoy building user-friendly digital experiences.
          </p>
          {/* New paragraph added below */}
          <p className="text-lg">
            My goal is to keep learning, experimenting, and delivering projects
            that truly help people and solve real problems. I believe in
            writing clean, readable code and always striving for better user
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}



