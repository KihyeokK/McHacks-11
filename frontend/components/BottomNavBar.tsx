"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsFillGrid1X2Fill, BsFillPeopleFill, BsImages, BsPersonFill } from "react-icons/bs";

const BottomNavBar = () => {
  const router = useRouter();                                                         // Update the type of the router variable

  if (!router) {
    return null;                                                                      // handle the case when the router is not available
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white py-2 border-t">
      <div className="flex justify-around">
        <Link href="/collages" className={`flex-col justify-center items-center gap-1.5 inline-flex hover:text-indigo-500 ${router.pathname === '/collages' ? 'text-indigo-500' : 'text-indigo-950'}`}>
          <BsFillGrid1X2Fill className="text-xl" />
          <div className="text-sm font-normal font-['Rubik']">Collages</div>
        </Link>
        <Link href="/friends" className={`flex-col justify-center items-center gap-1.5 inline-flex hover:text-indigo-500 ${router.pathname === '/friends' ? 'text-indigo-500' : 'text-indigo-950'}`}>
          <BsFillPeopleFill className="text-2xl" />
          <div className="text-sm font-normal font-['Rubik']">Friends</div>
        </Link>
        <Link href="/memory" className={`flex-col justify-center items-center gap-1.5 inline-flex hover:text-indigo-500 ${router.pathname === '/memory' ? 'text-indigo-500' : 'text-indigo-950'}`}>
          <BsImages className="text-2xl" />
          <div className="text-sm font-normal font-['Rubik']">Memories</div>
        </Link>
        <Link href="/profile" className={`flex-col justify-center items-center gap-1.5 inline-flex hover:text-indigo-500 ${router.pathname === '/profile' ? 'text-indigo-500' : 'text-indigo-950'}`}>
          <BsPersonFill className="text-2xl" />
          <div className="text-sm font-normal font-['Rubik']">Profile</div>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavBar;
