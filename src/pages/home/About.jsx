
const About=({zodiac,head,details})=>{
    return(
<div className="alchemi">
<button className="abt"><p>{zodiac}</p></button>
<div className="about-item"><h1>&#9733;&#9733;&#9733;{head}&#9733;&#9733;&#9733;</h1><p>{details}</p></div>
    
</div>
    )
}
export default About;