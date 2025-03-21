import React from "react";

const Header: React.FC = () => {
    return (
        <header className="flex relative z-10 justify-between items-center px-16 py-5 max-sm:p-5">
            <h1 className="text-5xl font-semibold text-emerald-400">LOGO</h1>
            <nav className="flex gap-6 max-sm:hidden">
                <button className="px-4 py-2 text-base rounded-lg cursor-pointer text-stone-900">
                    Beranda
                </button>
                <button className="px-4 py-2 text-base rounded-lg cursor-pointer text-stone-900">
                  <a href='/layanan'>layanan</a>
                </button>
                <button className="px-4 py-2 text-base rounded-lg cursor-pointer text-stone-900">
                    Hubungi Kami
                </button>
                <button className="px-4 py-2 text-base rounded-lg cursor-pointer text-stone-900">
                    Tentang Kami
                </button>
            </nav>
        </header>
    );
};

export default Header;
