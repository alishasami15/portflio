export default function ContactPage() {
  return (
    <section className="bg-[#0f172a] text-white min-h-screen py-16 px-6"
         
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

      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-10">
          Contact <span className="text-white">Us</span>
        </h2>

        <p className="text-center text-gray-300 mb-8">
          We love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        <form className="bg-gray-800 p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-300">Message</label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-3 rounded-md shadow hover:shadow-blue-500/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
