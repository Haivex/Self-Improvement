var repo = function() {
    
    var get = function(id) {
            console.log('Getting task: '+id);
            return {
                name: 'new task from db',
            }
        };
        
        const save = function(task) {
        console.log('Saving task to db: '+ task.name);
    };
    
    return {
        get: get,
        save: save
    }
}

module.exports = repo()