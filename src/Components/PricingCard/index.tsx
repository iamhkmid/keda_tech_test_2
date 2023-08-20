import React from "react";
import { Unarray } from "../../types/global.type";
import { pricing } from "../../utils/constants/pricing";
import * as Separator from "@radix-ui/react-separator";
import { CheckIcon } from "@radix-ui/react-icons";

type PricingCardProps = {
  data: Unarray<typeof pricing>;
};

const PricingCard: React.FC<PricingCardProps> = ({ data }) => {
  const colors = {
    discount:
      data.color === "rose"
        ? "text-rose-600 bg-rose-100"
        : "text-blue-600 bg-blue-100",
    button:
      data.color === "rose"
        ? "text-white bg-rose-500 hover:bg-rose-700"
        : "text-white bg-blue-500 hover:bg-blue-700",
  };
  return (
    <div className="relative box-border flex flex-col rounded-md border border-slate-300 p-5 shadow-slate-900 transition-all hover:-translate-y-2 hover:shadow-xl">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-lg font-bold text-slate-800">
          {data.title}
        </h2>
        <p className="mt-1 text-center text-xs font-normal text-slate-800">
          {data.description}
        </p>
        <div className="mt-5 flex items-center justify-center gap-1">
          <p className="text-center text-xs font-normal text-slate-700 line-through">
            {`${data.currency} ${data.price.toLocaleString("id")}`}
          </p>
          <p
            className={`rounded-xl px-2 py-1 text-center text-xs font-semibold ${colors.discount}`}
          >
            {`${data.discount * 100}% Discount`}
          </p>
        </div>
        <div className="mt-5 flex items-end justify-center">
          <p className="text-center text-xs font-medium text-slate-700">
            {data.currency}
          </p>
          <p className="text-center text-3xl font-semibold leading-none text-slate-700">
            {(data.price - data.price * data.discount).toLocaleString("id")}
          </p>
          <p className="text-center text-xs font-medium text-slate-700">
            /month
          </p>
        </div>
        <button className={`btn-primary mt-5 ${colors.button}`}>
          Select Package
        </button>
      </div>
      <Separator.Root className="mt-5 h-[2px] w-full bg-slate-300" />
      <div className="mt-5 flex flex-col">
        <h2 className="text-base font-bold text-slate-800">Key Features:</h2>
        <div className="mt-3 flex flex-col gap-1">
          {data.features.map((feature) => (
            <div key={feature} className="flex">
              <CheckIcon className="mr-1 h-5 w-5 text-green-600" />
              <p className="text-xs font-medium text-slate-800">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
