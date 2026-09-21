import { NavLink } from "react-router";



const Navbar = () => {

  const link = (
    <>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) => `
            ${
              isActive
                ? " border border-success bg-transparent text-success shadow-none "
                : ""
            }  text-lg
              `}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) => `
            ${
              isActive
                ? " border border-success bg-transparent text-success shadow-none "
                : ""
            } text-lg
              `}
          to={"/listed-books"}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) => `
            ${
              isActive
                ? " border border-success bg-transparent text-success shadow-none "
                : ""
            }  text-lg
              `}
          to={"/pages-to-read"}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-2 sm:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
            
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-4"
            >{link}</ul>
          </div>
          <a className="text-2xl md:text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{link}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <a className="btn-sm sm:btn-md btn btn-success">Sign In</a>
          <a className="btn-sm sm:btn-md btn btn-info">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
