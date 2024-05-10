import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
function DashTop() {
    return (
       
            <div className="flex justify-center gap-4">
                {/* First box */}
                <div className="w-full shadow-md h-36 border border-[#00B7E9] bg-[#D4F3FB] rounded-xl cursor-pointer delay-300 flex justify-between p-3 hover:shadow-lg transition-all ease-in-out duration-300">
                    <div className="flex flex-col justify-between p-3">
                        <div className="text-white bg-[#00B7E9] w-10 text-2xl h-10 rounded-full shadow-xl flex justify-center items-center">
                            <MdShoppingCart />
                        </div>
                        <p className="text-sm mt-auto font-semibold">Total Spend</p>
                    </div>
                    <div className="flex flex-col justify-between p-3">
                        <h2 className="text-2xl text-black font-bold">$11.67M</h2>
                        <div className="flex items-center">
                            <p className="text-[#069669] italic">+33.45%</p>
                            <div className="bg-white w-7 h-7 flex justify-center items-center rounded-full">
                                <GoArrowUpRight className="text-[#069669]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second box */}
                <div className="w-full shadow-md h-36 border border-[#3EC99E] bg-[#DEF6EE] rounded-xl cursor-pointer delay-300 flex justify-between p-3 hover:shadow-lg transition-all ease-in-out duration-300">
                    <div className="flex flex-col justify-between p-3">
                        <div className="text-white bg-[#3EC99E] w-10 text-2xl h-10 rounded-full shadow-xl flex justify-center items-center">
                            <HiOutlineLightBulb />
                        </div>
                        <p className="text-sm mt-auto font-semibold">Total Spend</p>
                    </div>
                    <div className="flex flex-col justify-between p-3">
                        <h2 className="text-2xl text-black font-bold">$11.67M</h2>
                        <div className="flex items-center">
                            <p className="text-[#FF0C27] italic">-117.45%</p>
                            <div className="bg-white w-7 h-7 flex justify-center items-center rounded-full">
                                <GoArrowUpRight className="text-[#069669]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third box */}
                <div className="w-full shadow-md h-36 border border-[#837DFB] bg-[#EAE9FE] rounded-xl cursor-pointer delay-300 flex justify-between p-3 hover:shadow-lg transition-all ease-in-out duration-300">
                    <div className="flex flex-col justify-between p-3">
                        <div className="text-white bg-[#837DFB] w-10 text-2xl h-10 rounded-full shadow-xl flex justify-center items-center">
                            <IoStatsChart />
                        </div>
                        <p className="text-sm mt-auto font-semibold">Total Spend</p>
                    </div>
                    <div className="flex flex-col justify-between p-3">
                        <h2 className="text-2xl text-black font-bold">$11.67M</h2>
                        <div className="flex items-center">
                            <p className="text-[#069669] italic">+33.45%</p>
                            <div className="bg-white w-7 h-7 flex justify-center items-center rounded-full">
                                <GoArrowUpRight className="text-[#069669]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default DashTop;
