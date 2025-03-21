import React from "react";

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
                                                     title,
                                                     price,
                                                     description,
                                                     isHighlighted = false,
                                                 }) => {
    return (
        <article className="p-10 bg-white rounded-3xl shadow-[0px_4px_9px_rgba(0,0,0,0.05)] w-[374px] max-md:w-full max-md:max-w-[374px]">
            <h3 className="mb-5 text-3xl font-semibold text-center">{title}</h3>
            <p
                className={`text-lg text-center ${isHighlighted ? "text-white" : "text-black text-opacity-60"}`}
            >
                Mulai Dari
            </p>
            <p className="mx-0 mt-5 mb-10 text-5xl font-semibold text-center">
                {price}
            </p>
            <p className="mb-10 text-lg leading-8 text-center">{description}</p>
            {isHighlighted ? (
                <button className="p-5 w-full text-lg font-semibold text-center text-white bg-teal-400 rounded-3xl cursor-pointer">
                    Pesan Sekarang
                </button>
            ) : (
                <button className="text-lg font-semibold text-center text-teal-400 cursor-pointer w-full">
                    Pesan Sekarang
                </button>
            )}
        </article>
    );
};

export default PricingCard;
