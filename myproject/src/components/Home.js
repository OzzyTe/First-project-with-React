import {useState} from 'react'
import Bloglist from './Bloglist';
const Home = () =>{
const [name,setName]=useState([
{title:"my new website",body:'a very intereting sites....',author:'endurance',id:1},
{title:"welcome party",body:'a very intereting dev....',author:'ozoemenam',id:2},
{title:"web dev tools",body:'a very interetings dude....',author:'nwaduhu',id:3},
]);
return (
    <div className="home">
                <Bloglist name={name} title="All Blogs!"/>
                <Bloglist name={name.filter((me)=>me.author==='endurance')} title="endurance's Blogs!"/>
            </div>
        );
}
export default Home;