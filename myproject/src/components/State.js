import { useState } from "react";

const Home=()=>{
const [count, setCount]   =   useState(0)

const increment=()=>{
    setCount(count +4)
}

return(
    <div>
        <h2>you clicked {count} times?</h2>
        <button onClick={increment} style={{backgroundColor:'grey',
    borderRadius:'15px'}}>click!</button>

    </div>
)
}



export default Home;