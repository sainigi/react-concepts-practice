import logo from ".././logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex m-2  justify-between px-10 items-center border border-black">
        <img src={logo} className="w-20 h-20" />

        <ul className="flex gap-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/service"}>Services</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
