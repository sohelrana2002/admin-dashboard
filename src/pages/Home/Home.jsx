import SideBar from "../../shared/SideBar/SideBar";
import Navbar from "../../shared/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import FeaturedChart from "../../components/FeaturedChart/FeaturedChart";
import Chart from "../../components/Chart/Chart";
import TableList from "../../components/TableList/TableList";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <SideBar />

      <div className="home__container">
        <Navbar />

        <div className="container home__interface">

          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>

          <div className="charts">
            <FeaturedChart />
            <Chart />
          </div>

          <div className="list__container">
            <div className="list__Title">Latest Transactions</div>
            <TableList />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
