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
            author:"64f3bffa3fe087c08b6a3dd5" , 
            title: `${sample(descriptors)} ${sample(places)}` ,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestiae qui id repudiandae ipsa alias magni reiciendis fugit officia ut, pariatur atque quos quae at voluptate illo tenetur facere quaerat suscipit placeat! Eligendi consectetur delectus itaque quod amet necessitatibus repudiandae.',
            price,
            images:[
                {
                  url: 'https://res.cloudinary.com/djlealtyj/image/upload/v1694243835/TravelScout/gv1awmfozvezsyzzh0zb.jpg',
                  filename: 'TravelScout/gv1awmfozvezsyzzh0zb',
                },
                {
                  url: 'https://res.cloudinary.com/djlealtyj/image/upload/v1694243836/TravelScout/un7uiiod1811p0vcntcv.jpg',
                  filename: 'TravelScout/un7uiiod1811p0vcntcv',
                },
                {
                  url: 'https://res.cloudinary.com/djlealtyj/image/upload/v1694243837/TravelScout/v7lnxqt6zzjzfezogteg.jpg',
                  filename: 'TravelScout/v7lnxqt6zzjzfezogteg',
                }
              ]
        })

        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})