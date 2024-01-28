"use client";
import { useState } from "react";
import Image from 'next/image';
import BottomNavBar from "@/components/BottomNavBar";
import Goal from '@/components/ui/Goal'

export default function Collages() {
    const [haveGoal, setHaveGoal] = useState(false);

    {/* check if user has goals */}

    return (
        <div className="w-[100%] h-[100vh] px-5 bg-slate-50 flex-col justify-center items-center gap-5 inline-flex">
            {haveGoal ? (
                <div className="w-[100%]"> {/* Displays goals if haveGoal is true */}
                    <Goal id={1} />
                </div>
            ) : (
                <>
                    <div className="relative w-[80%]"> {/* Empty state image if haveGoal is false */}
                        <Image
                            src="/images/target.png"
                            width={400}
                            height={400}
                            alt="Picture of one person putting a dart on the target"
                        />
                    </div>
                    <div className="self-stretch text-center text-slate-400 text-base font-normal font-['Rubik'] leading-snug">
                        Accomplishing goals is more<br />fun with friends!
                    </div>
                </>
            )}
            <BottomNavBar />
        </div>

    )
}