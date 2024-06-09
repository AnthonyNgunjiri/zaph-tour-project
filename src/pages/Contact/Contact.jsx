import "./contact.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiCityFill } from "react-icons/pi";
import { BsTelephoneX } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiTempHotLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { MdContactMail } from "react-icons/md";
const Contact = () => {
  return (
   <div>
     <span className="rib"><h2 className="ribbon1">Stay Updated with Zaph Tours</h2></span>
     <div className="servers">
     <h2><MdContactMail /> WRITE TO US</h2>
     <h2><IoLocationOutline />LOCATION</h2>
     </div>
     <div className="for">
      <section className="formie">
       
        <p className="newsletter">
          Sign up for our newsletter to receive the latest travel tips,
          destination guides, and exclusive offers directly to your inbox.
        </p>
        <section>
          <input type="name" placeholder="name" />
        </section>
        <section>
          <input type="email" placeholder="email" />
        </section>

        <section>
          
          <input type="Message" placeholder="Message" id="meso" />
          </section>
          <section>
          <button type="submit">Sign up</button>
        </section>
      </section>

      <section>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.656919248802!2d36.86101999999999!3d-1.3824923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0fbbde36bc45%3A0x6f9671d1966870ec!2sNairobi%20National%20Park!5e0!3m2!1sen!2ske!4v1717858325382!5m2!1sen!2ske"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
    </div>
    <section className="contact">
    <section className="ribbon2">
          <h3>Contact Information</h3>
          <address>
            <p>Zaph Tours</p>
            <p>123 Adventure Lane</p>
            <p><PiCityFill />Travel City, TX 78901</p>
          </address>
          <p><BsTelephoneX />Phone:(555)123-4567</p>
          <p><MdEmail />Email:@zaphtours.com</p>
          </section>
        <section className="ribbon2">
        <h3>Office Hours:</h3>
          <p>Mon - Fri: 9AM -6PM</p>
          <p>Sat: 10 AM - 4 PM</p>
          <p>Sun: Closed</p>
        </section>
        
        <section className="ribbon2">
          <h3>Follow Us</h3>
          <div className="wen">
          <p><a href="http://facebook.com/zaphtours"><FaFacebookSquare />Facebook</a></p>
          <p><a href="http://twitter.com/zaphtours"><FaSquareXTwitter />Twitter</a></p>
          <p><a href="http://instagram.com/zaphtours"><FaSquareInstagram />Instagram</a></p>
          <p><a href="http://linkedin.com/company/zaphtours"><GrLinkedin />LinkedIn</a></p>
          </div>
         
        </section>
        
        <section className="ribbon2">
          <h3>Customer Service</h3>
          <p><RiTempHotLine /> Support Hotline:+1(555)789-0123(24/7 support)</p>
          <p> <IoChatboxEllipsesOutline /> Live Chat:@zaph.com </p>
        </section>
        
        <section className="ribbon2">
          <h3> Feedback  <VscFeedback /></h3>
          <p>Your feedback helps us improve our services. Please let us know how we can serve you better.</p>
        </section>
        

    </section>
   </div>
  );
};
export default Contact;
