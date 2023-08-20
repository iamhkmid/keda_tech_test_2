import { ReactComponent as Background } from "../../assets/footer-bg.svg";
import {
  PaperPlaneIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative mt-5 box-border flex w-full flex-col items-center overflow-hidden pb-10"
    >
      <div className="absolute left-0 top-0 w-[800px] md:w-full">
        <Background />
      </div>
      <div className="relative z-10 flex flex-col px-5 pt-24 md:w-[700px]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <PaperPlaneIcon className="text-white" />
            <h2 className="text-lg font-bold text-white md:text-xl">
              Contact Our Great Team
            </h2>
          </div>
          <p className="text-xs font-normal text-white/75 md:text-sm">
            Our dedicated experts are ready to discover the ideal inventory
            management solutions for your business. Get in touch with our
            exceptional team today!
          </p>
        </div>
        <div className="mt-5 flex">
          <input
            className="h-9 w-full rounded-l-md border-none px-4 text-xs text-slate-700 outline-none placeholder:text-slate-400 md:h-11 md:w-[400px] md:text-sm"
            placeholder="Fill in your message"
          />
          <button className="btn-primary h-9 rounded-l-none rounded-r-md border-none bg-rose-500 px-5 hover:bg-rose-700 sm:px-7 md:h-11 md:px-8">
            Send
          </button>
        </div>
        <Separator.Root className="mt-10 h-[1px] w-full bg-white/30" />
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MobileIcon className="text-white/75" />
            <p className="text-[10px] font-normal text-white/75 md:text-[11px]">
              +62 8** **** ****
            </p>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeClosedIcon className="text-white/75" />
            <p className="text-[10px] font-normal text-white/75 md:text-[11px]">
              team@digitalsolutions.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <HomeIcon className="text-white/75" />
            <p className="text-[10px] font-normal text-white/75 md:text-[11px]">
              Jl. Tidak ada No.22, Bantul, Yogyakarta
            </p>
          </div>
        </div>
        <Separator.Root className="mt-10 h-[1px] w-full bg-white/30" />
        <div className="mt-5 flex flex-col justify-between sm:flex-row gap-3">
          <p className="text-[10px] font-medium text-white md:text-[11px]">
            © 2023 PT. Digital Solutions
          </p>
          <div className="flex gap-4">
            <p className="text-[10px] font-normal text-white/75 md:text-[11px]">
              Term & Conditions
            </p>
            <p className="text-[10px] font-normal text-white/75 md:text-[11px]">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
