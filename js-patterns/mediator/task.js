var Task = function(data) {
  this.name  = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

Task.prototype.complete = function() {
  this.completed = true;
  console.log('completing task ' + this.name);
};

var TaskService = function() {
  return {
    complete: function(task) {
      task.completed = true;
      console.log('completing task ' + task.name);
    },
    setCompleteDate: function(task) {
      task.completedDate = new Date();
      console.log(task.name + 'completed on ' + task.completedDate);
    },
    notiFyCompletion: function(task, user) {
      console.log('Notifying ' + user +' of the completion of ' + task.name);
    },
    save: function (task) {
      console.log('Saving task: '+ task.name);
    }
  }
}()

var myTask = new Task({
  name: 'Task name',
  priority: 0,
  project: 'Secret project',
  user: 'me',
  completed: false,
})

//console.log(myTask);

const TaskServiceWrapper = function() {
  var completeAndNotify = function (task, user) {
    TaskService.complete(task);
    if(myTask.completed == true) {
      TaskService.setCompleteDate(task);
      TaskService.notiFyCompletion(task, user);
      TaskService.save(task, user);
    }
  }

  return {
    completeAndNotify: completeAndNotify
  }
}()

//TaskServiceWrapper.completeAndNotify(myTask, myTask.user)

//console.log(myTask);

module.exports = Task;
