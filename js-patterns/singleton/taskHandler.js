var repo = require('./repo');

var taskHandler = function() {
  return {
    save: function() {
      repo.save('Hi from task handler');
    }
  }
}

module.exports = taskHandler();
