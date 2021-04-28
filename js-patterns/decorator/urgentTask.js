var Task = require('./task');

var UrgentTask = function(name, priority) {
    Task.prototype.call(this, name);
    this.priority = false;
}

//Nie tworzt kopii funkci tylko jedna wspolna

UrgentTask.prototype.notify = function() {
    console.log('notyfing important people');
}

UrgentTask.prototype.save = function() {
  this.notify();
  Task.prototype.save.call(this);
}

module.exports = UrgentTask;
