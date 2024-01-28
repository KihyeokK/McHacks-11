import { useEffect, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";

type GoalProps = {
    id: number;
};

type GoalData = {
    name: string;
    description: string;
    photos: string[]; // change to the proper data type
    numUploadedPhotos: number;
    numPhotos: number;  // use to determine the numebr
};  

export default function Goal({ id }: GoalProps) {
    // const [goalName, setGoalName] = useState();
    const [goalData, setGoalData] = useState<GoalData | null>(null);

    useEffect(() => {
        const fetchGoalData = async () => {
            
        }
        fetchGoalData;
        console.log()
    })

    return (
        <div>
          <div>
            {/*{goalData.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index + 1}`} />
            ))}*/}
          </div>
          <div>
            <div>       {/* Goal Details */}
                {/*<h2>{goalData.name}</h2>*/}
                {/*<p>{goalData.description}</p>*/}
                <h2 className="text-center text-indigo-950 text-lg font-bold font-['Rubik'] leading-[25.20px]">Goal</h2>
                <p className="text-center text-indigo-950 text-sm font-normal font-['Rubik'] leading-tight">Description</p>
            </div>
            <div>   {/* ... */}
                <BsThreeDotsVertical />
            </div>
          </div>
        </div>
    );
    
    

}