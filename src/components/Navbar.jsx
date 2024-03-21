import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[70px] items-center">
      <div>
        <NavLink to="/">
          <h1 className="text-2xl font-extrabold text-purple-950 pl-[30px]">
            BUS<span className="font-light">NES</span>
          </h1>
        </NavLink>
      </div>
      <div className="px-1">
        <NavLink className="p-3  hover:bg-purple-300  hover :rounde" to="/">
          Home
        </NavLink>
        <NavLink
          className="p-3  hover:bg-purple-300 hover :rounde"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className="p-3  hover:bg-purple-300 hover :rounde"
          to="/pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className="p-3  hover:bg-purple-300 hover :rounde"
          to="/review"
        >
          Review
        </NavLink>
        <NavLink
          className="p-3  hover:bg-purple-300 hover :rounde"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="pr-[30px]">
        <CgProfile className="text-purple-950 text-2xl " />
      </div>
    </div>
  );
};
export default Navbar;
