import { useState } from 'react';
import SideBar from '../../shared/SideBar/SideBar'
import NavBar from '../../shared/NavBar/NavBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import './New.scss'


const New = ({inputs, title}) => {
  const [file, setFile] = useState("");
  // console.log(file);


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
            <form action="#">
            <div className="file__input">
                <label htmlFor='file'><DriveFolderUploadIcon /></label>
                <input type="file" id='file' onChange={e =>setFile(e.target.files[0])}/>
              </div>


              {
                inputs && inputs.map((curElem) =>{
                  return (
                    <div className="form__input" key={curElem.id}>
                      <label>{curElem.label}</label>
                      <input type={curElem.type} placeholder={curElem.placeholder}  />
                    </div>
                  );
                })
              }

              <button type='button' className='btn'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New