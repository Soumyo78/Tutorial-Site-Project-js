let users = [];
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

    console.log(f_name, l_name, email, phone_no, pass, re_pass, gender, dob);
    if(users.length == 0){
        users.push([]);
        users[0].push(f_name);
        users[0].push(l_name);
        users[0].push(email);
        users[0].push(phone_no);
        users[0].push(pass);
        users[0].push(re_pass);
        users[0].push(gender);
        users[0].push(dob);
        email = null;
    }

    else{

        for(let i=0; i<users.length; i++){
            console.log(users[i].indexOf(email));
            if(users[i].indexOf(email) != -1){
                alert("User is already registered. Log in to get into tutorial section");
            }
            else{
                console.log("in else loop");
                users.push([]);
                users[i+1].push(f_name);
                users[i+1].push(l_name);
                users[i+1].push(email);
                users[i+1].push(phone_no);
                users[i+1].push(pass);
                users[i+1].push(re_pass);
                users[i+1].push(gender);
                users[i+1].push(dob);
            }
        }
    }
    console.log(users);
}