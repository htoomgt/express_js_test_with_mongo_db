const apiRequest = (req, res, next) => {
    console.log('API route requested!');
    next();
}
const apiRequestII = (req, res, next) => {
    console.log('API route requested! and logging again');
    next();
}
module.exports.apiRequest = apiRequest;
module.exports.apiRequestII = apiRequestII;