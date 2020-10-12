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
      <div className="photos" key={image.id}>

        <img style={{ width: 45 + "vh" }} src={image.download_url} alt=""></img>
      </div>
    )
  })
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="w-100 text-light">Image Gallery</div>
      </nav>
      <div >
        {photoList}
      </div>
    </div>
  );
}

export default App;
