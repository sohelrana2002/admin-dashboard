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