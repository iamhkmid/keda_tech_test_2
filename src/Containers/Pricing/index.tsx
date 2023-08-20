import PricingCard from "../../Components/PricingCard";
import { pricing } from "../../utils/constants/pricing";

const Pricing = () => {
  return (
    <div id="pricing" className="mt-5 box-border flex w-full flex-col items-center px-5 py-10 md:px-16 md:py-16">
      <h2 className="text-center md:text-3xl text-xl font-bold text-slate-800">
        Choose ERP package according to your needs
      </h2>
      <div className="mt-12 grid w-full grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-center gap-5 lg:grid-cols-[repeat(auto-fit,_minmax(300px,_300px))]">
        {pricing.map((item) => (
          <PricingCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
