import React from "react";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import "../styles/NewListing/NewListing.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewListing = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const formHandler = async (e) => {
    e.preventDefault();

    await uploadFiles(img);

    await axios
      .post("http://localhost:5000/api/v1/product", {
        name,
        description: desc,
        price,
        image: imgUrl,
      }).catch((err) => console.log(err)) 
      
    
    console.log("Success");
    navigate("/");

  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setImgUrl(url));
      }
    );
  };

  return (
    <div className="newlisting__container">
      <form onSubmit={formHandler} className="newlisting__form">
        <h1 className="newlisting__title">Create a Listing</h1>

        <label>
          Name:
          <input
            type="text"
            name="name"
            className="textInput"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            className="textInput"
            name="description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            className="textInput"
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Image:
          <input
            type="file"
            name="image"
            className="fileInput"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
            required
          />
        </label>
        <h3>Image Upload {progress}%</h3>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewListing;
