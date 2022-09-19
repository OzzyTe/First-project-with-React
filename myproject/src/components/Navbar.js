const Navbar= ()=> {
    return (
        <nav className="navbar">
        <h1>The Endurance Blog</h1>
        <div className="links">
        <a href="/create" style={{
            backgroundColor:"#f1356d",
            borderRadius:'8px',
            color:'white'
        }}>Home</a>
        <a href="/create" style={{
            color:"white",
            backgroundColor:"#f1356d",
            borderRadius:"8px"
        }}>New Blog</a>
        </div>
        </nav>
    )
}

export default Navbar;