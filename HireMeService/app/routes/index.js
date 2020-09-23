const hiremeRoutes = require('./hireme_routes');

module.exports = function(app, db){
    hiremeRoutes(app, db)
}