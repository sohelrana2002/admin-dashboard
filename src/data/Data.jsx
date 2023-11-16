// ----------icon for links-------------
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';









export const Links = [
    {
        id: 1,
        icon: <DashboardIcon />,
        title: "dashboard",
        type: "main"
    },

    {
        id: 2,
        icon: <PersonIcon />,
        title: "users",
        type: "lists"
    },

    {
        id: 3,
        icon: <InventoryIcon />,
        title: "products",
        type: "lists"
    },

    {
        id: 4,
        icon: <BookmarkBorderIcon />,
        title: "orders",
        type: "lists"
    },

    {
        id: 5,
        icon: <LocalShippingIcon />,
        title: "delivery",
        type: "list"
    },

    {
        id: 6,
        icon: <InsertChartIcon />,
        title: "stats",
        type: "useful"
    },

    {
        id: 7,
        icon: <NotificationsIcon />,
        title: "notifications",
        type: "useful"
    },

    {
        id: 8,
        icon: <MedicalInformationIcon />,
        title: "system health",
        type: "service"
    },

    {
        id: 9,
        icon: <PsychologyIcon />,
        title: "logs",
        type: "service"
    },

    {
        id: 10,
        icon: <SettingsIcon />,
        title: "settings",
        type: "service"
    },

    {
        id: 11,
        icon: <ContactEmergencyIcon />,
        title: "profile",
        type: "user"
    },

    {
        id: 12,
        icon: <ExitToAppIcon />,
        title: "log out",
        type: "user"
    },
]


export const rowsData = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];