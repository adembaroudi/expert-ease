
var experts = JSON.parse(localStorage.getItem("Experts")) || [] ;
var profileList = JSON.parse(localStorage.getItem("expertProfiles")) || [] ;
// var expertList = JSON.parse(localStorage.getItem("Experts"));
var logged = JSON.parse(localStorage.getItem("connectedExpert"));
var userId;

var firstName = document.getElementById('firstName').value = logged.fName
var lastName = document.getElementById('lastName').value = logged.lName
var birthdate = document.getElementById('birthdate').value = logged.bDay
var email = document.getElementById('email').value = logged.mail
var mobile = document.getElementById('mobile').value
var spec = document.getElementById('espec');
var option = document.createElement("option");
    option.text = logged.especialty;
    spec.add(option)
    option.text = logged.especialty
    userSpecialty = option.text = logged.especialty
    // console.log(userSpecialty);

// ___________________________________________________________________________________________
var imgUpdate = "";
function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        imgUpdate = reader.result;
        document.getElementById("blah").src = imgUpdate;
        document.getElementById("leftavatar").src = imgUpdate
        document.getElementById("menuimg").src = imgUpdate
        document.getElementById("dropimg").src = imgUpdate

    };
    reader.readAsDataURL(input.files[0]);
  };
// ___________________________________________________________________________________________

function Modify() {


    userId = logged.id
    // console.log("found");

    for (i = 0; i < experts.length; i++) {
        // console.log(userId);
        
        if(userId == experts[i].id){
            // console.log("found");
            userInfos = {
                userId,
                userName : document.getElementById('userName').value,
                firstName : document.getElementById('firstName').value ,
                lastName : document.getElementById('lastName').value ,
                birthdate : document.getElementById('birthdate').value ,    
                email : document.getElementById('email').value = logged.mail,
                mobile : document.getElementById('mobile').value,
                about : document.getElementById('about').value,
                award : document.getElementById('award').value,
                degree: document.getElementById("degree").value ,
                college: document.getElementById("college").value,
                completion: document.getElementById("completion").value,
                nameofcompany: document.getElementById("nameofcompany").value,
                start: document.getElementById("start").value,
                end: document.getElementById("end").value,
                year : document.getElementById('year').value,
                adress : document.getElementById('adress').value,
                state : document.getElementById('state').value,
                city : document.getElementById('city').value,
                zip : document.getElementById('zip').value,
                userSpecialty
            }
            var index = profileList.map(item => {return item.userId}).indexOf(userInfos.userId);
            if(imgUpdate !== "")
            {
                userInfos['img'] = imgUpdate;
            }else {
                userInfos['img'] = profileList[index].img;
            }
            if(imgUpdate !== "")
            {
                userInfos['img'] = imgUpdate;
            }else {
                userInfos['img'] = profileList[index].img;
            }
            if(index !== -1) {
                profileList[index] = userInfos;
    
            } else {
                profileList.push(userInfos);
            }
            localStorage.setItem("expertProfiles", JSON.stringify( profileList));
            location.replace("http://127.0.0.1:5500/Expert%20Profile.html")
        }
    }

}   

window.onload = function profileLoading() {

    var userDetails = JSON.parse(localStorage.getItem("expertProfiles")) || [] ;
    var connectedUser = JSON.parse(localStorage.getItem("connectedExpert")).id;
    // console.log(connectedUser);
    // console.log(userDetails.userId);
    
    // console.log("found");
    for (i = 0; i < userDetails.length; i++) {
        // console.log(userDetails[i].userId);
        // console.log(connectedUser);
        // console.log(userDetails[i].mobile);
        
    
        if (userDetails[i].userId == connectedUser) {
            
            document.getElementById('userName').value = userDetails[i].userName
            document.getElementById('avatarName').inn = userDetails[i].userName
            document.getElementById('leftAvatarName').innerHTML = userDetails[i].userName
            document.getElementById('dropName').innerHTML = userDetails[i].userName
            document.getElementById("mobile").value = userDetails[i].mobile;
            document.getElementById("about").value = userDetails[i].about;
            document.getElementById("award").value = userDetails[i].award;
            document.getElementById("degree").value = userDetails[i].degree;
            document.getElementById("college").value = userDetails[i].college;
            document.getElementById("completion").value = userDetails[i].completion;
            document.getElementById("nameofcompany").value = userDetails[i].nameofcompany;
            document.getElementById("start").value = userDetails[i].start;
            document.getElementById("end").value = userDetails[i].end;
            document.getElementById("year").value = userDetails[i].year;
            document.getElementById('adress').value = userDetails[i].adress;
            document.getElementById('state').value = userDetails[i].state;
            document.getElementById('city').value = userDetails[i].city;
            document.getElementById('zip').value = userDetails[i].zip;
            document.getElementById('home').innerHTML = userDetails[i].adress;
            document.getElementById('birthday').innerHTML = userDetails[i].birthdate; 
            document.getElementById("blah").src = userDetails[i].img;
            document.getElementById("leftavatar").src = userDetails[i].img; 
            document.getElementById("menuimg").src = userDetails[i].img;   
            document.getElementById("dropimg").src = userDetails[i].img;         
        }

    }
    
          
}


