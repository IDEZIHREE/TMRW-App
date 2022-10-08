import { React,useState} from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
//Icons
import { BsFillPersonFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { BsHeartFill } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";

function Footer() {

    const [isActive, setIsActive] = useState(true);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
    }
    const handleClick1 = () => {
        setIsActive1(true);
        setIsActive(false);
        setIsActive2(false);
        setIsActive3(false);
    }
    const handleClick2 = () => {
        setIsActive2(true);
        setIsActive1(false);
        setIsActive(false);
        setIsActive3(false);
    }
    const handleClick3 = () => {
        setIsActive3(true);
        setIsActive1(false);
        setIsActive(false);
        setIsActive2(false);
    }

    return (
        <div className="footer">
            <IconButton>
            <Link to="/">
                <RiMoonFill
                    style={{
                        color: isActive ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick} 
                    fontSize="150%" />
            </Link>
            </IconButton>
            <IconButton>
            <Link to="/premium">
                <BsHeartFill
                    style={{
                        color: isActive1 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick1} 
                    fontSize="150%" />
            </Link>
            </IconButton>
            <IconButton>
            <Link to="/chat">
                <TiMessages
                    style={{
                        color: isActive2 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick2} 
                    fontSize="150%" />
            </Link>
            </IconButton>
            <IconButton>
            <Link to="/profile">
                <BsFillPersonFill 
                     style={{
                        color: isActive3 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick3} 
                    fontSize="150%" />
            </Link>
            </IconButton>
        </div>
    )
}

export default Footer;
