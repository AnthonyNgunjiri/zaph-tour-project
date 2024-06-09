import "./footer.css";
const Footer=()=>{
    return(
        <section className="footer">
    <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/destinations">Destinations</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
        <p><a href="/terms-of-service">Terms of Service</a></p>
        <form className="newsletter-signup">
          <label htmlFor="email">Subscribe to our Newsletter:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
<p className="rib">Tony all right reserved </p> 

        </section>
       
    )
}
export default Footer;