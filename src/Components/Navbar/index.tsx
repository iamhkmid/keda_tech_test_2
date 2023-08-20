import React from "react";
import { navmenu } from "../../utils/constants/navmenu";
import MobileNavbar from "../MobileNavbar";
import LoginDialog from "../LoginDialog";

const Navbar = () => {
  const [showBg, setShowBg] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.document.documentElement.scrollTop > 30) setShowBg(true);
      else setShowBg(false);
    });
  }, []);

  const changeState = (hash: string) => {
    window.location.hash = hash;
    document.documentElement.style.scrollBehavior = "smooth";
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 flex w-full content-center justify-between px-4 py-4 transition duration-300 ease-in-out md:px-20 ${
        showBg ? "bg-white shadow-md" : "bg-none"
      }`}
    >
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => changeState("home")}
      >
        <h2 className="w-fit rounded-md bg-blue-800 px-1.5 py-1 text-base font-bold text-white md:text-lg">
          DS
        </h2>
        <h2 className="text-base font-bold text-blue-500 md:text-lg">
          Digital Solutions
        </h2>
      </div>
      <MobileNavbar />
      <div className="hidden gap-10 md:flex">
        <ul className="flex items-center gap-10">
          {navmenu.map((item) => (
            <li
              className="cursor-pointer font-semibold leading-none text-blue-600"
              key={item.id}
              onClick={() => changeState(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <LoginDialog
          triggerElement={<button className="btn-primary py-1.5">Login</button>}
        />
      </div>
    </nav>
  );
};

export default Navbar;
