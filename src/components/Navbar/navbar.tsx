'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-blue-700">
          SET Engineering
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/products" className="hover:text-blue-600 transition">Products</Link></li>
          <li><Link href="/services" className="hover:text-blue-600 transition">Services</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition">About us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
