import "./trip.css";
const Trip=({title,destine,brief,price})=>{
    return(
       <section className="tour">
        <div id="rib"><h2 className="ribbon">{title}</h2></div>
        <div className="package">
            {destine}
           </div>
            <div className="use">
            <p>{brief}</p>
            <p className="ribbon2">{price}</p>
            </div>
            
       </section>
)
}
export default Trip;