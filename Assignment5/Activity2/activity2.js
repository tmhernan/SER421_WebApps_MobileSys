var repo = [];
var repoSecond = [];
var username;
var filteredRepos = [];

var fetchUserRepo = function() {
    username = document.getElementById('username').value;
    console.log('hello');

    fetch('https://api.github.com/users/' + username + '/repos')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (let element of json) {
                repo.push(element);

                console.log(element.name);

                console.log(element.created_at);

                console.log(element.updated_at);

                console.log(element.size);

                console.log(element.forks);

                console.log(element.open_issues_count);

                //var owner = element.owner.response.json();

                /*
                for(const element of owner){

                    console.log(element.html_url);
                }
*/
                console.log(element.language);

                console.log(element.git_url);

                console.log(element.downloads_url);
                console.log(element.downloads_url);
            }
        })
        .then(() => {
            this.getRepo();
        });
};

function getRepo() {
    var table = document.getElementById('table');
    var repo1 = table.insertRow(1);

    var repo1branches = repo1.insertCell(0);
    var repo1download = repo1.insertCell(0);
    var repo1list = repo1.insertCell(0);
    var repo1html = repo1.insertCell(0);
    var repo1issues = repo1.insertCell(0);
    var repo1fork = repo1.insertCell(0);
    var repo1size = repo1.insertCell(0);
    var repo1time = repo1.insertCell(0);
    var repo1name = repo1.insertCell(0);

    repo1name.innerHTML = repo[0].name;
    repo1time.innerHTML = 'Created At: ' + repo[0].created_at + '<br>' + 'Updated at: ' + repo[0].updated_at;
    repo1size.innerHTML = repo[0].size;
    repo1fork.innerHTML = repo[0].forks;
    repo1issues.innerHTML = repo[0].open_issues_count;
    repo1html.innerHTML = repo[0].owner.html_url;
    repo1list.innerHTML = 'Languages: ' + repo[0].language + ' <br> Language url: ' + repo[0].languages_url;
    repo1download.innerHTML = repo[0].downloads_url;
    repo1branches.innerHTML = '<button type = ' + 'button' + '> Branches';

    var repo2 = table.insertRow(2);

    var repo2branches = repo2.insertCell(0);
    var repo2download = repo2.insertCell(0);
    var repo2list = repo2.insertCell(0);
    var repo2html = repo2.insertCell(0);
    var repo2issues = repo2.insertCell(0);
    var repo2fork = repo2.insertCell(0);
    var repo2size = repo2.insertCell(0);
    var repo2time = repo2.insertCell(0);
    var repo2name = repo2.insertCell(0);

    repo2name.innerHTML = repo[1].name;
    repo2time.innerHTML = 'Created At: ' + repo[1].created_at + '<br>' + 'Updated at: ' + repo[1].updated_at;
    repo2size.innerHTML = repo[1].size;
    repo2fork.innerHTML = repo[1].forks;
    repo2issues.innerHTML = repo[1].open_issues_count;
    repo2html.innerHTML = repo[1].owner.html_url;
    repo2list.innerHTML = 'Languages: ' + repo[1].language + ' <br> Language url: ' + repo[1].languages_url;
    repo2download.innerHTML = repo[1].downloads_url;
    repo2branches.innerHTML = '<button type = ' + 'button' + '> Branches';
}

//
var fetchBranchList = oneTime(function() {
    fetch('https://api.github.com/users/' + username + '/repos')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (let element of json) {
                repoSecond.push(element);
            }
        })
        .then(() => {
            //filter out first two repos
            for (const element of repoSecond) {
                var newList = element.name;

                if (
                    newList.localeCompare(repo[1].name) === 1 ||
                    newList.localeCompare(repo[1].name) === 2 ||
                    newList.localeCompare(repo[2].name) === 1 ||
                    newList.localeCompare(repo[1].name) === 2
                ) {
                    filteredRepos.push(element);
                }
            }
        })
        .then(() => {
            console.log(filteredRepos);
            this.getDropDown();
        });
});

var getDropDown = function() {
    //if array is not empty
    for (var i = 0; i < 5; i++) {
        var option = document.createElement('OPTION');
        option.value = filteredRepos[i].name;
        console.log(option.value);
        option.innerHTML = filteredRepos[i].name;
        select.appendChild(option);
    }
};

function oneTime(n, context) {
    var res;

    return function() {
        if (n) {
            res = n.apply(context || this, arguments);
            n = null;
        }

        return res;
    };
}

var getSelectedRepo = function() {
    var list = document.getElementById('select');
    var val = list.options[list.selectedIndex].text;

    console.log(val);
    console.log(filteredRepos);
    console.log(filteredRepos.length);

    var selectedVal;
    for (var i = 0; i < filteredRepos.length; i++) {
        console.log('hello');
        if (filteredRepos[i].name.localeCompare(val) === 0) {
            selectedVal = i;
            console.log(i);
            break;
        }
    }

    var table = document.getElementById('table');
    var repo3 = table.insertRow(3);

    var repo3branches = repo3.insertCell(0);
    var repo3download = repo3.insertCell(0);
    var repo3list = repo3.insertCell(0);
    var repo3html = repo3.insertCell(0);
    var repo3issues = repo3.insertCell(0);
    var repo3fork = repo3.insertCell(0);
    var repo3size = repo3.insertCell(0);
    var repo3time = repo3.insertCell(0);
    var repo3name = repo3.insertCell(0);

    repo3name.innerHTML = filteredRepos[selectedVal].name;
    repo3time.innerHTML = 'Created At: ' + filteredRepos[selectedVal].created_at + '<br>' + 'Updated at: ' + filteredRepos[selectedVal].updated_at;
    repo3size.innerHTML = filteredRepos[selectedVal].size;
    repo3fork.innerHTML = filteredRepos[selectedVal].forks;
    repo3issues.innerHTML = filteredRepos[selectedVal].open_issues_count;
    repo3html.innerHTML = filteredRepos[selectedVal].owner.html_url;
    repo3list.innerHTML = 'Languages: ' + filteredRepos[selectedVal].language + ' <br> Language url: ' + filteredRepos[selectedVal].languages_url;
    repo3download.innerHTML = filteredRepos[selectedVal].downloads_url;
    repo3branches.innerHTML = '<button type = ' + 'button' + '> Branches';
};

function clearRow() {
    console.log('hello');

    var tab = document.getElementById('table');
    tab.removeChild(tab.children[0]);
}
