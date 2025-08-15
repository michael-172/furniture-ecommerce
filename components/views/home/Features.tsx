import { Banknote, LockKeyhole, Phone, Truck } from "lucide-react";
import React from "react";
import Feature from "./Feature";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "Order above $200",
    icon: "/icons/delivery.svg",
  },
  {
    id: 2,
    title: "Money Back",
    desc: "30 days guarantee",
    icon: "/icons/money.svg",
  },
  {
    id: 3,
    title: "Secure Payments",
    desc: "Secured by Stripe",
    icon: "/icons/lock.svg",
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Phone and Email support",
    icon: "/icons/call.svg",
  },
];
const Features = () => {
  return (
    <div className="w-full min-h-[316px] h-fit py-8 lg:py-12 gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {features.map((feature) => (
        <Feature
          key={feature.id}
          title={feature.title}
          icon={feature.icon}
          desc={feature.desc}
        />
      ))}
    </div>
  );
};

export default Features;
