import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";

import "./Widget.scss";

const Widget = ({ type }) => {
  let data;

  // temp
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "user":
      {
        data = {
          title: "users",
          isMoney: false,
          link: "see all users",
          icon: (
            <PersonOutlineOutlinedIcon
              className="icon"
              style={{ background: "rgba(255, 0, 0, 0.2)", color: "crimson" }}
            />
          ),
        };
      }
      break;

    case "order":
      {
        data = {
          title: "order",
          isMoney: false,
          link: "view all orders",
          icon: (
            <ShoppingBagOutlinedIcon
              className="icon"
              style={{
                background: "rgba(255, 128, 0, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
      }
      break;

    case "earning":
      {
        data = {
          title: "earning",
          isMoney: true,
          link: "see details",
          icon: (
            <AttachMoneyOutlinedIcon
              className="icon"
              style={{ background: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
      }
      break;

    case "balance":
      {
        data = {
          title: "balance",
          isMoney: true,
          link: "total balance",
          icon: (
            <CurrencyExchangeOutlinedIcon
              className="icon"
              style={{ background: "rgba(128, 0, 128, 0.2)", color: "purple" }}
            />
          ),
        };
      }
      break;

    default:
      break;
  }

  return (
    <div className="">
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {amount}
          </span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon />
            {percentage} %
          </div>

          {data.icon}
        </div>
      </div>
    </div>
  );
};

export default Widget;
