import SideBar from "../../shared/SideBar/SideBar";
import Navbar from "../../shared/Navbar/Navbar";
import Profile from "../../assets/sohel-profile.png";
import Chart from "../../components/Chart/Chart";
import TableList from "../../components/TableList/TableList";

import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <SideBar />

      <div className="single__container">
        <Navbar />
        {/* --------top------------ */}
        <div className="top">
          {/* ----------left----------- */}
          <div className="left">
            <div className="edit__button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={Profile} alt="Avatar" className="item__img" />

              <div className="details">
                <h1 className="item__title">Sohel Rana</h1>
                <div className="detail__item">
                  <span className="item__key">Email : </span>
                  <span className="item__value">sohelrana110979@gmail.com</span>
                </div>

                <div className="detail__item">
                  <span className="item__key">Phone : </span>
                  <span className="item__value">01751070854</span>
                </div>

                <div className="detail__item">
                  <span className="item__key">Address : </span>
                  <span className="item__value">Rajshahi, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          {/* ---------right---------- */}
          <div className="right">
            <Chart aspect={4 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>

        {/* ------bottom------ */}
        <div className="bottom">
          <h1 className="title">Last Tranactions</h1>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Single;
