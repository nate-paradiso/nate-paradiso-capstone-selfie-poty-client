import axios from "axios";
import { useState, useParams } from "react";

export const Upload = () => {
  //   const { userId } = useParams();
  //   const [userFromId, setUserFromId] = useState(null);

  //   useEffect(() => {
  //     const fetchUserById = async userId => {
  //       try {
  //         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}`);
  //         console.log(userId);
  //         setUserFromId(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchUserById(userId || "1");
  //   }, [userId]);

  return (
    <div>
      <p>userFromId</p>
    </div>
  );
};
