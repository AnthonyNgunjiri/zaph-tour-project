const Homie = ({ destiny, title, brief, price }) => {
    return(
    
<section className="destiny">
        <div className="test">{destiny}</div>
        <div className="dest-item" >
        <h1 className="ribbon">{title}</h1>
        <p className="tell">{brief}</p>
        <h2 className="ribbon2">{price}</h2>
        </div>
        
      </section>  
        
        
    )
 
};

export default Homie;
