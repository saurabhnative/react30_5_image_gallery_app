import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list")
      .then((response) => {
        setPhotos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  })

  const photoList = photos.map((image) => {
    return (
      <img key={image.id} src={image.download_url} alt={`image_${image.id}`} />
    )
  })
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="w-100 text-light">Image Gallery</div>
      </nav>
      <div className="photos">
        {photoList}
      </div>
    </div>
  );
}

export default App;
