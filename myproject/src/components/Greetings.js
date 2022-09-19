function Greetings(props){
    const isLoggedIn=props.isLoggedIn;
    if (isLoggedIn) {
        return <Greetings/>;
}
return <guestGreeting/>
}




export default Greetings;