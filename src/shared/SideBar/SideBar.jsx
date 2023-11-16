import { Links } from "../../data/Data";
import { NavLink } from "react-router-dom";

import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      {/* ----------top part------- */}
      <div className="top">
        <h4 className="logo">Admin DashBoard</h4>
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
                  <NavLink>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        ;<h4>LISTS</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "lists") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        ;<h4>USEFUL</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "useful") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        ;<h4>SERVICE</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "service") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        ;<h4>USER</h4>
        {Links &&
          Links?.map((curElem) => {
            if (curElem.type === "user") {
              return (
                <div className="middle__content" key={curElem.id}>
                  <NavLink>
                    <span>{curElem.icon}</span>
                    <p>{curElem.title}</p>
                  </NavLink>
                </div>
              );
            }
          })}
        ;
      </div>

      {/* ----------bottom---------- */}
      <div className="bottom">
        <div className="color__options"></div>
        <div className="color__options"></div>
      </div>
    </div>
  );
};

export default SideBar;
