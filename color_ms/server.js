// Setting up express and body parsar for json files
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// object to store data
var hex = '';

// iterate through all hexes and convert each rgb code to hex value
function decToHex(value) {
    if (value > 255) {
        return 'FF'
    } else if (value < 0) {
        return '00'
    } else {
        return value.toString(16).padStart(2, '0').toUpperCase()
    }
};

// iterate through all hexes stored and convert each rgb code to hex value
function rgbToHex(rgb) {
    // split r,g,b into an array seperating by each by ,
    var rgbSplit = rgb.split(',')

    // assigning variables to r g and b
    var r = rgbSplit[0]
    var g = rgbSplit[1]
    var b = rgbSplit[2]

    // parse each string into an int
    r = parseInt(r, 10)
    g = parseInt(g, 10)
    b = parseInt(b, 10)

    // pass each int variable and convert to hexcode and return
    var hexFinal = '#' + decToHex(r) + decToHex(g) + decToHex(b)
    // push to hex and clear color array
    hex = hexFinal
};

// RGB to hex code color conversion. Request to GET RGB code from front end
app.get('/', (req, res) => {
    console.log('Get request made to microservice...')
    const { rgb } = req.query
    rgbToHex(rgb)
    console.log('converting rgb to hex...')
    res.send(hex)
    console.log(`Returning Hex: ${hex}`)
});

// microservice runs on port 4000
app.listen(4000, () => {
    console.log('Listening at port 4000')
});