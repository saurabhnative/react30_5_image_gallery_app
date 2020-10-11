import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.min.css';

function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  useEffect(() => {
    // API call for fetching images
    axios.get('https://picsum.photos/v2/list')
      .then(function (response) {
        // handle success
        updatePhotoGalleryArray(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <div className="App">

      <h1 className="title">Image Gallery</h1>

      <div className="gallery">
        {
          photoGalleryArray.map((photoGalleryArrayItem, index) => {
            return (
              <div key={index} className="image">
                <img src={photoGalleryArrayItem.download_url}
                  alt={`image_${photoGalleryArrayItem.id}`}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
