import axios from "axios";
import { useEffect, useState } from "react";

const HandlingApi = () => {
  const [photo, setPhoto] = useState([]); // array because you map
  const [photoLoading, setPhotoLoading] = useState(false);

  useEffect(() => {
    setPhotoLoading(true); // set loading true before API call

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhoto(response.data);     // set photos array
        setPhotoLoading(false);      // set loading false after data fetched
      })
      .catch((error) => {
        setPhotoLoading(false);      // set loading false on error too
        alert('Something went wrong, bro');
        console.error(error);
      });
  }, []);

  return (
    <div>
      {photoLoading ? (
        <h3>....Loading....</h3>
      ) : (
        photo.slice(0, 10).map((item) => (  // show first 10 photos for example
          <h2 key={item.id}>{item.title}</h2>
        ))
      )}
    </div>
  );
};

export default HandlingApi;
