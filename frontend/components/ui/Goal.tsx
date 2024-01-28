import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import catImage from "../../../public/images/cat.jpg";

type GoalProps = {
  id: number;
};

type GoalData = {
  name: string;
  description: string;
  photos: string[]; // change to the proper data type
  numUploadedPhotos: number;
  numPhotos: number; // use to determine the numebr
};

export default function Goal({ id }: GoalProps) {
  // const [goalName, setGoalName] = useState();
  const [goalData, setGoalData] = useState<GoalData | null>();

  useEffect(() => {
    const fetchGoalData = async () => {};
    fetchGoalData;
    console.log();
  });

  return (
    <div className="bg-orange-100 w-100 p-2 mt-3">
      {/* <div>
        {goalData.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index + 1}`} />
            ))}
      </div> */}
      <div className="grid grid-cols-2 gap-4 place-items-center">
        <div className="col-span-1 aspect-w-1 aspect-h-1">
          <Image
            src="/images/cat1.png"
            width={400}
            height={400}
            alt="Empty state image"
          />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/images/cat1.png"
            width={400}
            height={400}
            alt="Empty state image"
          />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/images/cat1.png"
            width={400}
            height={400}
            alt="Empty state image"
          />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/images/cat1.png"
            width={400}
            height={400}
            alt="Empty state image"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex-none w-14 h-14 m-4">
            <div className="font-bold">Group</div>
            <div className="text-sm">Description</div>
          </div>
          <div className="flex-initial w-34 m-3">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
