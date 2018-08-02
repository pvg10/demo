// Assigment - 
// https://api.github.com/users/mohandere/repos
// 1. List of all project names - forEach, 
// 2. Filter repos with watchers > 1
// 3. remove and repo from list whose id is 84974145
// 4. List the repos with license mit
function getData(){
    fetch("https://api.github.com/users/mohandere/repos")
    .then((resp) => resp.json()) 
    .then(function(data) {
        console.log(data);
        var repos_name_val= data.reduce(function(repo,repo_val){
            return repo_val.name + " " + repo
        }, 0)
        console.log(repos_name_val,"repos_name_val");
        var repos_name= data.sort(function(repo1, repo2){
            var repo_name1= repo1.name.toUpperCase();
            var repo_name2= repo2.name.toUpperCase();
            if(repo_name1 < repo_name2){
                return -1
            }
            if(repo_name1 > repo_name2){
                return 1
            }
                return 0;
       })
        console.log(repos_name,"sort by name");
        console.log("---Remove repo havig id 84974145--- ");
        var remove = data.filter(function(repo){
            return repo.id != 84974145
            });;
        console.log(remove);
        var filter = data.filter(function(repo){
                return repo.license
        });
        console.log("---Filtered by License---");
        console.log(filter);
        var flt= data.filter(function(repo){
            return repo.watchers > 1
        })
        console.log("---Filter by more than 1 watcher");
        console.log(flt);
        console.log("---List Of all projects name---");
        data.forEach(function(repo){
            console.log(repo.name);
        });
    })
  }
getData();
