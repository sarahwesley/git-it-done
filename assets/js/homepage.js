var getUserRepos = function() {
    fetch("https://api.github.com/users/octocar/repos");
};

getUserRepos();