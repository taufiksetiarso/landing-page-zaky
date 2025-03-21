import React from "react";

const CtaBanner: React.FC = () => {
    return (
        <section className="px-28 py-20 text-left max-sm:px-5 max-sm:py-10">
            <h2 className="mb-10 text-3xl font-bold max-w-[900px] text-stone-900">
                Konsultasikan kebutuhan hukum Anda dengan kami! Solusi cepat dan
                terpercaya untuk segala urusan legalitas.
            </h2>
            <button className="px-10 py-6 text-2xl font-extrabold text-white bg-teal-400 rounded-3xl cursor-pointer">
                Jadwalkan Konsultasi Online
            </button>
        </section>
    );
};

export default CtaBanner;
