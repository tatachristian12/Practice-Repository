class Student{
    constructor(username,password){
        this.username = username
        this.password = password
    }

    login(){
      if(this.username === "admin" && this.password === "12345"){
        return true;
        
      } 
    }

    submitAssignment(){
       if(this.login()){
        console.log("Assignment submitted successfully");
       }else{
        console.log("Not authorise to submit assignment");
        
       }
    }
}

let st1 = new Student("admin","12345")
st1.submitAssignment()