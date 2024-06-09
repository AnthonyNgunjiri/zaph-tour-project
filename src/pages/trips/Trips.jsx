import "./trip.css";
import Trip from "./Trip";
import Blog from "./Blog";
import honey from "../../assets/honey.jpeg";
import family from "../../assets/family.jpeg";
import adventure from "../../assets/height.jpeg";
import culture from "../../assets/maasai.jpeg";
import Wildlife from "../../assets/safar.jpeg";
import ecotour from "../../assets/eco.jpeg";
import luxury from "../../assets/resort.jpeg";
import beach from "../../assets/vacate.jpeg";
import retreat from "../../assets/retreat.jpeg";
import Culinary from "../../assets/crips.jpg";
const Trips = () => {
  return (
    <section>
      <div>
       <section id="rib"> <h2 className="ribbon1">Explore the World with Zaph Tours</h2></section> 
        <p className="par">
          Welcome to Zaph Tours, your ultimate travel partner! We specialize in
          curating unforgettable travel experiences tailored to your
          preferences. Whether you're seeking a romantic honeymoon, a fun-filled
          family vacation, an adrenaline-pumping adventure, a deep dive into
          cultural wonders, or a relaxing wellness retreat, Zaph Tours has the
          perfect trip for you.{" "}
        </p>
      </div>
      <div className="matripo">
        <Trip
          title="Honeymoon"
          destine={<img src={honey}></img>}
          brief="Discover the most enchanting places to celebrate love and start your journey together.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem."
          price="ksh30k/="
        />
        <Trip
          title=" Family Vacations"
          destine={<img src={family}></img>}
          brief="Create lasting memories with trips designed for families of all sizes and ages.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem."price="ksh30k/="
        />

        <Trip
          title="Thrilling Adventure "
          destine={<img src={adventure}></img>}
          brief="Experience the adrenaline rush with our action-packed adventure tours.Tours for the BraveLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem."price="ksh30k/="
        />
        <Trip
          title="Cultural Experiences"
          destine={<img src={culture}></img>}
          brief="Explore diverse cultures and traditions on our curated cultural tours.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem.Lorem ."price="ksh30k/="
        />
        <Trip
          title=" Wildlife Safaris"
          destine={<img src={Wildlife}></img>}
          brief="Get up close and personal with nature's most magnificent creaturesLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem.consectetur  "price="ksh30k/="
        />
        <Trip
          title=" Eco-Tours"
          destine={<img src={ecotour}></img>}
          brief="Travel responsibly with our eco-tours, designed for nature lovers.Sustainable and eco-friendlyLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem."price="ksh30k/="
        />
        <Trip
          title="Luxury Vacations"
          destine={<img src={luxury}></img>}
          brief="Experience the ultimate in comfort and style with our luxury travel packages.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem."price="ksh30k/="
        />
        <Trip
          title="Beach Holidays"
          destine={<img src={beach}></img>}
          brief="Find your paradise with our stunning beach destinations.Very relaxingLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem.consectetur"price="ksh30k/="
        />
        <Trip
          title=" Wellness Retreats"
          destine={<img src={retreat}></img>}
          brief="Escape the hustle, Rejuvenate and find peace with our wellness retreats.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem."price="ksh30k/="
        />    
        <Trip
          title="Culinary Tours"
          destine={<img src={Culinary}></img>}
          brief=" Embark on a gastronomic adventure and savor the world's finest cuisines.Get a Taste for PuddingLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatem."price="ksh30k/="
        />
      </div>
      <div className="blog">
        <section>
         <section id="rib" > <h2 className="ribbon1">Zaph Blog,Travel Stories and Tips</h2></section>
          <p className="par">
            Welcome to the Zaph Tours blog! Here, we bring you stories, tips,
            and guides on the unique travel experiences we offer. Whether you're
            planning a romantic getaway, a family vacation, or an adventurous
            journey, we have something for everyone. Dive into our blog to find
            your perfect trip.
          </p>
        </section >
<span className="par"> <h3 id="rib">Explore our range of travel experience</h3>    </span>
       
        <section className="card">
          <Blog
            title="Romantic Honeymoon Destinations with Zaph Tours"
            brief="Discover the most enchanting places to celebrate love and start your journey together."
          />
          <Blog
            title="Fun and Memorable Family Vacations"
            brief="Create lasting memories with trips designed for families of all sizes and ages"
          />

          <Blog
            title="Thrilling Adventure Tours for the Brave"
            brief="Experience the adrenaline rush with our action-packed adventure tours"
          />
          <Blog
            title="Immerse Yourself in Rich Cultural Experiences"
            brief="Explore diverse cultures and traditions on our curated cultural tours."
          />
          <Blog
            title="Exciting Wildlife Safaris"
            brief="Get up close and personal with nature's most magnificent creatures"
          />
          <Blog
            title="Sustainable and Eco-Friendly Tours"
            brief="Travel responsibly with our eco-tours, designed for nature lovers."
          />
          <Blog
            title="Indulge in Luxury Vacations"
            brief="Experience the ultimate in comfort and style with our luxury travel packages."
          />
          <Blog
            title="Relaxing Beach Holidays"
            brief="Find your paradise with our stunning beach destinations."
          />
          <Blog
            title="Rejuvenate with Wellness Retreats"
            brief="Escape the hustle and find peace with our wellness retreats."
          />
          <Blog
            title="Get a Taste for Pudding"
            brief=" Embark on a gastronomic adventure and savor the world's finest cuisines."
          />
        </section>
      </div>
    </section>
  );
};
export default Trips;
