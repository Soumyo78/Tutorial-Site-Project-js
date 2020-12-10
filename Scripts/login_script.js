let user_details_arr = JSON.parse(localStorage.getItem("user_details"));
let user_name = null;

function checkEmailPass(user_mail, user_pass){
    for(let i=0; i<user_details_arr.length; i++){
        if((user_details_arr[i]["userEmail"] == user_mail) && (user_details_arr[i]["password"] == user_pass)){
            user_name = `${user_details_arr[i]["firstName"]} ${user_details_arr[i]["lastName"]}`;
            return true;
        }
    }
    return false;
}

function onLogin(){
    let login_email = document.getElementById('login-email-box').value;
    let login_pass = document.getElementById('login-password-box').value;

    const validate = checkEmailPass(login_email, login_pass);
    if(!validate){
        alert("Email or password is incorrect. If not registered, signup first !");
        return;
    }
    sessionStorage.setItem("user-name", user_name);
    location.replace("tutorial.html");
}