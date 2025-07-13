import logo from ".././logo.svg";
const Header = () => {
  return (
    <>
      <div className="flex m-2  justify-between px-10 items-center border border-black">
        <img src={logo} className="w-20 h-20" />

        <ul className="flex gap-5">
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Contact Us</button>
          </li>
          <li>
            <button>Cart</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
