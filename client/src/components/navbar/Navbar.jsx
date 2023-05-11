import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const { logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

    return (
        <div className="navbar">
            <div className="left">
              <Link to="/" style={{ textDecoration: "none" }}>
                <span>Friend Zone</span>
              </Link>
              <HomeOutlinedIcon />
              {darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> : (
                <WbSunnyOutlinedIcon onClick={toggle}/>)}
              <GridViewOutlinedIcon />
              <div className="search">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="right">
              <PersonOutlinedIcon />
              <EmailOutlinedIcon />
              <LogoutIcon onClick={handleLogout} />
              <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="user">
                  <img
                    src={"/upload/"+currentUser.profilePic}
                    alt=""
                  />
                  <span>{currentUser.name}</span>
                </div>
              </Link>
            </div>
        </div>
    );
};

export default Navbar