import Image from 'next/image';

export default function GoalsEmptyState() {
    return (
        <div className="self-stretch h-[100%] flex-col justify-center items-center gap-5 flex">
            <div className="w-[238px] h-60 relative">
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
            <div className="px-3 py-1.5 bg-indigo-500 rounded border border-indigo-500 justify-center items-center gap-2 inline-flex">
                <div className="bg-white bg-opacity-0 flex-col justify-center items-start inline-flex">
                    <div className="text-white text-base font-normal font-['Rubik'] leading-normal">Set a goal</div>
                </div>
            </div>
        </div>
    )
}