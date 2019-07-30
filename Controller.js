// function name sendhello with 2 parameter (req, res) and what function do is {res.send("Hello from controller")} 
const sendhello = (req, res) => {
    res.send("Hello from controller")
}

const sendhi = (req, res) => {
    res.send("Hi from controller")
}

// object with Properties and method //
let obj = {
    array : [4, 5, 6],
    number : 99,
    funchello : () => {console.log("Hello form obj")}
} 

module.exports = { sendhello , sendhi ,obj }