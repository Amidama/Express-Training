const data = require('./data.json');

const getMethodHello = (req, res) => {
    try {
        const x = book;
        res.send('Hello World');
    } catch(error) {
        console.log(JSON.stringify(error.message));
        res.status(400).json({
            err: JSON.stringify(error.message)
        })
    } 
}

const getMethod = (req, res) => {
    res.json(data.find(book => book.id === req.params.id))
}

const postMethod = (req, res) => {
    data.push(req.body)
    console.log(data);
    res.status(201).json(req.body)
}

const putMethod = (req, res) => {
    const updateIndex = data.findIndex(book => book.id === req.params.id)
    data[updateIndex].name = req.body.name;
    // Object.assign(data[updateIndex], req.body);
    console.log(data);
    // res.json(Object.assign(data[updateIndex], req.body))
    res.json(data);
}

const deleteMethod = (req, res) => {
    const deletedIndex = data.findIndex(book => book.id === req.params.id)
    const x = data.splice(deletedIndex, 1);
    console.log(x);
    console.log(data);
    res.status(204).send();
}

module.exports = { getMethodHello, getMethod, postMethod, putMethod, deleteMethod }

// exports.getMethod = (req, res) => {
//     res.json(data.find(book => book.id === req.params.id))
// }