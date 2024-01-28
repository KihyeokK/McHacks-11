import axios from "axios";

// URL to which requests will be sent
const API_URL = "http://localhost:3001/api";

export const uploadPhoto = async (photo: any) => {
    try {
      const response = await axios.post(`${API_URL}/upload`, );
      console.log(
        "uploading photo",
        response
      );
      return response.data.tasks;
    } catch (e) {
      alert("Error in Axios get query to /upload. Could not get all tasks.");
    }
  };