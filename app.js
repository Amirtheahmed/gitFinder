//init github
const github = new GitHub();
// init UI
const UI = new UInterface;

//Search input
const searchUser = document.getElementById("searchUser");


//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== '') {
        github.getUser(userText)
        .then(data => {
            if(data.profileData.message === 'Not Found') {
                //Show alert
                console.log("not found");
                UI.showAlert('User not found', 'alert alert-danger');
            }
            else {
                //Show profile
                UI.showProfile(data.profileData);

                //Show repo
                UI.showRepos(data.reposData);
            }
        });
    }

    else {
        //Clear profile
        UI.clearProfile();
    }
});