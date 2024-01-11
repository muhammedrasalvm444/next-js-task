import { useAuth } from "@/context/authContext";
import Link from "next/link";

const NavBar = () => {
  const { logout, token } = useAuth();

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center w-full bg-gradient-to-r from-blue-500 to-blue-700">
      <nav className="container flex items-center justify-between px-4 py-3 mx-auto">
        <Link href="/">
          <span className="text-2xl font-bold tracking-wider text-white transition-colors duration-300 hover:text-white-500">
            Test
          </span>
        </Link>
        <ul className="items-center hidden space-x-4 md:flex">
          {!token ? (
            <li>
              <Link href="/login">
                <span className="px-3 py-2 text-white transition-all duration-300 rounded-md hover:bg-blue-400 hover:text-white">
                  Login
                </span>
              </Link>
            </li>
          ) : (
            <span className="px-3 py-2 text-white transition-all duration-300 rounded-md hover:bg-blue-400 hover:text-white">
              Welcome
            </span>
          )}
        </ul>
        <button className="p-2 text-white bg-blue-600 rounded-md md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>
      {token && (
        <>
          <span
            className="px-3 py-2 text-white transition-all duration-300 rounded-md hover:bg-blue-400 hover:text-white"
            onClick={() => logout()}
          >
            Logout
          </span>
        </>
      )}
    </div>
  );
};

export default NavBar;
