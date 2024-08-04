import React from "react";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import "./tail.css";
import { getStorage, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";
function Tail() {
  const [file, setFile] = useState(null);
  const handlefilec = (e) => {
    setFile(e.target.files[0]);
  };
  const sub = () => {
    var iurl=null;
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    const storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file)//uploads file
      .then((snapshot) => {
        console.log("upload a blob or file!");
      })
      .catch((error) => {
        console.log(error);
      });
    // const storage = getStorage();
    getDownloadURL(ref(storage, "some-child"))
      .then((url) => {
        iurl=url
        console.log(url);
      })
      .catch((error) => {});
       

  };


  return (
    <div >
      <div>
       
        <button onClick={sub}>Submit</button>
      </div>
    </div>
  );
}
export default Tail;
