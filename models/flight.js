var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var destinationSchema = new Schema({

   airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date,
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        require: true
    },
    flightNum: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let today = new Date();
            return new Date(today.setFullYear(today.getFullYear() + 1));
         }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },

    destinationSchema: [destinationSchema]

});


module.exports = mongoose.model('Flight', flightSchema);
