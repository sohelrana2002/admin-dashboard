import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Profile from '../../assets/sohel-profile.png'

import './Navbar.scss'

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="search">
      <input type="text" name="" placeholder='Search...' />
      <SearchOutlinedIcon />
    </div>

    <div className="items">
      <div className="item">
        <LanguageOutlinedIcon />
        English
      </div>
      <div className="item">
        <DarkModeOutlinedIcon />
      </div>
      <div className="item">
        <FullscreenExitOutlinedIcon />
      </div>
      <div className="item">
        <NotificationsNoneOutlinedIcon />
        <div className="counter">1</div>
      </div>
      <div className="item">
        <ChatBubbleOutlineOutlinedIcon />
        <div className="counter">3</div>
      </div>
      <div className="item">
        <ListOutlinedIcon />
      </div>
      <div className="item">
        <img src={Profile} alt="profile" />
      </div>
    </div>
   </div>
  )
}

export default Navbar