// <! register Expert>
function userName() {
    let userN = document.getElementById('userName').value;
    for (i = 0; i < userN.length; i++) {

        if (userN[i] == " ") {
            console.log("Invalid User Name, User Name must not Contain Spaces");
            return false
        }
    }
    return true


}



function email() {

    let email = document.getElementById('email').value;
    if ((email == "") || (email.indexOf('@') == -1) || (email.indexOf('.') == -1)) {
        console.log("Email not valid");
        return false
    }
    var pos = 0;
    var X = email.length;
    for (i = 0; i < email.length; i++) {
        if (email[i] == ".") {
            pos = i;
        }
    }

    if (((email[X - 3] == email[pos]) || (email[X - 4] == email[pos]))) {
        console.log("good");

    }
    return true
}


function phoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    if ((phoneNumber.length == 0) || (phoneNumber.length != 8)) {
        console.log("Invalid Phone Number");
        return false
    }
    var test = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (i = 0; i < phoneNumber.length; i++) {

        if ((test.includes(phoneNumber[i]) == false)) {
            console.log("Only Numbers");
            return false
        }

    }
    console.log("ok");
    return true
}
function majTest() {
    let X = document.getElementById('password').value;
    let Maj = /[A-Z]/g

    if (Maj.test(X)) {
        return true

    }
    return false
}


function specTest() {

    let Y = document.getElementById('password').value;
    let Spec = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/
    // let Spec = /[$&+,:;=?@#|'<>.-^*()%!]/g

    // console.log(Spec.test(Y), Spec, Y);

    if (Spec.test(Y)) {
        return true
    }

    return false;

}






function password() {
    let password = document.getElementById('password').value;
    // console.log(specTest(), majTest());
    let count = 0;
    if ((password.length < 8)) {
        console.log("Invalid Password,Password should have a minimum of 8 characters");
    } else {
        count++;
        if (specTest()) {
            count++;
        }
        if (majTest()) {
            count++;
        }
    }


    if (count == 1) {
        console.log("faible");
    }
    if (count == 2) {
        console.log("moy");
    }
    if (count == 3) {
        console.log("Fort");
    }
}






function confirmPassword() {
    let confirm = document.getElementById('confirmPassword').value;
    let password = document.getElementById('password').value;
    if (confirm == password) {
        console.log("OK");
        return true
    }
    else {
        console.log("passwords don't match")
    }
    return false
}

function registerE() {
    let list = JSON.parse(localStorage.getItem('expert'))
    if (list == null) {
        list = []
    }
    var Ex = {
        id:Math.floor(Math.random() * 1000) + 1, 
        userName: document.getElementById('userName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        accountStatus:"Pending"
    }
    if (userName() && email() &&  phoneNumber() && confirmPassword()) {
        list.push(Ex)
        localStorage.setItem('expert', JSON.stringify(list));
       
        window.location.href = "/login.html";
    }
}
// <! register Expert>




// <! register Companies>
function userName() {
    let userN = document.getElementById('userName').value;
    for (i = 0; i < userN.length; i++) {

        if (userN[i] == " ") {
            console.log("Invalid User Name, User Name must not Contain Spaces");
            return false
        }
    }
    return true


}



function email() {

    let email = document.getElementById('email').value;
    if ((email == "") || (email.indexOf('@') == -1) || (email.indexOf('.') == -1)) {
        console.log("Email not valid");
        return false
    }
    var pos = 0;
    var X = email.length;
    for (i = 0; i < email.length; i++) {
        if (email[i] == ".") {
            pos = i;
        }
    }

    if (((email[X - 3] == email[pos]) || (email[X - 4] == email[pos]))) {
        console.log("good");

    }
    return true
}


function phoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    if ((phoneNumber.length == 0) || (phoneNumber.length != 8)) {
        console.log("Invalid Phone Number");
        return false
    }
    var test = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (i = 0; i < phoneNumber.length; i++) {

        if ((test.includes(phoneNumber[i]) == false)) {
            console.log("Only Numbers");
            return false
        }

    }
    console.log("ok");
    return true
}
function majTest() {
    let X = document.getElementById('password').value;
    let Maj = /[A-Z]/g

    if (Maj.test(X)) {
        return true

    }
    return false
}


function specTest() {

    let Y = document.getElementById('password').value;
    let Spec = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/
    // let Spec = /[$&+,:;=?@#|'<>.-^*()%!]/g

    // console.log(Spec.test(Y), Spec, Y);

    if (Spec.test(Y)) {
        return true
    }

    return false;

}






