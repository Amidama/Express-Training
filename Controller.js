// function name sendhello with 2 parameter (req, res) and what function do is {res.send("Hello from controller")} 
const sendhello = (req, res) => {
    try{
    res.send("Hello from controller");
    } catch(error){
        console.log(JSON.stringify(error.message));
        res.status(400).json( {error: JSON.stringify(error.message)})

    }
}

const sendhi = (req, res) => {
    try{
    res.send("Hi from controller")
    } catch(error){
        console.log(JSON.stringify(error.message));
        res.status(400).json( {error: JSON.stringify(error.message)})

    }
}

// object with Properties and method //
let obj = {
    array : [4, 5, 6],
    number : 99,
    funchello : () => {console.log("Hello form obj")}
} 

module.exports = { sendhello , sendhi , obj }