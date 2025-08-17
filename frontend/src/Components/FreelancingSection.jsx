export default function FreelancingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Freelancing Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide professional freelancing services in modern web development and Google Chrome extension development.  
          Let’s build something amazing together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Development */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-6">
              Build responsive, modern, and scalable web applications using the latest technologies like React, Node.js, and TailwindCSS.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Hire Me
            </a>
          </div>

          {/* Chrome Extension Development */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Chrome Extension Development</h3>
            <p className="text-gray-600 mb-6">
              Create powerful and user-friendly Chrome extensions that solve problems and boost productivity.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
