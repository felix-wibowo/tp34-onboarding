"use client";

export function Footer() {
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 md:justify-between px-24">
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
        © 2024 Safe Bicycling
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a href="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
            Routes
          </a>
        </li>
        <li>
          <a href="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
            Accident
          </a>
        </li>
        <li>
          <a href="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
            About Us
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

