import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import React from "react";
import Countdown from "react-countdown";

const ProductOfferTime = () => {
  const locale = useLocale();
  const CountClass = `flex justify-center items-center [background:var(--neutral-02100,#F3F5F7)] w-[60px] h-[60px] pl-2.5 pr-[9px] py-[11px]`;
  const TimeClass = `text-[color:var(--neutral-07100,#141718)] text-center text-[34px] font-medium leading-[38px] tracking-[-0.6px]`;
  const LabelClass = cn(
    "self-stretch text-[color:var(--neutral-04100,#6C7275)] text-center text-xs font-normal leading-5",
    {
      "font-inter": locale === "en",
      "font-cairo": locale === "ar",
    }
  );
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    return (
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <div className={CountClass}>
            <span className={TimeClass}>{days}</span>
          </div>
          <span className={LabelClass}>Days</span>
        </div>
        <div className="flex flex-col">
          <span className={CountClass}>
            <span className={TimeClass}>{hours}</span>
          </span>
          <span className={LabelClass}>Hours</span>
        </div>
        <div className="flex flex-col">
          <span className={CountClass}>
            <span className={TimeClass}>{minutes}</span>
          </span>
          <span className={LabelClass}>Minutes</span>
        </div>
        <div className="flex flex-col">
          <span className={CountClass}>
            <span className={TimeClass}>{seconds}</span>
          </span>
          <span className={LabelClass}>Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3 py-6 border-b-[color:var(--neutral-03100,#E8ECEF)] border-b border-t border-t-[color:var(--neutral-03100,#E8ECEF)]">
      <p
        className={cn(
          "w-[360px] text-[color:var(--neutral-05100,#343839)] text-base font-normal leading-[26px]",
          {
            "font-inter": locale === "en",
            "font-cairo": locale === "ar",
          }
        )}
      >
        Offer expires in:
      </p>
      <Countdown date={"2025-12-31T23:59:59"} renderer={renderer} />
    </div>
  );
};

export default ProductOfferTime;
