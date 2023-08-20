import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { navmenu } from "../../utils/constants/navmenu";
import LoginDialog from "../LoginDialog";

const MobileNavbar = () => {
  const changeState = (hash: string) => {
    window.location.hash = hash;
    document.documentElement.style.scrollBehavior = "smooth";
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/20 p-0 text-blue-600 transition-all duration-300 ease-in-out hover:bg-blue-600/70 hover:text-white md:hidden">
          <HamburgerMenuIcon className="h-4 w-4" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-50 w-[200px] rounded-md border-[1px] border-blue-200 bg-white p-4 shadow-xl"
          sideOffset={5}
        >
          <ul className="flex flex-col gap-1">
            {navmenu.map((item) => (
              <li
                className="cursor-pointer py-2.5 text-xs font-medium leading-none text-blue-600"
                key={item.id}
                onClick={() => changeState(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <LoginDialog
            triggerElement={
              <button className="btn-primary mt-5 w-full py-1.5">Login</button>
            }
          />
          <Popover.Close
            className="PopoverClose"
            aria-label="Close"
          ></Popover.Close>
          <Popover.Arrow className="fill-blue-200" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default MobileNavbar;