function password() {
    let password = document.getElementById('password').value;
    // console.log(specTest(), majTest());
    let count = 0;
    if ((password.length < 8)) {
        console.log("Invalid Password,Password should have a minimum of 8 characters");
    } else {
        count++;
        if (specTest()) {
            count++;
        }
        if (majTest()) {
            count++;
        }
    }


    if (count == 1) {
        console.log("faible");
    }
    if (count == 2) {
        console.log("moy");
    }
    if (count == 3) {
        console.log("Fort");
    }
}






function confirmPassword() {
    let confirm = document.getElementById('confirmPassword').value;
    let password = document.getElementById('password').value;
    if (confirm == password) {
        console.log("OK");
        return true
    }
    else {
        console.log("passwords don't match")
    }
    return false
}

function registerC() {
    let list = JSON.parse(localStorage.getItem('company'))
    if (list == null) {
        list = []
    }
    var company = {
        id:Math.floor(Math.random() * 1000) + 1, 
        userName: document.getElementById('userName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        accountStatus:"Pending"

    }
    if (userName() && email() &&  phoneNumber() && confirmPassword()) {
        list.push(company)
        localStorage.setItem('company', JSON.stringify(list));
       
        window.location.href = "/login.html";
    }
}
// <! register Companies>

function AddJob() {
    let list = JSON.parse(localStorage.getItem('CompanyJobOffer'))
    // let companycn = JSON.parse(localStorage.getItem('companyConnected'))||[]
    if (list == null) {
        list = [];
    }
    var object = {
        id: Math.floor(Math.random() * 1000) + 1,
        price: document.getElementById("option-price-2").value,
        Name: document.getElementById("Jobtittle").value,
        type: document.getElementById("jobtype").value,
        company : document.getElementById("company").value,
        specialities: document.getElementById("specialities").value,
        location: document.getElementById("location").value,
        image : document.getElementById("image").value,
        description: document.getElementById("jobdescription").value,
        // owner : companycn

    };
    if(vide()){
        
        list.push(object);
        localStorage.setItem('CompanyJobOffer', JSON.stringify(list));
    // localStorage.setItem('companyConnected',JSON.stringify(list))
    location.href = "http://127.0.0.1:5500/Expert'ease/Company-profile.html";
}
else{
    alert("champs obligatoire");
}
}




function postJob(){
    let list = JSON.parse(localStorage.getItem('ExpertJobOffer'))
    // let expertcn = JSON.parse(localStorage.getItem('expertConnected'))||[]
    if (list == null) {
        list = [];
    }
    var object = {
        id: Math.floor(Math.random() * 1000) + 1,
        expert : document.getElementById("expert").value,
        price: document.getElementById("option-price-2").value,
        Name: document.getElementById("Jobtittle").value,
        type: document.getElementById("jobtype").value,
        specialities: document.getElementById("specialities").value,
        location: document.getElementById("location").value,
        description: document.getElementById("jobdescription").value
    

    };
    if(none()){
        list.push(object);
        localStorage.setItem('ExpertJobOffer', JSON.stringify(list));
    // localStorage.setItem('expertConnected',JSON.stringify(list))
    window.location.replace("http://127.0.0.1:5500/Expert'ease/Expert-profile.html")
    }
else{
    alert("champs obligatoires")
}

}

function none(){
    let expert = document.getElementById("expert").value;
    let price=document.getElementById("option-price-2").value;
    let  Name= document.getElementById("Jobtittle").value;
    let  type= document.getElementById("jobtype").value;
    let specialities= document.getElementById("specialities").value;
    let location= document.getElementById("location").value;
    let description= document.getElementById("jobdescription").value;
     
    
        if((price.length==0)||(Name.length==0)||(type.length==0)|| (expert.length==0)||(specialities.length==0)||(location.length==0)|| (description.length==0)){
        
            return false ; 
        }
        else{
        
            return true;
        }
        }


        function vide(){
            let price=document.getElementById("option-price-2").value;
            let  Name= document.getElementById("Jobtittle").value;
            let  type= document.getElementById("jobtype").value;
            let company = document.getElementById("company").value;
            let specialities= document.getElementById("specialities").value;
            let location= document.getElementById("location").value;
            let description= document.getElementById("jobdescription").value;
             
            
                if((price.length==0)||(Name.length==0)||(type.length==0)|| (company.length==0)||(specialities.length==0)||(location.length==0)|| (description.length==0)){
                    
                    return false ; 
                }
                else{
                    
                    return true;
                }
                }