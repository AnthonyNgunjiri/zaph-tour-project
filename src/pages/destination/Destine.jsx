import "./destiny.css";

const Destine=({image,destine,brief,linkin,group,individual})=>{
    return(
       <section className="depo">
        <div className="destine">{image}</div>
        <div className="infor">
            <h2 className="ribbon">{destine}</h2>
            <p>{brief}</p>
            <p>{linkin}</p>
            <div className="ribbon2">
            <h3>{group}</h3>
            <h3>{individual}</h3>
            </div>
            
        </div>
       </section>
)
}
export default Destine;
