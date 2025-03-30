export default function Home() {
  return (
    <main className="p-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">SET Engineering Services</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Engineering excellence meets innovative technology. We deliver high-quality industrial solutions.
        </p>
      </section>

      {/* About Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-700">
          SETENG is a modern engineering company providing custom fabrication, project consulting,
          and smart automation solutions for the industrial sector. Our team combines decades of experience
          with a passion for modern, sustainable engineering.
        </p>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Custom Fabrication', desc: 'Precision-engineered components tailored to your needs.' },
            { title: 'Project Management', desc: 'Full-cycle planning and execution for industrial projects.' },
            { title: 'Maintenance & Support', desc: 'Ongoing support for your equipment and systems.' },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Highlighted Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-medium text-lg">Oil Rig Automation</h3>
            <p className="text-gray-700 mt-2">End-to-end automation of offshore oil rigs with integrated control systems.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-medium text-lg">Smart Pipeline Monitoring</h3>
            <p className="text-gray-700 mt-2">AI-powered pipeline monitoring systems to prevent leaks and ensure safety.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Ready to Work With Us?</h2>
        <p className="text-gray-600 mb-6">Get in touch and lets bring your engineering vision to life.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
