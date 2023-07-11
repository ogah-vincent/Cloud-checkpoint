import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      marginRight: isActive ? "20px" : "8px",
    };
  };

  return (
    <nav className="NavLink">
      <NavLink style={navLinkStyle({ isActive: true })} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle({ isActive: true })} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle({ isActive: true })} to="/contact">
        Contact
      </NavLink>
      <NavLink style={navLinkStyle({ isActive: true })} to="/profile">
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
