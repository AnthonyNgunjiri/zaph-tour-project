import "./header.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiImperialCrown } from "react-icons/gi";
import { FcContacts } from "react-icons/fc";
import { FaTripadvisor } from "react-icons/fa";

const Header=()=>{
    return(
        <div className="header">
        <h1>Zaph Tours</h1>
        <section className="list" >
            <ul className="lis">
            <li className="header-li"><Link to="/"><FaHome />  Homepage</Link></li>
        <li className="header-li"><Link to="/destiny"><GiImperialCrown />   Destination</Link></li>
        <li className="header-li"><Link to="/trips"><FaTripadvisor /> Trips</Link></li> 
        <li className="header-li"><Link to="/contact"><FcContacts />  Contact</Link></li> 
       
            </ul>
        </section>
        </div>
    )
}
export default Header;