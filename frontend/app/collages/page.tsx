"use client";
import { useState } from "react";
import Image from "next/image";
import BottomNavBar from "@/components/BottomNavBar";
import Goal from "@/components/ui/Goal";

export default function Collages() {
    const [goals, setGoals] = useState([1,2]);

    return (
        <div className="w-[100%] h-[100vh] px-5 bg-slate-50 justify-center items-center">
            {goals.length > 0 ? (
                <div>
                    {/* Displays goals if goals array is not empty */}
                    {goals.map((goal, index) => (
                        <Goal key={index} id={goal.id} />
                    ))}
                </div>
            ) : (
                <>
                    <div className="relative w-[80%]">
                        {/* Empty state image if goals array is empty */}
                        <Image
                            src="/images/target.png"
                            width={400}
                            height={400}
                            alt="Empty state image"
                        />
                    </div>
                    <div className="self-stretch text-center text-slate-400 text-base font-normal font-['Rubik'] leading-snug">
                        Accomplishing goals is more
                        <br />
                        fun with friends!
                    </div>
                </>
            )}
            <BottomNavBar />
        </div>
    );
}
 