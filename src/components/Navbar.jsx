import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ];

  useEffect(() => {
    setActive(location.pathname.replace(/\/+$/, "") || "/");
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 w-full px-6 py-4 flex justify-center items-center bg-transparent backdrop-blur-md backdrop-saturate-150">
      <div className="flex space-x-3 px-3 py-2 rounded-2xl bg-white/10 backdrop-blur-md shadow-md">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 transform
              ${
                active === item.path
                  ? "bg-[#D5CEA3] text-[#1A120B] scale-[0.97] font-semibold"
                  : "text-white hover:bg-white/10 hover:text-white hover:scale-[0.97]"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
