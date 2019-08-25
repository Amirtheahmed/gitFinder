/**
 * GitFinder: Lightweight javascript github user profile search script 
 * @author Amir Ahmed (Techwalia)
 * @license MIT
 * @version 1.0.0
 */
class GitHub {
    constructor(){
        this.client_id = "b112a56caefcc571fb93";
        this.client_secret = "3b460896c1d04063032eda9b46e91fe69532e7b0";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profileData =  await profileResponse.json();
        
        const reposData =  await reposResponse.json();
        
        return {
            profileData,
            reposData
        }
    }
}