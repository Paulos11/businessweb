import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 Paul Lakandri</p>
          </div>
          <div className="text-center md:text-right">
            <NavLink to="/services" className="hover:text-gray-300 mr-4">
              Services
            </NavLink>
            <NavLink to="/pricing" className="hover:text-gray-300 mr-4">
              Pricing
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-300 mr-4">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
