import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm) => {
    const result = await searchImages(searchTerm); // await = wait for request to be completed

    console.log(result);

    // searchImages(searchTerm);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />

      {/* State + Prop here */}
      <ImageList images={images}/>
    </div>
  );
}

export default App;
