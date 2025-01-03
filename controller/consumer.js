const consumer = require("../models/consumer")





exports.addconsumer = async (req, res) => {
    
    try {


        res.json({ message: 'consumer created successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
};