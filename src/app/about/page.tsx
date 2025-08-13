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
            👋 Welcome to my  profile! {" "}
            <span className="text-blue-600 font-semibold">  I m Alisha sami,</span>  I m a Professional Website Design & Frontend Developer with
            <span className="text-blue-600 font-semibold">  5+ years of experience 
            </span>  helping startups and businesses build modern, responsive, and lightning-fast websites.
          </p>
          <p className="text-lg mb-4">
          I offer website customization,
            <span className="text-blue-600 font-semibold"> Frontend development, E-Commerce stores, Landing pages </span>  and complete website designs all tailored to your needs.
          </p>
          {/* New paragraph added below */}
          <p className="text-lg">
            Get a clean, user-friendly, and high-performing website that converts visitors into customers. </p>
            <p>
              <span className="text-blue-600 font-semibold"> 💬 Message me today  place your order to get started. </span>
            </p>
            
         
        </div>
      </div>
    </section>
  );
}



