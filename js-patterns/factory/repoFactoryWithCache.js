var repoFactory = function(repoType) {
    
    this.getRepo = function() {
        if(repoType === 'task') {
            if(this.taskRepo) {
                return this.taskRepo;
            }
            else {
                this.taskRepo = require('./taskRepository')();
                return this.taskRepo;
            }
        }
        if(repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if(repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
}

module.exports = new repoFactory;