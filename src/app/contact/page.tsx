import { Mail, MapPin, Phone } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-12">
      <section className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold border-b border-gray-700 pb-2">Contact Information</h1>

        {/* Company Name */}
        <div>
          <h2 className="text-xl font-semibold">SET Engineering Services</h2>
        </div>

        {/* Phone Section */}
        <div>
          <div className="flex items-center gap-2 text-lg font-medium mb-2">
            <Phone className="w-5 h-5" />
            <span>Phone Number</span>
          </div>
          <p className="text-gray-300">SanthanaKrishnan T : +91 89394 77604</p>
          <p className="text-gray-300">SanthanaKrishnan T : +91 95000 19324</p>
        </div>

        {/* Email Section */}
        <div>
          <div className="flex items-center gap-2 text-lg font-medium mb-2">
            <Mail className="w-5 h-5" />
            <span>Email Address</span>
          </div>
          <p className="text-gray-300">seteng68@gmail.com</p>
          <p className="text-gray-300">info@seteng.com</p>
          <p className="text-gray-300">sales@seteng.com</p>
          <p className="text-gray-300">support@seteng.com</p>
        </div>

        {/* Location Section */}
        <div>
          <div className="flex items-center gap-2 text-lg font-medium mb-2">
            <MapPin className="w-5 h-5" />
            <span>Location</span>
          </div>
          <p className="text-gray-300 mb-4">
            No 9, Bhavani Nagar, Peramanur, MaraiMalai Nagar, Chennai - 603 209.
          </p>

          {/* Embedded Google Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.690237336078!2d80.00403667515089!3d12.798607718647288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fb003656f8f3%3A0x31da0bed6dd882da!2sSET%20ENGINEERING%20SERVICES!5e0!3m2!1sen!2sin!4v1743347085700!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-center">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=12.79886404425722, 80.00652576519282" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
  >
    Get Directions
  </a>
</div>

        {/* Footer */}
        <div className="border-t border-gray-700 pt-4 text-sm text-gray-500 text-center">
          © SETENGINEERING. All rights reserved | Design by {" "}
  <a
    href="https://www.linkedin.com/in/gokulakrishnan-mj/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    @Gokulakrishnan Murugan
  </a>
        </div>
      </section>
    </main>
  );
}
