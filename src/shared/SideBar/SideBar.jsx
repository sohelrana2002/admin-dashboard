import { Links } from "../../data/Data";
import { NavLink } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";


import "./SideBar.scss";

const SideBar = () => {
  const { darkMode, setDarkMode } =useDarkModeContext();

  return (
    <div className="sidebar">
      {/* ----------top part------- */}
      <div className="top">
        <NavLink to='/'>
        <h4 className="logo">Admin DashBoard</h4>
        </NavLink>
      </div>
      <hr />
      {/* ---------center----------- */}
      <div className="middle">
        <h4>MAIN</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "main") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink to={curElem.path}>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        <h4>LISTS</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "lists") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink to={curElem.path}>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        <h4>USEFUL</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "useful") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink to={curElem.path}>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        <h4>SERVICE</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "service") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink to={curElem.path}>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        <h4>USER</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "user") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink to={curElem.path}>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        
      </div>

      {/* ----------bottom---------- */}
      <div className="bottom">
        <div className="color__options" onClick={() =>setDarkMode(false)}></div>
        <div className="color__options" onClick={() =>setDarkMode(true)}></div>
      </div>
    </div>
  );
};

export default SideBar;
