var Repo = require('./taskRepository');


var Task = function(data) {
    this.name = data.name;
    this.completed = false;

    

    
}

//Nie tworzt kopii funkci tylko jedna wspolna

Task.prototype.complete = function() {
    console.log('completing task:' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving task:' + this.name);
    Repo.save(this);
}

module.exports = Task;