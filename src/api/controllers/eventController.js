const Event = require('../models/event');

// Funció per a crar un event 
exports.insertEvent = async (req, res) => {
try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
    } catch (err) {
    res.status(400).send(err.message);
    }
};
