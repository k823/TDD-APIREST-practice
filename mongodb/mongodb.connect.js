const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect(
            "mongodb://localhost:27017/jest_node",
            { useNewUrlParser: true,
                useUnifiedTopology: true }
        );
    } catch(err) {
        console.error("Error mongodb");
        console.error(err);
    }
};

module.exports = { connect };