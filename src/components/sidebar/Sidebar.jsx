import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/applications" className="link">
              <li className="sidebarListItem">
                <AppsOutlinedIcon className="sidebarIcon" />
                Applications
              </li>
            </Link>
            <Link to="/submitForm" className="link">
              <li className="sidebarListItem">
                <MessageIcon className="sidebarIcon" />
                Form
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Other Menu Options</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Option 1
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Option 2
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Option 3
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Option 4
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
