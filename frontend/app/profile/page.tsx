"use client";
import BottomNavBar from "@/components/BottomNavBar";
import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

export default function Profile() {
    const [goals, setGoals] = useState("hidden");

    // if no goals then show empty state
    // if goals then dont show empty state

    return (
        <div className="w-[100%] h-[100vh] bg-slate-50 flex-col justify-start items-start inline-flex">
            <div className=" w-[100%] basis-0 px-5 py-[62px] flex-col justify-start items-start gap-16 flex">
                <div className="w-[100%] justify-start items-center gap-5 inline-flex">
                    <div className="w-[59px] h-[59px] bg-indigo-500 rounded-full"></div>
                    <div className="w-[100%] self-stretch flex-col justify-start items-start gap-5 inline-flex">                                               {/* Profile */}
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-indigo-950 text-lg font-semibold font-['Rubik'] leading-snug">username</div>
                            <div className="w-5 h-5 relative text-indigo-950 text-xl"><IoLogOut /></div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-10 inline-flex">
                            <div className="flex-col justify-start items-center gap-0.5 inline-flex">                                                           {/* Friends */}
                                <div className="text-indigo-950 text-xs font-semibold font-['Rubik'] leading-[14.40px]">00</div>
                                <div className="text-indigo-950 text-xs font-normal font-['Rubik'] leading-[14.40px]">friends</div>
                            </div>
                            <div className="flex-col justify-start items-center gap-0.5 inline-flex">                                                           {/* Collages Completed */}
                                <div className="text-indigo-950 text-xs font-semibold font-['Rubik'] leading-[14.40px]">200</div>
                                <div className="text-indigo-950 text-xs font-normal font-['Rubik'] leading-[14.40px]">collages completed</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[17px] flex-col justify-center items-start gap-2.5 flex">
                    <div className="text-center uppercase text-neutral-400 text-xs font-bold font-['Rubik'] leading-none">Your Goals</div>
                    <ul className="text-indigo-950">
                        <li>meow</li>
                        <li>meow</li>
                    </ul>
                    {/* Collages Completed */}
                </div>
                <div className="self-stretch h-[362px] flex-col justify-center items-center gap-5 flex">
                    <div className="w-[238px] h-60 relative"></div>
                    <div className="self-stretch text-center text-slate-400 text-base font-normal font-['Rubik'] leading-snug">placeholder message<br/>about having no goals</div>
                    <div className="px-3 py-1.5 bg-indigo-500 rounded border border-indigo-500 justify-center items-center gap-2 inline-flex">
                        <div className="bg-white bg-opacity-0 flex-col justify-center items-start inline-flex">
                            <div className="text-white text-base font-normal font-['Rubik'] leading-normal">Set a goal</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[62px] py-0.5 left-0 top-0 absolute justify-between items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch p-[38px] flex-col justify-center items-center gap-1.5 inline-flex">
                <div className="text-indigo-950 text-lg font-semibold font-['Rubik']">App Name</div>
                </div>
            </div>
            <BottomNavBar />
        </div>
    )
    
}