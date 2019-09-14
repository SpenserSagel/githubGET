url = "https://api.github.com/users/";

function buildURL(user){
    url += (user+"/repos");
    console.log(url);
    return url;
}

function displayRepos(user){
    $(".display").html("");
    for(i=0;i<user.length;i++){
        $(".display").append(`<li><p>${user[i].name}</p><a href="${user[i].html_url}">link</a></li>`);
    }
}

function getUserRepos(user){
    fetch(buildURL(user))
    .then(response => {
        if(response.ok){
            return response.json();
        }

        throw new Error(response.statusText);
    })
    .then(responseJson => displayRepos(responseJson))
    .catch(error => console.log("error"));
}

function hitSubmit(){
    $(".userInput").on("submit", event => {
        event.preventDefault();
        user = document.getElementById("input").value;
        getUserRepos(user);
    })
}

$(hitSubmit)