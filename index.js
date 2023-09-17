function validate(){
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcorrectpassword(password,cpassword)

}

function checkusername(username){
    var regexPattern = /^[a-zA-Z0-9]+$/;
    if(username.length > 7){
        if(regexPattern.test(username)){
            if (username.charAt(0) === username.charAt(0).toUpperCase()) {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerHTML=""
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerHTML="Username must starts with the Capital letter"
    }}
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerHTML="Username must contains only letters and numbers"
    }}
    else if(username.length==0){
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerHTML="Please provide the username"
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerHTML="Username must be 8 letters long"
    }
}

function checkemail(email){
    if(email.length==0){
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerHTML="Please provide the email"
    }
    else if(email.length>=8 && email.includes('@')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerHTML=""
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerHTML="Email must be 8 letters long and it should include @"
    }
    
}
function checkpassword(password){
    var regexPattern = /^[a-zA-Z0-9]+$/;
    var hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    if(password.length==0){
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerHTML="Please provide the password"
    }
    else if(password.length>=6 && hasSpecialCharacter){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerHTML=""
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerHTML="Password must be 6 letters long and it should contain a special character"
    }
    if(password.length==0){
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerHTML="Please provide the password"
    }
    }
function checkcorrectpassword(password, cpassword) {
    if (password == cpassword && cpassword.length!=0) {
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('error', 'success');
        document.getElementById('cpassword_error').innerHTML = "";
    } else {
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').innerHTML = "Password does not match";
    }
    if(cpassword.length==0){
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').innerHTML = "Please enter the confirm password"
    }
}


