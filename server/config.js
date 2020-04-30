const domains = {
    CONFIG_MONGO_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/abcrestaurant',
    CURRENT_URL: process.env.CURRENT_URL || 'http://localhost:8888',
};
module.exports = {
    domains,
}
