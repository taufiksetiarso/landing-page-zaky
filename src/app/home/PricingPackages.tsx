import React from "react";
import PricingCard from "./PricingCard";

const PricingPackages: React.FC = () => {
    return (
        <section className="px-24 py-20">
        <header className="mb-16 text-center">
        <h2 className="mb-4 text-5xl font-bold text-stone-900">
            Pilih Paket Pendirian
    </h2>
    <p className="text-lg font-bold text-neutral-400">
        Choose plan that works best for you, feel free to contact us
    </p>
    </header>
    <div className="flex gap-8 justify-between max-md:flex-col max-md:items-center">
    <PricingCard
        title="Pendirian CV"
    price="Rp. 3.000.000"
    description="Nikmati berbagai keunggulan bisnis dengan badan usaha berbentuk Perseroan Terbatas."
    />
    <PricingCard
        title="Pendirian PT"
    price="Rp. 4.500.000"
    description="Nikmati berbagai keunggulan bisnis dengan badan usaha berbentuk Perseroan Terbatas."
    isHighlighted={true}
    />
    <PricingCard
    title="Pendirian Firma"
    price="Rp. 3.000.000"
    description="Nikmati berbagai keunggulan bisnis dengan badan usaha berbentuk Perseroan Terbatas."
        />
        </div>
        </section>
);
};

export default PricingPackages;
