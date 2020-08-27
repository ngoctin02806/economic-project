const checkExistUser = async (req, res, next) => {
    try {
        if (req.user) return next();

        return res.redirect('/dang-nhap');
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    checkExistUser
}