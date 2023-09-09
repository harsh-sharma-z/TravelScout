const mongoose = require('mongoose');
const Review = require('./review');
const User = require('./user');
const Schema = mongoose.Schema;
//https://res.cloudinary.com/djlealtyj/image/upload/v1694245936/TravelScout/nym7fg6qkx4laroe8i7u.jpg

const ImageSchema = new Schema({
    url: String,
    filename: String
})

const opts = { toJSON: {virtuals: true}}

ImageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload' , '/upload/w_200')
})
const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],
    geometry:{
        type:{
            type: String,
            enum: ['Point'],
            require: true
        },
        coordinates:{
            type: [Number],
            require: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
} , opts);


CampgroundSchema.virtual('properties.popUpMarkup').get(function() {
    return `<strong><a href="/campgrounds/${this._id}">${this.title}</a></strong>`
})

CampgroundSchema.post('findOneAndDelete' , async function(doc){
    if(doc){
        await Review.deleteMany({
            _id: {
                $in : doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground' , CampgroundSchema);