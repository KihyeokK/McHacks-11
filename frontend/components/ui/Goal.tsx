import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import catImage from "../../../public/images/cat.jpg";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");

//   const handleFileChange = (event: any) => {
	
//     setSelectedFile(event.target.files[0]);
// 	console.log(event.target.files[0]);
//   };

  const handleSubmit = async (event: any) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
	console.log(formData);
    const API_URL = "http://localhost:8080/api/upload";

    try {
      let resultFile = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
	  console.log(
		"resultFile",
		resultFile
	  );
      console.log("Image uploaded successfully");
	  setSelectedFile(resultFile.data.file.filename);
	  console.log(resultFile.data.file.filename);
	  setFileUrl(URL.createObjectURL(event.target.files[0]));
	  console.log("temp File URL:", fileUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

// ...

const retrievePhoto = async () => {
	try {
		const API_URL = `http://localhost:8080/api/files/${selectedFile}`
		const response = await axios.get(API_URL);
		// Handle the retrieved photo data here
		console.log("Retrieved photo:", response);
		setUploadedFile(response.data);
		// create a URL for file from Binary data
		// setFileUrl(URL.createObjectURL(response.data));
		console.log("File URL:", fileUrl);
		return response.data
	} catch (error) {
		console.error("Error retrieving photo:", error);
	}
};

// ...

//   useEffect(() => {
//     const fetchGoalData = async () => {};
//     fetchGoalData;
//     console.log();
//   });
useEffect(() => {
	if (selectedFile) {
		retrievePhoto();
	}
}, [selectedFile]);

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

        {uploadedFile ? (
          <img src={fileUrl} alt="Uploaded Image" />
        ) : (
          <div className="m-2 aspect-w-1 aspect-h-1 text-sm">
            <input type="file" onChange={handleSubmit} />
          </div>
        )}
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
