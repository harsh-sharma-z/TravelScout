const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user');
const passport = require('passport');

router.get('/register' , (req , res) =>{
    res.render('users/register');
})

router.post('/register' , catchAsync(async(req , res) =>{
    try{
        const {email , username , password} = req.body;
        const user = new User({email , username});
        const registeredUser = await User.register(user , password);
        req.login(registeredUser , err  =>{
            if(err) return next();
            req.flash('success' , 'Welcome to Travel Scout!')
        res.redirect('/campgrounds');
        });
        
    } catch(e) {
        req.flash('error' , e.message);
        res.redirect('register');
    }
}));


router.get('/login' , (req , res) =>{
    res.render('users/login')
})

router.post('/login' , passport.authenticate('local' , {keepSessionInfo:true , failureFlash: true , failureRedirect:'/login'}) ,catchAsync(async(req , res) =>{
    req.flash('success' , 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    // console.log(redirectUrl)
    delete req.session.returnTo;
    res.redirect(redirectUrl); 
}))

router.get('/logout' , (req , res) =>{
    req.logout(function(){
        req.flash('success' , "GoodBye, Logged you out!")
        res.redirect('/campgrounds')
    });
    
})

module.exports = router;