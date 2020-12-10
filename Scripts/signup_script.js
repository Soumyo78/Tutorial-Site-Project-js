let users;
let user_details_arr = JSON.parse(localStorage.getItem("user_details"));
(user_details_arr == null) ? users = [] : users = user_details_arr;

function clearInputFields(){
    document.getElementById('f-name-box').value = "";
    document.getElementById('l-name-box').value = "";
    document.getElementById('email-box').value = "";
    document.getElementById('pH-box').value = "";
    document.getElementById('pass-box').value = "";
    document.getElementById('re-pass-box').value = "";
    document.getElementById('check-box').checked = false;
    dob = document.getElementById('dob-box').value = "";
    let gender_radio_ops = document.getElementsByName('gender');
    let gender = null;
    for(let i=0; i<gender_radio_ops.length; i++){
        if(gender_radio_ops[i].checked){
            gender_radio_ops[i].checked = false;
        }
    }
}

let email_format = /\S+@\S+\.\S+/;
let ph_format = /^[789]\d{9}$/;
function validate(ph, mail, ps, re_ps){
    let error_obj = {};

    function checkEmail(){
        if(mail.match(email_format)){
            error_obj["mail_key"] = true;
        }
        else{
            error_obj["mail_key"] = false;
        }
    }

    function checkPhNum(){
        if(ph.match(ph_format)){
            error_obj.ph_key = true;
        }
        else{
            error_obj.ph_key = false;
        }
    }

    function checkPass(){
        if(re_ps === ps){
            error_obj["pass_key"] = true;
        }
        else{
            error_obj["pass_key"] = false;
        }
    }

    checkEmail();
    checkPhNum();
    checkPass();

   return (!error_obj["pass_key"]) ? alert("Password do not match !")
    : (!error_obj["mail_key"] && !(error_obj["ph_key"])) ? alert("Phone Number and Email is invalid !")
    : (!error_obj["mail_key"]) ? alert("Email is invalid !")
    : (!error_obj["ph_key"]) ? alert("Phone Number is invalid !") :  true;
}

function createNewUser(){
    let f_name = document.getElementById('f-name-box').value;
    let l_name = document.getElementById('l-name-box').value;
    let email = document.getElementById('email-box').value;
    let phone_no = document.getElementById('pH-box').value;
    let pass = document.getElementById('pass-box').value;
    let re_pass = document.getElementById('re-pass-box').value;

    let gender_radio_ops = document.getElementsByName('gender');
    let gender = null;
    for(let i=0; i<gender_radio_ops.length; i++){
        if(gender_radio_ops[i].checked){
            gender = gender_radio_ops[i].value;
        }
    }
    let dob = document.getElementById('dob-box').value;

    const validation = validate(phone_no, email, pass, re_pass);
    if(!validation){
        return;
    }

    if(users.length == 0){
        users.push({
            firstName: f_name,
            lastName: l_name,
            userEmail: email,
            userPhone: phone_no,
            password: pass,
            re_password: re_pass,
            userGender: gender,
            userDOB: dob
        });
    }

    else{

        for(let i=0; i<users.length; i++){
            if(users[i].userEmail == email){
                alert("User is already registered. Log in to get into tutorial section");
                return;
            }
        }
        
        users.push({
            firstName: f_name,
            lastName: l_name,
            userEmail: email,
            userPhone: phone_no,
            password: pass,
            re_password: re_pass,
            userGender: gender,
            userDOB: dob
        });
        
    }
    localStorage.setItem("user_details", JSON.stringify(users));
    alert(`Congratulation 🎉, ${f_name} ${l_name} have successfully registered. Now go to login page and login for getting access of the HTML tutorials.`);
    clearInputFields();
}