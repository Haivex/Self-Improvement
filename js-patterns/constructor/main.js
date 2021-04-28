var Task = require('./task');

var task1 = new Task('create demo');
var task2 = new Task('create modules');
var task3 = new Task('create singleton');
var task4 = new Task('create prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();