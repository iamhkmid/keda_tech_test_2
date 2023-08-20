import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";

type LoginDialogProps = {
  triggerElement: React.ReactElement;
};

const LoginDialog: React.FC<LoginDialogProps> = (props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{props.triggerElement}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="animate-overlayShow fixed inset-0 z-50 bg-black/75" />
        <Dialog.Content className="animate-contentShow fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%] px-2 md:w-[500px]">
          <div className="rounded-md bg-white px-7 py-9 shadow-xl md:px-10 md:py-12">
            <Dialog.Close className="absolute right-[20px] top-[20px]" asChild>
              <button
                className="rounded-md p-1 text-slate-700 hover:bg-rose-600/20 hover:text-rose-600"
                aria-label="Close"
              >
                <Cross1Icon className="h-4 w-4" />
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-3xl font-bold text-blue-600">
              Login
            </Dialog.Title>
            <fieldset className="mt-8 flex flex-col gap-1">
              <label className="text-xs text-slate-600 md:text-sm">
                Username
              </label>
              <input
                className="w-full rounded-md border-[1px] border-slate-300 px-3 py-2 text-sm font-normal text-slate-700 outline-none placeholder:text-xs placeholder:font-normal focus:border-blue-600 md:text-base md:placeholder:text-sm"
                placeholder="Type your email here"
              />
            </fieldset>
            <fieldset className="mt-5 flex flex-col gap-1">
              <label className="text-xs text-slate-600 md:text-sm">
                Password
              </label>
              <input
                className="w-full rounded-md border-[1px] border-slate-300 px-3 py-2 text-sm font-normal text-slate-700 outline-none placeholder:text-xs placeholder:font-normal focus:border-blue-600 md:text-base md:placeholder:text-sm"
                placeholder="Type your password here"
                type="password"
              />
            </fieldset>
            <button className="btn-primary mt-7">Login</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginDialog;
