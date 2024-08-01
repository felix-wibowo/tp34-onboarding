import Image from "next/image";
import logo from "/public/logo-removebg.png";
import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <Link href="/">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-20 w-auto"
                src={logo}
                width={100}
                height={100}
                alt="Your Company"
              />
            </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                  href="/cycleroutes"
                  className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  aria-current="page"
                >
                  Routes
                </Link>
                <Link
                  href="/incidents"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Incidents
                </Link>
                <Link
                  href="/accidents"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Accidents
                </Link>
                <Link
                  href="/aboutus"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;