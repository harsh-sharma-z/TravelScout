const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places , descriptors} = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/travel-scout' , {
    useNewUrlParser: true,
    // useCreateIndex: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error" , console.error.bind(console , "connection error:"));
db.once("open" , () => {
    console.log("Database connected!");
});


const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i = 0 ; i < 50 ; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10; 
        const camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}` ,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestiae qui id repudiandae ipsa alias magni reiciendis fugit officia ut, pariatur atque quos quae at voluptate illo tenetur facere quaerat suscipit placeat! Eligendi consectetur delectus itaque quod amet necessitatibus repudiandae.',
            price
        })

        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})