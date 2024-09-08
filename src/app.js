import './app.css';
const stylesB = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color:"blue",
    fontSize: "20px",
    backgroundColor: "lightblue"
}
function Greetings() {
    const date= new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (
        <div style={stylesB}>
            <h1>Hello World {hours} : {minutes}</h1>

        </div>
    );
}
function HelloUser({name , emoji}){
    return (
        <div className="greeting">
            <h1>Hello {name} {emoji}</h1>
        </div>
    );
    
}
function HelloUsers({name , emoji}){
    return (
        <div style={{fontFamily: "sans-serif",
            textAlign: "center",
            color:"blue",
            fontSize: "20px",
            backgroundColor: "lightblue"}}>
            <h1>Hello {name} {emoji}</h1>
        </div>
    );
    
}
export {
    HelloUser,
    HelloUsers
}

export default Greetings;