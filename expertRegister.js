function userName() {

    let userName = document.getElementById("username").value;
    if (userName == ""){
        // console.log("the field shouldn't be mepty")
        document.getElementById("username").placeholder = "This field shouldn't be empty ! ";

        return false
    }
    return true
}
// ____________________________________End Of Username function_______________________________________

function firstName() {

    let firstname = document.getElementById("firstname").value;
    if (firstname == ""){
        // console.log("the field shouldn't be mepty")
        // document.getElementById("firstname").placeholder = "This field shouldn't be empty ! ";
        
        return false
    }
    return true
}
// ____________________________________End Of firstname function_______________________________________

function lastName() {

    let lastname = document.getElementById("lastname").value;
    if (lastname == ""){
        // console.log("the field shouldn't be mepty")
        document.getElementById("lastname").placeholder = "This field shouldn't be empty ! ";
        
        return false
    }
    return true
}

// ____________________________________End Of Lastname function_______________________________________

function Email() {

    var i;
        posOne = 0;
 
    let email = document.getElementById("email").value;
    if((email.search("@") == -1) || (email.search(".") == -1)|| (email == "") ){
        // alert("invalid");
        document.getElementById("email").placeholder = "Please enter a valid email";
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
// ____________________________________End Of Email function_______________________________________


function ageCalc() {

        today = new Date();
        todayYear = today.getUTCFullYear();    //tyear = today's year (2019)
        todayMonth = today.getUTCMonth();   //tyear = today's month (10 +1)
        // todayDay = today.getUTCday();       //tyear = today's year (19)

        birthday = new Date(document.getElementById("dateOfBirth").value);

        birthdayYear = birthday.getUTCFullYear();  //bYear   = birthday's year( the value that user defines)
        birthdayMonth = birthday.getUTCMonth(); //bMonth  = birthday's month( the value that user defines)
        // birdhtdayDay = birthday.getUTCDay();     //bDay    = birthday's day( the value that user defines)

        diffYear = todayYear - birthdayYear ;
        diffMonth = todayMonth - birthdayMonth
        
        if( diffYear < 25 ) {
            alert( "alert : too young")
            return false;
        } else if (diffYear == 25) {
            if (diffMonth == 0) {
                alert( "alert : same month"  )
            }
        }else {
        //    alert( "alert : you have the required age" )
        }
    return true
}
// ________________________End_of_ageCalc_function______________________________


function passLength(){
    
    phrase = document.getElementById("password").value;

    if (phrase.length == 0 || phrase.length < 8) {
        // console.log("enter a password of 8 characters")
        document.getElementById("password").placeholder = "enter a password of 8 characters";
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
            console.log("medium password");
        }else if (passLength() && (passLetters() && passChars()) ){
            console.log("strong password");
        }else if (passLength() &&  ( (passLetters() == false && passChars() == false))){
            console.log("weak password");
        }
    }else{
        console.log("Enter a password that contains at least 8 charaters");
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
    
// console.log( userName() )
// console.log( firstName() )
// console.log( lastName() ) 
// console.log( ageCalc() )
// // console.log( phone() )
// console.log( passWord() )
// console.log( passConfirm() )

expertList = [];
specialtiesList = []
function register() {
    expertList = JSON.parse(localStorage.getItem("Experts"));
    if (expertList == null) {
        expertList = [];
    }

    // especialtiesList = JSON.parse(localStorage.getItem("especialties")) || []

    element = document.getElementById("mySelect");
    especialty = element.options[element.selectedIndex].text,
    value = element.options[element.selectedIndex].value;

    // specialties = {
    //     specId : Math.floor(Math.random()* 100 )+1,
    //     especialty : element.options[element.selectedIndex].text
    // }
    expert = {
        id : Math.floor(Math.random()* 1000 )+1,
        usName : document.getElementById("username").value,
        fName : document.getElementById("firstname").value,
        lName : document.getElementById("lastname").value,
        bDay : document.getElementById("dateOfBirth").value,
        mail : document.getElementById("email").value,
        passConf : document.getElementById("confirmpassword").value,
        especialty : element.options[element.selectedIndex].text,
        accountStatus : "Pending"
    }


    if(userName()  && firstName()  && lastName() && ageCalc()  && passConfirm()  && Email() ){
        alert("registration done");    
    
        expertList.push(expert)
        // especialtiesList.push(especialties)

        localStorage.setItem("Experts", JSON.stringify( expertList));
        // localStorage.setItem("especialties", JSON.stringify(specialtiesList))

        // myObj_serialized = JSON.stringify(myObj)         // tansform Object(myObj) to String
        // localStorage.setItem("myObj", myObj_serialized)  // puttting the transformed String in the local storage

        window.location.href = "login.html";
        // location.reload()
        
    }
    else{
        alert("registration undone");
        
    }

}

// ______________________________________End Of Regitration_______________________________________________________________

  

function specialities() {
    console.log(2);
    let speciality = JSON.parse(localStorage.getItem('Spec')) || []

    var html = `	  <div>
    <select id="specialities"class="form ui selection dropdown font-weight-bold" onchange="searchspec()" >
        <option value="none" ><h1>Specialities</h1></option>`
    for (i = 0; i < speciality.length; i++) {
        console.log(3);

        html += ` 
      <option  value="${speciality[i].Name}"><h6>${speciality[i].Name}</h6></option>`
    }
    html += `  </select>
  </div><br> <br>`
    document.getElementById("mySelect").innerHTML = html;
    
    
    

}









// textInput.addEventListener('blur',
//     function () {
//          this.classList.remove('placeholderred');
//     }
// );