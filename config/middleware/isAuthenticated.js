// handles the user authentication

module.exports = function (req, res, next) {
    // logged in
    if (req.user) {
        return next();
    }
    // not logged in
    return res.redirect('/');
};