import Destine from "./Destine";
import "./destiny.css";
import { Link } from "react-router-dom";
import kenya from "../../assets/mtk.jpeg";
import ruwenzori from "../../assets/ruwenzi.jpeg";
import lake from "../../assets/nakuru.jpeg";
import tsavo from "../../assets/tsp.jpeg";
import nairobi from "../../assets/safari.jpeg";
import coast from "../../assets/Kenyan Coast.jpeg";
const  Destination=()=>{
return(
   <section className="tip">
    <div className="rib">
    <p className="ribbon1">places to visit</p>
    </div>
     <div className="dela">
       
      <Destine image={<img src={kenya}></img>}destine="Mt. kenya" brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi" linkin={<Link to="/"> Read more</Link>} group="group safari ksh 40k/=" individual=" sole safari ksh 20k/="/>
      <Destine image={<img src={ruwenzori}></img>}destine="Mt. Ruwenzori" brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi" linkin={<Link to="/"> Read more</Link>} group="group safari ksh 40k/=" individual=" sole safari ksh 20k/="/>
      <Destine image={<img src={lake}></img>}destine="l. Nakuru" brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi" linkin={<Link to="/"> Read more</Link>} group="group safari ksh 40k/=" individual=" sole safari ksh 20k/="/>
      <Destine image={<img src={tsavo}></img>}destine="Tsavo N.Pk" brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi" linkin={<Link to="/"> Read more</Link>} group="group safari ksh 40k/=" individual=" sole safari ksh 20k/="/>
      <Destine image={<img src={nairobi}></img>}destine="Nairobi. N.Pk" brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi" linkin={<Link to="/"> Read more</Link>} group="group safari ksh 40k/=" individual=" sole safari ksh 20k/="/>
      <Destine image={<img src={coast}></img>}destine="Coastal Beaches" brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi" linkin={<Link to="/"> Read more</Link>} group="group safari ksh 40k/=" individual=" sole safari ksh 20k/="/>
    </div>
   </section>
)
}
export default Destination;