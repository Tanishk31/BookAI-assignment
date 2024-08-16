import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

const Pricing = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative top-4 left-4 p-2  text-sm sm:p-3 lg:p-4 rounded-full sm:text-base lg:text-l transition duration-300 ${isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                    >
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <div className="mt-20 px-4 sm:px-8 lg:px-16">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    API
                    <span className="bg-gradient-to-r from-indigo-700 to-sky-600 text-transparent bg-clip-text"> Pricing</span>
                </h2>
                <p className={`text-center text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto ${isDarkMode ? "text-neutral-400" : "text-gray-600"}`}>
                    Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
                </p>

                <div className="flex justify-center my-8">
                    <div className="w-full">
                        <Slider {...settings} className={isDarkMode ? "dark-slider" : "light-slider"}>
                            {pricingOptions.map((option, index) => (
                                <div key={index} className="p-4">
                                    <div className={`p-6 sm:p-8 border rounded-xl shadow-2xl h-full flex flex-col justify-between hover:scale-105 duration-300 ${isDarkMode ? "bg-slate-800 border-neutral-700 text-white hover:border-slate-200" : "bg-gray-100 border-gray-300 text-gray-900 hover:border-gray-400"}`}>
                                        <div className={`border-b pb-4 ${isDarkMode ? "border-stone-100" : "border-gray-300"}`}>
                                            <p className="text-2xl sm:text-3xl lg:text-4xl mb-7">
                                                {option.title}
                                                {option.price === "$0.03" && (
                                                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-lg ml-2">
                                                        (Most Popular)
                                                    </span>
                                                )}
                                            </p>
                                            <p className="mb-8">
                                                <span className="text-2xl sm:text-3xl lg:text-4xl mt-6">{option.price}</span>
                                                <span>/per token</span>
                                            </p>
                                        </div>
                                        <ul>
                                            {option.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="mt-4">
                                                    <div className="flex items-center">
                                                        <CheckCircle2 />
                                                        <p className="ml-2">based on model</p>
                                                    </div>
                                                    <span className="ml-3 bg-gradient-to-r from-blue-500 to-red-400 text-transparent bg-clip-text text-lg sm:text-xl lg:text-2xl ml-5">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href="#"
                                            className={`inline-flex justify-center items-center text-center w-full h-10 sm:h-12 p-3 sm:p-5 mt-10 sm:mt-20 tracking-tight text-sm sm:text-lg lg:text-xl border border-transparent rounded-full transition duration-200 ${isDarkMode ? "text-black bg-[#93c5fd] hover:bg-[#3b82f6]" : "text-white bg-blue-600 hover:bg-blue-700"}`}
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-8 mx-4 sm:mx-8 my-8">
                    <div className={`flex-grow flex flex-col p-6 sm:p-8 border rounded-xl shadow-2xl ${isDarkMode ? "bg-slate-800 border-neutral-700 text-blue-300" : "bg-gray-100 border-gray-300 text-gray-800"}`}>
                        <h3 className="text-lg sm:text-2xl lg:text-4xl text-center my-4 sm:my-8 tracking-wide">
                            Token Estimation
                        </h3>
                        <p className={`text-center text-sm sm:text-lg lg:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto ${isDarkMode ? "text-slate-100" : "text-gray-700"}`}>
                            On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
                        </p>
                    </div>

                    <div className={`flex-grow flex flex-col p-6 sm:p-8 border rounded-xl shadow-2xl ${isDarkMode ? "bg-slate-800 border-neutral-700 text-blue-300" : "bg-gray-100 border-gray-300 text-gray-800"}`}>
                        <h3 className="text-lg sm:text-2xl lg:text-4xl text-center my-4 sm:my-8 tracking-wide">
                            Billing
                        </h3>
                        <p className={`text-center text-sm sm:text-lg lg:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto ${isDarkMode ? "text-slate-100" : "text-gray-700"}`}>
                            You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
