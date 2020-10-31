module.exports = function(req, res, next) {
    // logged in
    if (res.user) {
        return next();
    }
    // not logged in
    return res.redirect('/');
};