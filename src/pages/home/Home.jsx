import Homie from "./Homie";
import "./home.css";
import About from "./About";
import pilgrim from "../../assets/download.jpeg";
import kenya from "../../assets/mtk.jpeg";
import ruwenzori from "../../assets/ruwenzi.jpeg";
import lake from "../../assets/nakuru.jpeg";
import tsavo from "../../assets/tsp.jpeg";
import nairobi from "../../assets/safari.jpeg";
import coast from "../../assets/Kenyan Coast.jpeg";
import Testimonials from "./Testimonials";
import man from "../../assets/nam.jpeg";
import khali from "../../assets/khali.jpeg";
import Amanda from "../../assets/amanda.jpeg";
import mels from "../../assets/mels.jpeg";
import { GiLion } from "react-icons/gi";
import { GiTigerHead } from "react-icons/gi";
import { GiLaurelCrown } from "react-icons/gi";
import { GiPilgrimHat } from "react-icons/gi";
const Home = () => {
  return (
    <section className="home">
      <div className="bg"><h1>Zaph Tours</h1><p id="me">Best Safari's & Adventures for pilgrim</p> </div>
<div className="rib"><h1 className="ribbon1">about us</h1></div>
      
     <section className="aerial">
<About zodiac={<GiLion style={{ fontSize: '6rem',color:"#6B240C" }} />} head="Adventure" details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatem quia velit dolore fuga alias, mollitia doloribus beatae asperiores harum" />
<About zodiac={< GiTigerHead style={{ fontSize: '6rem',color:"#6B240C" }} />} head="Safari's" details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatem quia velit dolore fuga alias, mollitia doloribus beatae asperiores harum" />
<About  zodiac={<GiLaurelCrown style={{ fontSize: '6rem',color:"#6B240C" }} />} head="Parks" details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatem quia velit dolore fuga alias, mollitia doloribus beatae asperiores harum" />
<About  zodiac={<GiPilgrimHat style={{ fontSize: '6rem',color:"#6B240C" }} />} head="Pilgrim" details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatem quia velit dolore fuga alias, mollitia doloribus beatae asperiores harum" />
     </section>
      <div className="rib"><h1 className="ribbon1"> Featured Destination</h1></div>
      
      <section className="dest">
        <Homie
          destiny={<img src={kenya}></img>}
          title="Mt. Kenya"
          brief="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusamus, quasi hic dolorum laudantium ipsum illo asperiores laborum delectus aliquam!"
          price=" ksh +18k only"
        />

        <Homie
          destiny={<img src={ruwenzori}></img>}
          title="Mt. Ruwenzori"
          brief="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusamus, quasi hic dolorum laudantium ipsum illo asperiores laborum delectus aliquam!"
          price="ksh +18k only"
        />
        <Homie
          destiny={<img src={lake}></img>}
          title="L.Nakuru"
          brief="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusamus, quasi hic dolorum laudantium ipsum illo asperiores laborum delectus aliquam!"
          price="ksh +18k only"
        />
        <Homie
          destiny={<img src={tsavo}></img>}
          title="Tsavo NNP"
          brief="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusamus, quasi hic dolorum laudantium ipsum illo asperiores laborum delectus aliquam!"
          price="ksh +18k only"
        />
        <Homie
          destiny={<img src={nairobi}></img>}
          title="Nairobi NNP"
          brief="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusamus, quasi hic dolorum laudantium ipsum illo asperiores laborum delectus aliquam!"
          price="ksh +18k only"
        />
        <Homie
          destiny={<img src={coast}></img>}
          title="Kenyan Coast"
          brief="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusamus, quasi hic dolorum laudantium ipsum illo asperiores laborum delectus aliquam!"
          price="ksh +18k only"
        />
      </section>
      <section>
      <div className="rib"><h1 className="ribbon1">testimonials </h1></div>
      <div className="teller">
      <Testimonials  image={<img src={man} id="clien"></img>} name="Twin John"description="The tour was an unforgettable experience, filled with stunning sights and rich history"   />

      <Testimonials  image={<img src={mels} id="clien"></img>} name="Emily Mel's "description="Every moment of the tour was well-organized and captivating, making it a truly enjoyable journey"   />
      
      <Testimonials  image={<img src={khali} id="clien"></img>} name="Khali Jones"description="Our guide was fantastic, providing insightful information that brought each location to life."   />
      <Testimonials  image={<img src={Amanda} id="clien"></img>} name="Jennie scot"description="This tour exceeded all my expectations and created memories that will last a lifetime."   />
      </div>
      </section>
      

      <div className="form">
      <div className="rib"><h1 className="ribbon1"> Get our weekly tour update</h1></div>
      
<section className="labels">
<h2 className="newsletter-title">Stay Updated with Zaph Tours</h2>
      <p className="newsletter-description">
        Sign up for our newsletter to receive the latest travel tips, destination guides, and exclusive offers directly to your inbox.
      </p>
<section className="label">
<input type="name" placeholder="name"/>
</section>
<section className="label">
   
    <input type="email" placeholder="email" />
   </section>
   <section className="label">
    <input type="Message" placeholder="message" className="meso"/>
    </section>
    <section className="label1">
    <button type="submit">Sign up</button>
    </section>
    </section>
    </div>
   
    </section>
    
  
    
  )
}
export default Home;
