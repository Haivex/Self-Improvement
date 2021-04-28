function repoFactory() {
    var repos = this;
    var repoList = [{
        name: 'task', source: './taskRepository',
    },
                   {
        name: 'user', source: './userRepository',
    },
                       {
        name: 'project', source: './projectRepository',
    
                   }]
    
    repolist.forEach((repo) => {
        repos[repo.name] = require(repo.source)();
    })
}

module.exports = new repoFactory