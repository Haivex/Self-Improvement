var Task = function(name) {
    this.name = name;
    this.completed = false;

    

    
}

//Nie tworzt kopii funkci tylko jedna wspolna

Task.prototype.complete = function() {
    console.log('completing task:' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving task:' + this.name);
}

module.exports = Task;