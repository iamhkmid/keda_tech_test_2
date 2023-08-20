import { ReactComponent as Ornament1 } from "../../assets/ornament1.svg";
import { ReactComponent as Ornament2 } from "../../assets/ornament2.svg";
import { ReactComponent as Illustration } from "../../assets/undraw_data_re_80ws.svg";

const Home = () => {
  return (
    <div id="home" className="relative box-border flex h-screen w-full">
      <div className="absolute left-0 top-0 w-3/4 md:w-1/3">
        <Ornament1 />
      </div>
      <div className="absolute bottom-0 right-0 w-3/4 md:w-2/5">
        <Ornament2 />
      </div>
      <div className="md: relative z-10 flex flex-col-reverse justify-center gap-8 md:flex-row md:justify-normal md:gap-0">
        <div className="flex flex-col items-center justify-center px-5 md:h-full md:w-1/2 md:min-w-[500px] md:items-start md:px-16">
          <h2></h2>
          <p className="text-center text-xl font-bold leading-tight text-blue-600 md:text-left md:text-4xl">
            Revolutionize Your Operations
          </p>
          <p className="text-center text-sm font-semibold leading-tight text-blue-500 md:text-left md:text-xl">Simplify Operations, Maximize Profits</p>
          <p className="pt-4 text-center text-xs font-normal text-slate-600 md:text-left md:text-base">
            Efficient business management is the cornerstone of success. At
            Digital Solutions, we offer a game-changing Enterprise Resource
            Planning (ERP) solution. Streamline your daily operations by
            effortlessly tracking inventory and recording profits. Experience
            the Digital Solutions advantage today.
          </p>
          <button className="btn-primary mt-5">Learn more</button>
        </div>
        <div className="box-border flex w-full justify-center px-7 md:w-1/2 md:px-16">
          <div className="flex md:w-[90%]">
            <Illustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
