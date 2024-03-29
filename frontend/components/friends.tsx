"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header";
import NavBar from "@/components/BottomNavBar";
export function Friends() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="bg-white min-h-screen">
      <Header/>
      <div className="p-4">
        <div className="mb-6">
          <Input className="w-full" placeholder="username" type="text" />
        </div>
        <section>
          <h2 className="mb-2 font-semibold text-gray-500">REQUESTS</h2>
          {isVisible && (
            <div className="flex items-center justify-between mb-4 text-black">
              <span>username1</span>
              <div className="flex items-center space-x-2">
                <Button variant="green">ACCEPT</Button>
                <XIcon className="h-6 w-6 text-gray-500" onClick={() => setIsVisible(false)} />
              </div>
            </div>
          )}
        </section>
        <section>
          <h2 className="mb-2 font-semibold text-gray-500">MY FRIENDS</h2>
          <div className="flex items-center justify-between mb-4 text-black">
            <span>username2</span>
            <XIcon className="h-6 w-6 text-gray-500"/>
          </div>
        </section>
        <section>
          <h2 className="mb-2 font-semibold text-gray-500">SEARCH RESULTS</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-black">
              <span>username3</span>
                <Button variant="green">ADD</Button>
            </div>
          </div>
        </section>
      </div>
      <footer className="fixed bottom-0 w-full bg-white border-t">
        <NavBar />
      </footer>
    </div>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}


function Grid2x2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 12h18" />
      <path d="M12 3v18" />
    </svg>
  )
}


function User2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16" />
    </svg>
  )
}


function RectangleVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="12" height="20" x="6" y="2" rx="2" />
    </svg>
  )
}


function PersonStandingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  )
}
// export function Friends() {
//   return (
//   <div className="w-[390px] h-[844px] bg-slate-50 flex-col justify-start items-start inline-flex">
//     <div className="self-stretch grow shrink basis-0 px-5 py-[62px] flex-col justify-start items-center gap-5 flex">
//       <div className="self-stretch rounded justify-start items-center inline-flex">
//         <div className="grow shrink basis-0 h-[35px] px-3 py-1.5 bg-white rounded border border-gray-300 justify-start items-center flex">
//           <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
//             <div className="p-px bg-white bg-opacity-0 flex-col justify-center items-center inline-flex">
//               <div className="bg-white bg-opacity-0 flex-col justify-start items-center flex">
//                 <div className="justify-start items-center gap-3.5 inline-flex">
//                   <div className="w-[0px] h-[0px]"></div>
//                   <div className="w-[0px] h-[0px]"></div>
//                 </div>
//                 <div className="self-stretch justify-start items-center inline-flex">
//                   <div className="origin-top-left -rotate-90 justify-start items-center gap-3.5 flex">
//                     <div className="w-[0px] h-[0px]"></div>
//                     <div className="w-[0px] h-[0px]"></div>
//                   </div>
//                   <div className="w-3.5 h-3.5 relative">
//                     <img className="w-3.5 h-3.5 left-[-0px] top-[-0px] absolute" src="https://via.placeholder.com/14x14" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-gray-500 text-sm font-normal font-['Rubik'] leading-[21px]">username</div>
//           </div>
//         </div>
//       </div>
//       <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-10 flex">
//         <div className="self-stretch h-12 flex-col justify-center items-start gap-2.5 flex">
//           <div className="text-center text-neutral-400 text-xs font-bold font-['Rubik'] leading-none">REQUESTS</div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">username</div>
//             <div className="justify-end items-center gap-2 flex">
//               <div className="px-1.5 py-0.5 bg-green-100 rounded-[10px] border border-green-100 justify-center items-center gap-2 flex">
//                 <div className="bg-green-600 bg-opacity-0 flex-col justify-center items-start inline-flex">
//                   <div className="text-green-600 text-[10px] font-normal font-['Rubik'] leading-[15px]">ACCEPT</div>
//                 </div>
//               </div>
//               <div className="w-3 h-3 relative"></div>
//             </div>
//           </div>
//         </div>
//         <div className="self-stretch h-11 flex-col justify-center items-start gap-2.5 flex">
//           <div className="text-center text-neutral-400 text-xs font-bold font-['Rubik'] leading-none">MY FRIENDS</div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">username</div>
//             <div className="w-3 h-3 relative"></div>
//           </div>
//         </div>
//         <div className="self-stretch h-[203px] flex-col justify-center items-start gap-2.5 flex">
//           <div className="text-center text-neutral-400 text-xs font-bold font-['Rubik'] leading-none">SEARCH RESULTS</div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">username1</div>
//             <div className="justify-end items-center gap-2 flex">
//               <div className="px-1.5 py-0.5 bg-green-100 rounded-[10px] border border-green-100 justify-center items-center gap-2 flex">
//                 <div className="bg-green-600 bg-opacity-0 flex-col justify-center items-start inline-flex">
//                   <div className="text-green-600 text-[10px] font-normal font-['Rubik'] leading-[15px]">ADD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">usernam2e</div>
//             <div className="justify-end items-center gap-2 flex">
//               <div className="px-1.5 py-0.5 bg-green-100 rounded-[10px] border border-green-100 justify-center items-center gap-2 flex">
//                 <div className="bg-green-600 bg-opacity-0 flex-col justify-center items-start inline-flex">
//                   <div className="text-green-600 text-[10px] font-normal font-['Rubik'] leading-[15px]">ADD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">usernam2e</div>
//             <div className="justify-end items-center gap-2 flex">
//               <div className="px-1.5 py-0.5 bg-green-100 rounded-[10px] border border-green-100 justify-center items-center gap-2 flex">
//                 <div className="bg-green-600 bg-opacity-0 flex-col justify-center items-start inline-flex">
//                   <div className="text-green-600 text-[10px] font-normal font-['Rubik'] leading-[15px]">ADD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">usernam2e</div>
//             <div className="justify-end items-center gap-2 flex">
//               <div className="px-1.5 py-0.5 bg-green-100 rounded-[10px] border border-green-100 justify-center items-center gap-2 flex">
//                 <div className="bg-green-600 bg-opacity-0 flex-col justify-center items-start inline-flex">
//                   <div className="text-green-600 text-[10px] font-normal font-['Rubik'] leading-[15px]">ADD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">usernam2e</div>
//             <div className="justify-end items-center gap-2 flex">
//               <div className="px-1.5 py-0.5 bg-green-100 rounded-[10px] border border-green-100 justify-center items-center gap-2 flex">
//                 <div className="bg-green-600 bg-opacity-0 flex-col justify-center items-start inline-flex">
//                   <div className="text-green-600 text-[10px] font-normal font-['Rubik'] leading-[15px]">ADD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch rounded border justify-between items-center inline-flex">
//             <div className="text-indigo-950 text-sm font-normal font-['Rubik'] leading-[16.80px]">usernam2e</div>
//             <div className="justify-end items-center gap-2 flex">
//               <div className="px-1.5 py-0.5 bg-green-100 rounded-[10px] border border-green-100 justify-center items-center gap-2 flex">
//                 <div className="bg-green-600 bg-opacity-0 flex-col justify-center items-start inline-flex">
//                   <div className="text-green-600 text-[10px] font-normal font-['Rubik'] leading-[15px]">ADD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="w-[390px] h-[62px] py-0.5 justify-between items-center inline-flex">
//       <div className="w-[390px] h-[62px] py-0.5 justify-between items-center flex">
//         <div className="grow shrink basis-0 self-stretch p-[38px] flex-col justify-center items-center gap-1.5 inline-flex">
//           <div className="text-indigo-950 text-lg font-semibold font-['Rubik']">App Name</div>
//         </div>
//       </div>
//     </div>
//     <div className="w-[390px] h-[62px] py-0.5 bg-white border-t border-slate-200 justify-between items-center inline-flex">
//       <div className="grow shrink basis-0 self-stretch p-[38px] flex-col justify-center items-center gap-1.5 inline-flex">
//         <div className="w-6 h-6 relative"></div>
//         <div className="text-indigo-950 text-sm font-normal font-['Rubik']">Collages</div>
//       </div>
//       <div className="grow shrink basis-0 self-stretch p-[38px] flex-col justify-center items-center gap-1.5 inline-flex">
//         <div className="w-6 h-6 relative"></div>
//         <div className="text-indigo-500 text-sm font-normal font-['Rubik']">Friends</div>
//       </div>
//       <div className="grow shrink basis-0 self-stretch p-[38px] flex-col justify-center items-center gap-1.5 inline-flex">
//         <div className="w-6 h-6 relative"></div>
//         <div className="text-indigo-950 text-sm font-normal font-['Rubik']">Memories</div>
//       </div>
//       <div className="grow shrink basis-0 self-stretch p-[38px] flex-col justify-center items-center gap-1.5 inline-flex">
//         <div className="w-6 h-6 relative"></div>
//         <div className="text-indigo-950 text-sm font-normal font-['Rubik']">Profile</div>
//       </div>
//     </div>
//   </div>
//   )
// }