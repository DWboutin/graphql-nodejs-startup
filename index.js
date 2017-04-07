var config = require('./config');

require('babel-core/register')({
  presets: ["es2015", "stage-2"]
});

var api = require('./src/server').default;

api.listen(config.APP_PORT, '0.0.0.0', function() {
  console.log('Server listening to port ' + config.APP_PORT);
});
