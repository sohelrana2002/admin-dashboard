import { useState } from 'react';
import SideBar from '../../shared/SideBar/SideBar'
import NavBar from '../../shared/NavBar/NavBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from '../../firebase/Firebase';
import { useFirebaseConext } from '../../context/FirebaseContext';

import './New.scss'


const New = ({inputs, title}) => {
  const { signUp, user } = useFirebaseConext();
  const [file, setFile] = useState("");
  const [userData, setUserData] = useState({
    // userName: "",
    // surName: "",
    // email: "",
    // phone: "",
    // password: "",
    // address: "",
    // country: ""
  });
  console.log(userData);
  const handleInput = (e) =>{
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;

    setUserData({
      ...userData,
      [id]: value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try{
      const res = await signUp(user.email, user.password);
      await setDoc(doc(db, "user", res.user.uid), {
        ...userData,
        timeStamp: serverTimestamp(),
      });
      console.log("submit");
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="new">
      <SideBar />

      <div className="new__container">
        <NavBar />

        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
          
        <div className="bottom">
          <div className="left">
            <div className="img">
            <img src={file ? URL.createObjectURL(file) : "https://st4.depositphotos.com/20923550/26771/v/380/depositphotos_267713212-stock-illustration-camera-image-photo-basic-blue.jpg"} alt="" />
            </div>
          </div>
          <div className="right">
            <form action="#" onSubmit={handleSubmit}>
            <div className="file__input">
                <label htmlFor='file'><DriveFolderUploadIcon /></label>
                <input type="file" id='file' onChange={e =>setFile(e.target.files[0])}/>
              </div>


              {
                inputs && inputs.map((curElem) =>{
                  return (
                    <div className="form__input" key={curElem.id}>
                      <label>{curElem.label}</label>
                      <input 
                       id={curElem.id}
                       type={curElem.type} 
                       placeholder={curElem.placeholder}
                       onChange={handleInput}
                      //  value={curElem.id}
                      />
                    </div>
                  );
                })
              }

              <button type='submit' className='btn' >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New