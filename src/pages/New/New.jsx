import SideBar from '../../shared/SideBar/SideBar'
import NavBar from '../../shared/NavBar/NavBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import './New.scss'

const New = () => {
  return (
    <div className="new">
      <SideBar />

      <div className="new__container">
        <NavBar />

        <div className="top">
          <h1 className="title">Add New User</h1>
        </div>
          
        <div className="bottom">
          <div className="left">
            <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoAYvbTKpyLwOwP_oNMsAn2ku3DnLHURxYWHX1siq4w9oRmr75GK8hSSimbaC8Gb9K44&usqp=CAU" alt="" />
            </div>
          </div>
          <div className="right">
            <form action="#">
            <div className="file__input">
                <label htmlFor='file'><DriveFolderUploadIcon /></label>
                <input type="file" id='file' />
              </div>


              <div className="form__input">
                <label>Username</label>
                <input type="text" placeholder='john_doe' />
              </div>

              <div className="form__input">
                <label>Name and surname</label>
                <input type="text" placeholder='John Doe' />
              </div>

              <div className="form__input">
                <label>Email</label>
                <input type="email" placeholder='johndoe@email.com' />
              </div>

              <div className="form__input">
                <label>Phone</label>
                <input type="text" placeholder='+1 234 567 89' />
              </div>

              <div className="form__input">
                <label>Password</label>
                <input type="password" placeholder='******' />
              </div>

              <div className="form__input">
                <label>Address</label>
                <input type="password" placeholder='Los Angles, Usa' />
              </div>

              <button type='button' className='btn'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New