module.exports.isLoggedIn = (req , res , next) =>{
    // console.log(req.originalUrl)
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl ;
        req.flash('error' , 'You must be signed in to add a new campground');
        return   res.redirect('/login');
    }
    next();
}

