function FunctionalEvent(){
    function handleClick(){
        console.log("button is clicked");
    }
    return(
        <div>
            Functional components
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default FunctionalEvent;