function companyName() {

    let userName = document.getElementById("name").value;
    if (userName == ""){
        // console.log("the field shouldn't be mepty")
        document.getElementById("namelabel").innerHTML = "This field shouldn't be empty ! ";
        return false
    }else if (userName !== ""){
        // console.log("the field shouldn't be mepty")
        document.getElementById("namelabel").innerHTML = "Company Name ";
    }
    return true
}
// ____________________________________End Of company nae function_______________________________________

function mobile(){
    
    var dial = [];
    dial = document.getElementById("phone").value;
    

    if (dial.length > 8) {  
        document.getElementById("phonelabel").innerHTML = "phone number too long";
        
    } else if( dial.length < 8){
        document.getElementById("phonelabel").innerHTML = "Enter a valid phone number please";
        return false
    }
    else {
            document.getElementById("phonelabel").innerHTML = "Phone number added successfully";
        }
    return true
}

// ____________________________________End Of company Phone function_______________________________________


function Email() {

    var i;
        posOne = 0;
 
    let email = document.getElementById("email").value;
    if((email.search("@") == -1) || (email.search(".") == -1)|| (email == "") ){
        // alert("invalid");
        document.getElementById("emaillabel").innerHTML = "Please enter a valid email";
        return false
        
    }
       
    for( i = email.length; i > 0 ; i--){

        if ( email[i] == "." || email[i] == "@"){
            posOne = i;
            
        }
        var x = email.length;
        if( (email[x-3] == email[posOne]) || (email[x-4] == email[posOne] )){

            // alert("valid email");    
            return true
        }

    }

}

// ____________________________________End of  Email function____________________________________

function passLength(){
    
    phrase = document.getElementById("password").value;

    if (phrase.length == 0 || phrase.length < 8) {
        // console.log("enter a password of 8 characters")
        document.getElementById("passlabel").innerHTML = "enter a password of 8 characters";
        return false;  
    }else{
        return true;
    }
}

// ________________________End_of_passLength_function______________________________


function passLetters() {
    let phrase = document.getElementById("password").value;
    let letterList = /[A-Z]/g;
    
        if(phrase.match(letterList)){
            return true;
        }
            return false;
        
}
// ________________________End_of_passLetters_function______________________________
    
function passChars() {
    var  phrase = document.getElementById("password").value;
    // charList = ["@", "#", "{", "}", "|", ":"]
    charList = / ^[&\/\\#,()$~%.'":*?<>{}@]+$ /;
    
    if (phrase.match("@")) {
        return true
    }
    return false
}



// ________________________End_of_passChars_function______________________________

function passWord() {
    // console.log(passLength());
    // console.log(passLetters());
    // console.log ( passChars() );
    if(passLength()){
        if(passLength() && ( (passLetters() == true && passChars() == false) || (passLetters() == false && passChars() == true ) ) ){
            document.getElementById("passlabel").innerHTML ="medium password";
        }else if (passLength() && (passLetters() && passChars()) ){
            document.getElementById("passlabel").innerHTML ="strong password";
        }else if (passLength() &&  ( (passLetters() == false && passChars() == false))){
            document.getElementById("passlabel").innerHTML ="weak password";
        }
    }else{
        document.getElementById("passlabel").innerHTML = "Enter a password that contains at least 8 charaters";
    }
     
}

// ________________________End_of_password_function______________________________


function passConfirm(){

    confirm = document.getElementById("confirmpassword").value;
    phrase = document.getElementById("password").value;
    if(confirm == phrase){
        console.log("correct")
        return true
    }else {
        console.log("incorrect"); 
    }

}

// ________________________End_of_confirmPass_function______________________________
    
companyList = [];
function register() {
    companyList = JSON.parse(localStorage.getItem("companies"));
    if (companyList == null) {
        companyList = [];
    }

    company = {
        id : Math.floor(Math.random()* 1000 )+1,
        companyName : document.getElementById("name").value,
        companyEmail : document.getElementById("email").value,
        passConf : document.getElementById("confirmpassword").value,
        accountStatus : "Pending"
    }


    if(companyName()  && passConfirm()  && Email()){
        alert("registration done");    
    
        companyList.push(company)
        localStorage.setItem("companies", JSON.stringify( companyList));
         window.location.href = 'Login.html';
        
         
    }
    else{
        alert("registration undone");
        
    }

}

// ______________________________________End Of Regitration_______________________________________________________________
