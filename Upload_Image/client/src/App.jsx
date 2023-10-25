import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append('file', file);
    axios
      .post('http://localhost:3001/upload', formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handlePhoto =  (e) => {
    axios
      .get('http://localhost:3001/getImage')
      .then((res) => {
        setImages(res.data); // Set all images from the database
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handlePhoto()
  }, [handlePhoto]); // auto reload when upload

  return (
    <>
      <div className="container">
        <div className="sub-container">
          <input type="file" onChange={handleChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>

        <div className="images-container">
          {images.map((item, index) => (
            <img
              key={index}
              className="image"
              src={`http://localhost:3001/Images/${item.image}`}
              alt={`image-${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;