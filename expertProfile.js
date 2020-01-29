

function profileLoading() {

    var userDetails = JSON.parse(localStorage.getItem("expertProfiles")) ;
    var connectedUser = JSON.parse(localStorage.getItem("connectedExpert")).id;
    // console.log(connectedUser);
    // console.log(userDetails.userId);
    var date = new Date(),
    day = date.getDay()+1,
    month = date.getMonth()+1,
    year = date.getFullYear();
    // console.log(day);
    for (i = 0; i < userDetails.length; i++) {
        // console.log(userDetails[i].birthdate);
        // console.log(connectedUser);
        // console.log(userDetails[i].mobile);
        var userBirthDay =  new Date(userDetails[i].birthdate).getDay()+1;
        var userBirthMonth = new Date(userDetails[i].birthdate).getMonth()+1;
        var userBirthYear = new Date(userDetails[i].birthdate).getFullYear();
        var UserAge = year - userBirthYear;
        // console.log(userDetails[i].birthdate);
    
        if (userDetails[i].userId == connectedUser) {
            var name = document.getElementById("leftName").innerHTML = userDetails[i].userName;
            var dropdownName = document.getElementById("dropName").innerHTML = userDetails[i].userName;
            var phone = document.getElementById("phone").innerHTML = userDetails[i].mobile;
            var about = document.getElementById("about").innerHTML = userDetails[i].about;
            var award = document.getElementById("award").innerHTML = userDetails[i].award;
            var year = document.getElementById("year").innerHTML = userDetails[i].year;
            var degree = document.getElementById("degree").innerHTML = userDetails[i].degree;
            var college = document.getElementById("college").innerHTML = userDetails[i].college;
            var completion = document.getElementById("completion").innerHTML = userDetails[i].completion;
            var nameofcompany = document.getElementById("nameofcompany").innerHTML = userDetails[i].nameofcompany;
            var start = document.getElementById("start").innerHTML = userDetails[i].start;
            var end = document.getElementById("end").innerHTML = userDetails[i].end;
            var age = document.getElementById("age").innerHTML = UserAge;
            var specialty = document.getElementById("specialty").innerHTML = userDetails[i].userSpecialty;
            var dropdownSpecialty = document.getElementById("dropSpecialty").innerHTML = userDetails[i].userSpecialty;
            var adress = document.getElementById("adress").innerHTML = userDetails[i].adress;
            var avatar = document.getElementById("leftAvatar").src = userDetails[i].img; 
            var userImg = document.getElementById("userImg").src = userDetails[i].img; 
            var dopdownImage = document.getElementById("dropImg").src = userDetails[i].img; 

        }
   
  
        
    }
 
}