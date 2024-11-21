const Auth = require("./Auth");

const prompt = require("prompt-sync")({ sigint: true });

class Comment extends Auth{

    postComment(){
        if (this.userLogin() == true) {
            console.log("Loogin successful.");
            console.log("Post comment now.");
            const comment = prompt("Type your comment: ");
            console.log(`Your comment is ${comment}`);
        }else{
            console.log("You are not authorised to post a commennt");
            
        }
    }
}
const user1 = new Comment();
user1.userRegistration();
user1.postComment();