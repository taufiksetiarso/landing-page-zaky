import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="flex relative px-32 py-10 mt-10 max-md:flex-col max-md:p-10">
            <div className="max-w-[757px]">
                <h2 className="mb-10 text-7xl font-bold leading-[90px] text-stone-900 max-sm:text-4xl max-sm:leading-[50px]">
                    Semua Kebutuhan Jasa Legalitas Untuk Bisnis Anda
                </h2>
                <div>
                    <svg
                        width="684"
                        height="25"
                        viewBox="0 0 684 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="underline-svg"
                        style={{ width: "676px", height: "17px", marginBottom: "40px" }}
                    >
                        <path
                            d="M4 21C102.268 8.1714 375.043 -9.78864 680 21"
                            stroke="#2CBCC4"
                            strokeWidth="8"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </div>
                <p className="mb-10 text-lg leading-8 text-black max-w-[461px]">
                    Let's make your work more organize and easily using the Taskio
                    Dashboard with many of the latest featuresin managing work every day.
                </p>
                <div className="flex gap-10 items-center max-sm:flex-col max-sm:gap-5">
                    <button className="px-8 py-5 text-lg text-white bg-teal-400 cursor-pointer rounded-[40px]">
                        Pilih Layanan
                    </button>
                    <button className="flex gap-3.5 items-center cursor-pointer">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="whatsapp-icon"
                        >
                            <path
                                d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z"
                                fill="#25D366"
                            ></path>
                        </svg>
                        <span className="text-lg text-stone-900">Tanya Kami</span>
                    </button>
                </div>
            </div>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ba6e91101e63e56d705d573795324fd5e1c30bb"
                className="absolute top-0 right-0 h-[608px] w-[987px] max-md:relative max-md:mt-10 max-md:w-full max-md:h-auto"
                alt="Business professional"
            />
        </section>
    );
};

export default HeroSection;
