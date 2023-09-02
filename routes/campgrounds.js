const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const {CampgroundSchema} = require('../schemas.js'); //to validate data from postman
const {isLoggedIn} = require('../middleware');


const validateCampground = (req , res , next) =>{
    const {error} = CampgroundSchema.validate(req.body)
    // console.log(result);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg , 400)
    }
    else{
        next();
    }
}


router.get('/' , catchAsync(async(req , res) =>{
    const campgrounds = await(Campground.find({}));
    res.render('campgrounds/index' , {campgrounds});
}))


router.get('/new' , isLoggedIn , (req , res) =>{
    
    res.render('campgrounds/new'); 
})


router.post('/' , isLoggedIn, validateCampground , catchAsync(async(req , res) => {
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data' , 400);
    const campground = new Campground(req.body.campground) ;
    await campground.save();
    req.flash('success' , 'Successfully made a new campground!');
    res.redirect(`campgrounds/${campground._id}`)
})) 

router.get('/:id' , catchAsync(async(req , res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    // console.log(campground)
    if(!campground){
        req.flash('error' , 'Cannot find that campground :(')
        res.redirect('/campgrounds')
    }
    res.render('campgrounds/show' , {campground });
}))

router.get('/:id/edit' , isLoggedIn,  catchAsync(async(req , res) =>{
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit' , {campground});
}))

router.put('/:id' , isLoggedIn , catchAsync(async(req , res) =>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id , {...req.body.campground},{new : true});
    req.flash('success' , 'Successfully updated the campground!')
    res.redirect(`/campgrounds/${campground._id}`);
}))

router.delete('/:id' , isLoggedIn , catchAsync(async(req , res) =>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success' , 'The campground has been deleted!')
    res.redirect('/campgrounds');
})) 


module.exports = router;