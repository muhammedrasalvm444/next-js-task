import { useAuth } from "@/context/authContext";
import Link from "next/link";

const NavBar = () => {
  const { logout, token } = useAuth();

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center w-full shadow-xl bg-gradient-to-r from-blue-500 to-blue-300">
      <nav className="container flex items-center justify-between px-4 py-3 mx-auto">
        <Link href="/">
          <span className="text-2xl font-bold tracking-wider text-white transition-colors duration-300 hover:text-white-500">
            Test
          </span>
        </Link>
        <ul className="items-center space-x-4 md:flex">
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
              Welcome Admin
            </span>
          )}
        </ul>
      </nav>
      {token && (
        <>
          <span
            onClick={() => logout()}
            className="px-3 py-2 text-white transition-all duration-300 rounded-md hover:bg-blue-400 hover:text-white"
          >
            Logout
          </span>
        </>
      )}
    </div>
  );
};

export default NavBar;
