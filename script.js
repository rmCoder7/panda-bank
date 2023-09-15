document.getElementById("login-btn").addEventListener("click", function(){

// email section

const emailInput = document.getElementById("user-email");
const emailOutput = emailInput.value;
// console.log(emailOutput)


// password section

const passInptu = document.getElementById('user-pass');
const passOutput = passInptu.value;
// console.log(passOutput)

     if (emailOutput=== "join@gmail.com" && passOutput === "1234"){
        // console.log("valid user")
        window.location.href = "bank.html"
     }

     else
     {
        alert('Not valid')
     }



})