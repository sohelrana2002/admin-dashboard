import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import "./FeaturedChart.scss";

const FeaturedChart = () => {
  const percentage = 66;
  return (
    <div className="feature__chart">
      <div className="top">
        <h1 className="title">total revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="feature__chart-chart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
          />
        </div>

        <p className="title">Total sales made today</p>
        <p className="amount">$450</p>
        <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo assumenda a nihil recusandae beatae voluptatem cumque porro iste voluptatum.</p>

        <div className="summary">
            <div className="item">
                <div className="item__title">Target</div>
                <div className="item__result">
                    <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    <div className="result__amount">$12.4k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChart;
