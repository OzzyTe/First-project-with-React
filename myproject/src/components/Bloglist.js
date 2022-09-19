const Bloglist=(props)=>{
const name=props.name
const title=props.title

    return (
        <div className="home">
            <h2>{title}</h2>
        {name.map((me)=>(
            <div className='me-preview' key={me.id}>
                <h2>{me.title}</h2>
                <p>written by {me.author}</p>
            </div>
        ))}
    </div>
);
}

export default Bloglist;