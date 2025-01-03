import { Link } from "react-router-dom";

const NAV_ITEMS = [
  {
    name: "Business",
    link: "/admin-dashboard",
  },
  {
    name: "Users",
    link: null,
  },
  {
    name: "Terms & Condition",
    link: null,
  },
  {
    name: "Pricing",
    link: null,
  },
  {
    name: "Profile",
    link: "/profile",
  },
];

const Navbar = () => {
  return (
    <header className="bg-blue-800 text-white flex justify-between items-center px-6 py-3 sticky top-0">
      <div className="text-lg font-bold">
        <Link to={"/dashboard"}>LOGO</Link>
      </div>
      <nav className="flex space-x-6">
        {NAV_ITEMS.map(({ name, link }, index) => (
          <Link to={link} className="hover:underline">
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
