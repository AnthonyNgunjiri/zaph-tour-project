const Blog=({title,brief})=>{
    return(
<button className="blogger">
    <h2>{title}</h2>
    <p>{brief}</p>
</button>
    )
}
export default Blog;